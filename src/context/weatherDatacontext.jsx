import React,{createContext, useEffect, useState,useContext} from 'react'
import { positionContext } from '../context/positionContext'
import { myPosition } from '../utils/MyPosition'
import { FetchDataWeather } from '../utils/FetchDataWeather'



export const WeatherDataContext  = createContext()
export const WeatherDataProvider =({children})=>{
    const {stateContext,sendAction} = useContext(positionContext)
    const [loading, setLoading]=useState(false)
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
    myPosition(sendAction)},[])
     
    useEffect(()=>{
      setLoading(true)
         if(stateContext.lat){FetchDataWeather(setWeatherData,stateContext,setLoading)}
        
    },[stateContext.trigger ])
    


  return (
   <WeatherDataContext.Provider value={{weatherData,loading}}>
{children}
   </WeatherDataContext.Provider>  
  )
  }