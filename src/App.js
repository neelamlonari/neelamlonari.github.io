

import {Route,Routes} from "react-router-dom";
import "./index.css";
 import Weather from"./pages/Weather";
 import Nav from "./components/nav"
import WeatherDisplay from './components/WeatherDisplay';

 export default function App (){
       return(    

            <div className="App">
                      <Nav/>
                      <WeatherDisplay/>
                      <Routes>
                       <Route path = "/" element={<Weather/>}/>
                      </Routes> 
              </div> 
            );
       }

