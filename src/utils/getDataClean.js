import { filterList } from '../utils/filteredArrayList'

export const getDataClean=(weatherFuture) => {
    const  cleanData = []
    
    weatherFuture.map((item)=>(
                cleanData.push({
                    date: item.dt,
                    temp: item.main.temp,
                    feels_like: item.main.feels_like,
                    temp_max: item.main.temp_max,
                    temp_min: item.main.temp_min,
                    humidity: item.main.humidity,
                    pressure: item.main.pressure,
                    weather_main: item.weather[0].main,
                    weather_description: item.weather[0].description,
                    icon : item.weather[0].icon,
                    wind_deg: item.wind.deg,
                    wind_speed:item.wind.speed
                     })
        ))
      const filteredList = filterList(cleanData)

return filteredList
}





