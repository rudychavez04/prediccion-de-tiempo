import { useState } from "react";

import Form from "./Form";
import Card from "./Card";

const WeatherPanel = () => {
    let urlWeather="https://api.openweathermap.org/data/2.5/weather?appid=ce5244f4ba43a7a95148e9ad39287c7f&lang=es"
    let cityUrl="&q="
    let urlForecast="https://api.openweathermap.org/data/2.5/forecast?appid=ce5244f4ba43a7a95148e9ad39287c7f&lang=es"

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location ,setLocation] = useState("");


    const getLocation = async(loc) =>{
     setLoading(true);
     setLocation(loc);    
     
     
     urlWeather = urlWeather + cityUrl + loc;
     
     await fetch(urlWeather).then((response) =>{
        if(!response.ok) throw {response}
        return response.json();

     }).then((weatherData) =>{

        
        setWeather(weatherData);
     }).catch(error =>{
        console.log(error);
        setLoading(false);
        setShow(false);
     });

     urlForecast = urlForecast + cityUrl + loc;
     
     await fetch(urlForecast).then((response) =>{
        if(!response.ok) throw {response}
        return response.json();

     }).then((forecastData) =>{

        
        setForecast(forecastData);

        setLoading(false);
        setShow(true);

     }).catch(error =>{

        console.log(error);
        setLoading(false);
        setShow(false);

     });

    };



  return (
    <>
    <Form newLocation = {getLocation} />
    
    <Card 
        showData ={show}
        loadingData = {loading}
        weather ={weather}
        forecast = {forecast}
    />
        
   </>
    
  );
}

export default WeatherPanel;

