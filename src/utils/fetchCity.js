import axios from 'axios'


const Api_Key = '9b88334e127b5110b6f05a04bf7a306b'
const URL_API = 'https://api.openweathermap.org/geo/1.0/direct?q='

export const fetchCity = async (query,setCities,setLoading) => {


  try {
    const res = await axios.get(`${URL_API}${query}&limit=5&appid=${Api_Key}`)
    setCities(res.data)
    setLoading(false)
  } catch (error) {
    console.log('Error fetching city data',error)
  }
    
   


}