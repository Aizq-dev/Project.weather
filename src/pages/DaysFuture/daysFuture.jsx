import React, {useContext, useEffect, useState } from 'react'
import { positionContext } from '../../context/positionContext'
import { fetch5days } from '../../utils/fetch5daysforecast'
import { formatHour } from '../../utils/formatHour'
import { getDateFormat } from '../../utils/getDateFormat';
import {getIcon } from '../../utils/getIcon';
import {tempCelsius} from '../../utils/tempCelsius'
import './daysFuture.css'


const DaysFuture = () => {
  const [weatherFuture, setWeatherFuture]=useState('')
  const {stateContext,sendAction}=useContext(positionContext)
 const [loading, setLoading]=useState(true)
  useEffect(()=>{

  if(stateContext.lat)fetch5days(stateContext,sendAction, setWeatherFuture, setLoading)
},[stateContext.trigger])

  return (<>
  
    <div className='divTable'>  {loading && 
    <img src='loading.gif'/>}
      {weatherFuture && !loading &&(
   
        <table>
          <thead>
            <tr className='tr_hours'>
              <th className='day_table'>
              </th>
              {Array.from({ length: 8 }).map((_, i) => (
              <th key={i} className='td_hours'> {formatHour(0, i)}
              </th> 
               ))
               }
            </tr>  
          </thead>
          <tbody>
            { Object.values(weatherFuture).map( (day) => (
              <tr key={`${day[0].date}`}> 
                <th className='day_table'>{getDateFormat(day[0].date)}
                </th>
                {day.map((hourInterval,indx) => (
                <td key={indx*5} className='td_table'>
                  <div className='temp_table'>
                    <img className='icon_table' src={getIcon(hourInterval.icon)}/>
                    <h3>{tempCelsius(hourInterval.temp_max)}ºC/</h3>  
                    <p>{tempCelsius(hourInterval.temp_min)}ºC</p>
                  </div>
                  <div className='hum'>
                    <p>💧{hourInterval.humidity}%</p>
                    <p>{hourInterval.weather_description}</p>
                  </div>

                  <p></p>
                </td>  
                  ))
                }
              </tr>
            )).slice(1)
            }
          </tbody>
 
        </table> )}
    </div></>
  )
}

export default DaysFuture