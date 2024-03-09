import React from 'react'
import Wrapper from '../Wrapper'
import img from "../../assets/images/IG-1.jpg"
import img1 from "../../assets/images/IG-2.jpg"
import img2 from "../../assets/images/IG-3.jpg"
import img3 from "../../assets/images/IG-4.jpg"
const Footer = () => {
  return (
    <div className='bg-[#03344F] py-[49px]'>
        <Wrapper>
            <div className='text-white flex justify-between gap-x-[34px]'>
                <div>
                    <h1 className='text-[24px] font-bold mb-[26px]'>Beauty Care</h1>
                    <p className='max-w-[400px] font-extralight leading-loose mb-[21px]'>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <span className='text-[24px] font-bold'>Follow Us</span>
                </div>
                <div className='flex-1 '>
                    <h1 className='text-[24px] font-bold mb-[26px]'>Instagram Shop</h1>
                    <div className='flex gap-x-[21px]'>
                        <div className='flex-1'>
                            <img src={img} alt="" className='w-full'/>
                        </div>
                        <div className='flex-1'>
                            <img src={img1} alt="" className='w-full'/>
                        </div>
                        <div className='flex-1'>
                            <img src={img2} alt="" className='w-full'/>
                        </div>
                        <div className='flex-1'>
                            <img src={img3} alt="" className='w-full'/>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Footer