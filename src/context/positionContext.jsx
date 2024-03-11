import React,{createContext, useState,useReducer} from 'react'
import reducer from "../reducer/reducer";
export const positionContext = createContext()
export const PositionProvider =({children})=>{
const [stateContext, sendAction]=useReducer(reducer,{
   permiss: true,
   trigger: false,
   lat : '',
   lon : ''
})


  return (
   <positionContext.Provider value={{stateContext,sendAction}}>
{children}
   </positionContext.Provider>  
  )
  }