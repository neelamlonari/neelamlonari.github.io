// import {Route,Routes} from "react-router-dom";
import React, {useState,useEffect} from 'react';
import "./index.css";
// import moreDetails from"./pages/WeatherDisplay";
// import Nav from "./components/nav"

const api ={
   key: "d6f17b38782289549fb2d753c911708c",
   base:"https://api.openweathermap.org/data/2.5/",

}


function App() {
  const [query,setQuery]= useState('New York');
  const [weather,setWeather]= useState([]);

    const search=async()=>{
    const response=await fetch(`${api.base}/weather?q=${query}&appid=${api.key}`)
    response.json()
    .then(res=>{setWeather(res) })
    
    };
     useEffect(()=>{
      search();
      },[]);

  const date =()=>{
    let options={year:"numeric",month:"long",day:"numeric"}
  
     let date = new Date();
      date  = date.toLocaleDateString("en-US",options);
      return `${date}`;
  }
return (
  <div  className={(typeof weather.main !="undefined") ?
     ((weather.main.temp > 20) ? 'App warm' : 'App'):'App'}>   
      <main>
        <div className="search-box">
          <input type ="text"
                 className="search-bar"
                 placeholder="search..."
                 onChange = {e => setQuery(e.target.value)}
                 value = {query}

                 />
                 
                 <button onClick={search}>search</button> 
                 
        </div>
      
        
        {typeof weather.main !="undefined" ?(

        <div>
          <div className="Location-box">
            {<div className="Location">{weather.name},{weather.sys.country}</div> }
            <div className='date'>{date(new Date())}</div>
          </div>
          < div className= "weather-box">
            <div className= "temp">{Math.round(weather.main.temp/10)}°c</div>
            <div className='weather'>{weather.weather[0].main}</div>
          </div>
          <div>
            <div className='row'>

              <div className='small-card'>
                <div>Humidity:{weather.main.humidity}%</div>
                <div>Clouds :{weather.clouds.all}%</div>
                
                <div>Visibility:{weather.visibility}km</div>

              </div>
              {/* <div className="App">
                <Nav/>
                 <Routes>
                 <Route path = "/" element={<moreDetails/>}/>
                 </Routes> */}
              </div>
            </div>
          </div>
        
        // )
     ) : ("")}
     
    </main>
  </div>
  );
 }

export default App;
