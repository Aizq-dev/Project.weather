
import axios from 'axios'
import { getDataClean} from '../utils/getDataClean'


const Api_Key = '9b88334e127b5110b6f05a04bf7a306b'
const URL_API = 'https://api.openweathermap.org/data/2.5/forecast?'
export const fetch5days = async ( state,sendAction, setWeatherFuture,setLoading) => {


  try {
    const res = await axios.get(`${URL_API}lat=${state.lat}&lon=${state.lon}&appid=${Api_Key}`)
    const dataClean = getDataClean(res.data.list)
       setWeatherFuture(dataClean)
      setLoading(false)
       
     
    
   
  } catch (error) {
    console.log('Error fetching wheater data',error)
    
    
  }}
    
 
  
