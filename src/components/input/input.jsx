import React, {useContext, useEffect, useState}from 'react'
import './input.css'
import { positionContext } from '../../context/positionContext'
import PopupMessage from '../PopupMessage/PopupMessage'
import { fetchCity } from '../../utils/fetchCity'

const input = () => {
const [query , setQuery]=useState('')
const [cities ,setCities]=useState('')
const {setLat, setLon,setTrigger} = useContext(positionContext)
const [visible, setVisible] = useState(false);

const handleKeyPress =(ev)=>{
  if(ev.key === 'Enter' )
  {handleSearch(); 
  }}
 const handleInputChange = (ev) =>{
      setQuery(ev.target.value)
      }

const handleSearch =() =>{    
    fetchCity(query,setCities)
}
const handleOptionClick= (ev)=>{

    setLat(ev.lat)
   setLon(ev.lon)
   setTrigger(prevTrigger => !prevTrigger)
   setQuery('')
   setCities('')
   }
   
useEffect(()=>{
  if (cities && cities.length == 0)
  setVisible(true)
    setTimeout(()=>{
      setVisible(false)
    },3000)},[cities])
   

  return (
  
    <div className='search'>
    <label htmlFor="searcher" className='label_input'>
      <div className='div_input'>
        <input id="searcher" value={query}className="searcher-input" type='text' onKeyPress={handleKeyPress} onChange={handleInputChange} placeholder='Search a city'/>
        <button onClick={handleSearch} className='searcher-button'><img className="lupa"src='./lupa.png'/></button>
      </div>
      {cities && 
     <div  className='label_options'>
      <ul className='options' id='options'>
          { Object.values(cities).map((option)=>(
           
            <li key={option.lat} onClick={()=>handleOptionClick(option)}>
              {option.name}, {option.country}, {option.state}
            </li>
          ))}
        </ul>
        </div>}
    </label> 
    
 
    <PopupMessage message="City not founded" visible={visible}/>
    </div>
  )
}

export default input