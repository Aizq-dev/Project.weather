
import './PresentDay.css'
import { tempCelsius } from '../../utils/tempCelsius'
import {windDir} from '../../utils/DirectionWind'
import { firstUpper } from '../../utils/FirstUpper'
import { getTime } from '../../utils/getTime'
import { getIcon } from '../../utils/getIcon'
import { useContext } from 'react'
import { WeatherDataContext  } from '../../context/weatherDatacontext'

const PresentDay = () => {
const {weatherData,loading}=useContext(WeatherDataContext)

   
      
  return (

    
        <div className='main'>
            {loading && 
            <img src='loading.gif'/>}
    {weatherData.name.length > 2 && !loading &&
            <div className=' info'>
                    <div className='temp'>
                        <div className='name-icon'>  
                            <h1>{tempCelsius(weatherData.temp)}ºC</h1>
                            <img src={getIcon(weatherData.icon)}/>
                        </div>
        
                        <p>Feels like {tempCelsius(weatherData.feels_like)}ºC. {firstUpper(weatherData.weather_description)}</p>
                        <p>Temperature max : {tempCelsius(weatherData.temp_max)}ºC</p>
                        <p>Temperature min :{tempCelsius(weatherData.temp_min)}ºC</p>
                    </div>
                <div className='list'>
                    <ul>
                        <li>
                            <p>Sunrise: {getTime(weatherData.sunrise)} || Sunset: {getTime(weatherData.sunset)}</p>
                
                        </li>

                        <li>
                            <img className='icon icon-wind' src='brujula.png'/>
                            <p>{weatherData.wind_speed}m/s {windDir(weatherData.wind_deg)}</p>
                        </li>
                        <li>
                            <img className='icon icon-pressure' src='barometro.png'/>
                            <p>{weatherData.pressure} hPa</p>
                        </li>
                        <li>
                            <p>Humidity: {weatherData.humidity}%</p>

                        </li>
                    </ul>
                </div>
           
            </div> 
      
        } 
        </div>
     
     
      )
      
}

export default PresentDay