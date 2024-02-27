import React from 'react'
import Input from '../input/input'
import './Header.css'
import {ButtonPos} from '../buttonPosition/buttonPos'

const Header = () => {
  return (
    <div className='header'>
      <Input/>
     <ButtonPos/>
    </div>
  )
}

export default Header