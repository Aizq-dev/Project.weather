import React, { useState, useEffect } from 'react';
import './PopupMessage.css'
const PopupMessage = ({ message, visible}) => {
  
  return (
    <div className={`popup-message ${visible ? 'visible' : 'hidden'}`}>
      <p>{message}</p>
    </div>
  );
};

export default PopupMessage;