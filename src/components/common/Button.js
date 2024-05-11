import React from 'react'
const Button = ({onclick,text,css,wi}) => {
  
  debugger
  return (
    <div className={`${wi?'w-[width]':'w-fit'} transition-200 duration-200 px-3 py-1 rounded-md ${css}  `}>
        <div onClick={onclick}>{text}</div>
    </div>
  )
}

export default Button