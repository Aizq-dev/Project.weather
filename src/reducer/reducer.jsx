import React from 'react'

const reducer = (state, action) => {
    switch (action.type){
        case 'inputQuery':
            return {...state, query: action.payload}
    
        case 'search':
            return {...state , loading:true, permiss: true}
        case 'cleanInput':
            return {...state, query: '', cities:''}
            
        case 'res-data':
            return {...state, cities: action.payload, loading:false}

          case  'updateLanAndLot':
            return {...state,
                 lat: action.payload.lat,
                 lon: action.payload.lon,
                 trigger: !state.trigger,
                permiss : true,
                loading: false
            }
        case 'permiss denied':
                return {...state,
                permiss:false}
     
        case 'invisible':
            return {...state, visible: false}
        case 'visible':
            return {...state, visible: true}
        case 'fetch-error':
            return {...state, loading: false, cities: ''}
                default: return state
                 

}}
export default reducer