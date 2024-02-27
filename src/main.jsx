import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  PositionProvider } from './context/positionContext.jsx'
import { WeatherDataProvider } from './context/weatherDatacontext.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import PresentDay  from './pages/PresentDay/PresentDay.jsx'
import  DaysFuture  from './pages/DaysFuture/daysFuture.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

 <PositionProvider>
    <WeatherDataProvider>
      <BrowserRouter>  
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path='/today' element={<PresentDay/>}/>
            <Route path='5-days-forecast' element={<DaysFuture/>}/>
          </Route>
        </Routes>
      </BrowserRouter> 
     </WeatherDataProvider>
 </PositionProvider>
 
)
