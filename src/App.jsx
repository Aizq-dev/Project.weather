
import { useContext, useState } from 'react';
import './App.css'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom';
import { WeatherDataContext } from './context/weatherDatacontext';
import Button5days from './components/button5days/button5days'

function App() {
 const {weatherData,loading}= useContext(WeatherDataContext)

  return (
    <>
  { weatherData && 
   <div id='App' className={`App${weatherData.icon}`}>
    <header>
  <Header/>
  </header>
  <main className='mainApp'>
    <div className='presentDay'>
       <h1>{weatherData.name}, {weatherData.country}</h1>
    </div>
    <Outlet />
    <Button5days/>
  </main>
  </div>
}    </>
  )
}

export default App
