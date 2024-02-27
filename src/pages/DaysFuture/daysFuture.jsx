import React, {useContext, useEffect, useState } from 'react'
import { positionContext } from '../../context/positionContext'
import { fetch5days } from '../../utils/fetch5daysforecast'
import { formatHour } from '../../utils/formatHour'
import { getDateFormat } from '../../hooks/getDateFormat';
import { getIcon } from '../../hooks/getIcon';
import {tempCelsius} from '../../hooks/tempCelsius'
import './daysFuture.css'


const DaysFuture = () => {
  const [weatherFuture, setWeatherFuture]=useState('')
  const {lat,lon, trigger}=useContext(positionContext)
 const [loading, setLoading]=useState(true)
  useEffect(()=>{

  if(lat)fetch5days(lat, lon, setWeatherFuture, setLoading)
},[trigger])

  return (<>
  
      {loading && 
    <img src='loading.gif'/>}
      {weatherFuture && !loading &&(
      <div className='daysfuture'> 
        <div className='fixed-row '>  
        
            <div className='day_table'>
            </div>
              {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className='td_hours'> {formatHour(0, i)}
            </div> 
              ))
              }
         </div> 
      <div className='divTable'>
        
      
        <table>
          <thead>
           
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
        </table> 
       
         </div>
       </div> )}
    </>
  )
}

export default DaysFuture