import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({onclick,text,css,wi}) => {
    
    const navigate=useNavigate();
    
  return (
    <div className={`${wi?'w-[width]':'w-fit'} transition-200 duration-200 px-3 py-1 rounded-md ${css}  `}>
        <div onClick={onclick}>{text}</div>
    </div>
  )
}

export default Button