import {useState,useEffect} from "react";
import cloudy from "../images/cloudy.png";
import {WiDayCloudy  } from "react-icons/wi";
import{ WiStrongWind} from "react-icons/wi";
import {WiCloudy} from "react-icons/wi";
import {WiHumidity} from "react-icons/wi";
import {WiThermometer} from "react-icons/wi";
import {FaArrowAltCircleDown} from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";


export default function WeatherDisplay(){
     const api ={
  
        key: "35b5991713a9a5059442e37f0ef572be",
        base:"https://api.openweathermap.org/data/2.5/",
      
      }
     
        const [query,setQuery]= useState('New york');//use usestate to set the value of city's weather by setquery
         const [weather,setWeather]= useState([]);//Initialise weather for empty array
         console.log(weather);
        ///Asyncronous function for fetching data from api url and setweather to response
            const search=async()=>{
             const response=await fetch(`${api.base}/weather?q=${query}&appid=${api.key}`)
             response.json()
             .then(res=>{setWeather(res) })
            };
            ///useeffect hook for calling function everytime with empty dependancy array
              useEffect(()=>{
              search();
               },[]);

        // date function to get current date as per location
          const date =()=>{
             let options={year:"numeric",month:"long",day:"numeric"}
          
              let date = new Date();
                 date  = date.toLocaleDateString("en-US",options);
                return `${date}`;
               }

         return (
           <div  className={(typeof weather.main !="undefined") ?
           //If temperature is greater than 20 °f then background image changes to warm with ternary operator
           //after typing city name press search button , added for useeffect to work

              ((weather.main.temp > 20) ? 'App warm' : 'App'):'App'}>   
               <main>
                 <div className="search-box">
                   <input type ="text"
                          className="search-bar"
                          placeholder="Enter City Name ...."
                          onChange = {e => setQuery(e.target.value)}
                          value = {query}
                           />
                           <button onClick={search}>search</button> 
                  </div>
                
                 {typeof weather.main !="undefined"  ?(
        
                 <div className="container">
                   <div className="Location-box">
                     <div className="Location">
                       {weather.name},{weather.sys.country}</div> 
                     <div className='date'>{date(new Date())}</div>
                   </div>
                   < div className= "weather-box">
                     <div className= "temp"><img src={cloudy} alt="" height="60px" width="60px"/>{Math.round(weather.main.temp/10)}°f</div>
                      <div className='weather'> <WiDayCloudy height="20px" width="20px"/>{weather.weather[0].main}</div>
                      
                   </div>
                   <div>
                     <div className='row'>
        
                       <div className='small-card'>
                        <div className="left-side">
                         <div><WiHumidity height="20px" width="20px" /> {weather.main.humidity}%</div>
                         <div><WiCloudy height="20px" width = "20px"/> {weather.clouds.all}%</div>
                         <div> <WiStrongWind height= "20px" width ="20px"/> {Math.round(weather.wind.speed)} %</div>
                         <div></div>
                         </div>
                         <div className="right-side">
                         <div>Visibility : {weather.visibility}m</div>
                         <div><FaArrowAltCircleDown/> Min {Math.floor(weather.main.temp_min % 10)}°c</div>
                         <div><FaArrowAltCircleUp/>Max {Math.ceil(weather.main.temp_max % 10)}°c</div>

                        </div>
                        </div>
                     
                       </div>
                     </div>
                   </div>
                
              ) : ("")}
            
             </main>
           </div>
          );
}; 
        
        
        

