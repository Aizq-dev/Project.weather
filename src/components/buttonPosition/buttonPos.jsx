import './buttonPos.css'
import { myPosition } from '../../utils/MyPosition'
import { useContext } from 'react'
import { positionContext } from '../../context/positionContext'

export const ButtonPos = () => {

const{setLat,setLon,setTrigger,setPermiss}=useContext(positionContext)
  const handleButton =()=>{
myPosition(setLat, setLon,setTrigger,setPermiss)
 }
  
  return (
    <div className='button-icon'>
    <button  onClick={handleButton}><img className='icon' src='ubicacion.png'/></button>
</div>
  )
}

