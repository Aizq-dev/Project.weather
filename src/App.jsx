
import { useContext, useEffect, useState } from 'react';
import './App.css'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom';
import { WeatherDataContext } from './context/weatherDatacontext';
import Button5days from './components/button5days/button5days'

function App() {
 const {weatherData,loading}= useContext(WeatherDataContext)
 const [appIcon, setAppIcon]= useState('')
useEffect(()=>{
  if(weatherData){
    setAppIcon(weatherData.icon)
  }
})
  return (
    <>
  
   <div id='App' className={`App${appIcon}`}>
    <header>
  <Header/>
  </header>
  <main className='mainApp'>
   { weatherData &&  <div className='presentDay'>
       <h1>{weatherData.name}, {weatherData.country}</h1>
    </div>} 
    <Outlet />
    <Button5days/>
  </main>
  </div>
   </>
  )
}

export default App
