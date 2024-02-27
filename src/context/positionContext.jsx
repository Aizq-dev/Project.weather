import React,{createContext, useState} from 'react'

export const positionContext = createContext()
export const PositionProvider =({children})=>{
    const [lat , setLat]= useState('')
   //  (40.45)

    const [lon, setLon]= useState('')
   //  (-3.7038) 
    const [trigger, setTrigger]=useState(false)




  return (
   <positionContext.Provider value={{lat,setLat,lon,setLon,trigger,setTrigger}}>
{children}
   </positionContext.Provider>  
  )
  }