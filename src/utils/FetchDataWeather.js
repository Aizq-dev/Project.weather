import axios from 'axios'


const Api_Key = '9b88334e127b5110b6f05a04bf7a306b'
const URL_API = 'https://api.openweathermap.org/data/2.5/weather?'

export const FetchDataWeather = async (setWeatherData, lat, lon, setLoading) => {


  try {
    const res = await axios.get(`${URL_API}lat=${lat}&lon=${lon}&appid=${Api_Key}`)
    
    setWeatherData({
      name :res.data.name,
      country:res.data.sys.country,
      icon:res.data.weather[0].icon,
      wind_deg:res.data.wind.deg,
      wind_speed: res.data.wind.speed,
      temp: res.data.main.temp,
      feels_like:res.data.main.feels_like,
      humidity: res.data.main.humidity,
      pressure: res.data.main.pressure,
      temp_max: res.data.main.temp_max,
      temp_min: res.data.main.temp_min,
      sunrise: res.data.sys.sunrise,
      sunset: res.data.sys.sunset,
      weather_description: res.data.weather[0].description,
      weather_main: res.data.weather[0].main,
      time: res.data.dt,
      timeZone: res.data.timezone


    })
setLoading(false)
  } catch (error) {
    console.log('Error fetching wheater data',error)
    
    
  }
    
   


}