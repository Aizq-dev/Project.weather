
import './PresentDay.css'
import { tempCelsius } from '../../hooks/tempCelsius'
import {windDir} from '../../utils/DirectionWind'
import { firstUpper } from '../../hooks/FirstUpper'
import { getTime } from '../../hooks/getTime'
import { getIcon } from '../../hooks/getIcon'
import { useContext } from 'react'
import { WeatherDataContext  } from '../../context/weatherDatacontext'

const PresentDay = () => {
const {weatherData,loading}=useContext(WeatherDataContext)

   
      
  return (

    
        <div className='main'>
            {loading && 
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifer.com%2Fen%2Fgifs%2Floading&psig=AOvVaw1udcIISgl_6CkS72ncKtUa&ust=1709139679699000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDXxtb_y4QDFQAAAAAdAAAAABAE'/>}
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