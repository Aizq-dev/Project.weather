import React,{useEffect, useState} from 'react'
import './button5days.css'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Button5days = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname.substring(1)
    const [message, setMessage]=useState(()=> location === '5-days-forecast' ? 'back' : ' 5-days-forecast')
    const handleClick = ()=>{
        if(location === '5-days-forecast'){
              setMessage('5-days-forecast')
            navigate('/today')
        }else{
          
            navigate('/5-days-forecast')
            setMessage('back')
        }
    }

  return (
    <div><button className='b5days' onClick={handleClick}>{message}</button></div>
  )
}

export default Button5days