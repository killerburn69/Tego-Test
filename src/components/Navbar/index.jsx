import React from 'react'
import logo from "../../assets/images/SkinClinic.png"
import Wrapper from '../Wrapper'
const Navbar = () => {
  return (
    <Wrapper>
        <div className='flex items-center pt-[43px] pb-[38px]'>
            <h1 className='flex-1 text-[#054C73] font-bold text-[34px]'>Furniture</h1>
            <ul className='flex flex-1 justify-between text-[#333333] text-[14px] font-semibold'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Doctors</a>
                </li>
                <li>
                    <a href="/">Products</a>
                </li>
                <li>
                    <a href="/">Gallary</a>
                </li>
            </ul>
        </div>
    </Wrapper>
  )
}

export default Navbar