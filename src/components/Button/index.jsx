import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`uppercase text-[16px] text-white px-[72px] py-[25px] bg-[#054C73] rounded-full font-bold ${className}`}>{children}</button>
  )
}

export default Button