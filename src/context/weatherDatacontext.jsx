import React,{createContext, useEffect, useState,useContext} from 'react'
import { positionContext } from '../context/positionContext'
import { myPosition } from '../utils/MyPosition'
import { FetchDataWeather } from '../utils/FetchDataWeather'



export const WeatherDataContext  = createContext()
export const WeatherDataProvider =({children})=>{
    const {lat,lon,trigger,setLat,setLon,setTrigger} = useContext(positionContext)
    
    const [weatherData , setWeatherData]= useState({
        name :"",
      country:"",
      icon:"",
      wind_deg:"",
      wind_speed:"",
      temp:"",
      feels_like:"",
      humidity:"",
      pressure:"",
      temp_max:"",
      temp_min:"",
      sunrise:"",
      sunset:"",
      weather_description:"",
      weather_main:"",
      time:"",
      timeZone:''

    })
    
   useEffect(()=>{ 
    myPosition(setLat, setLon,setTrigger)},[])
     

    useEffect(()=>{
         if(lat){FetchDataWeather(setWeatherData,lat, lon )}
        
    },[trigger ])
    


  return (
   <WeatherDataContext.Provider value={{weatherData}}>
{children}
   </WeatherDataContext.Provider>  
  )
  }