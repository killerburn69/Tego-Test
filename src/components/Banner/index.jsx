import React from 'react'
import Wrapper from '../Wrapper'
import truck from "../../assets/images/truck.svg"
import daily from "../../assets/images/24.svg"
import protect from "../../assets/images/shield.svg"
const Banner = () => {
  return (
    <div className='bg-[#F2F5FF] py-[46px]'>
        <Wrapper>
            <div className='flex justify-between'>
                <div className='flex gap-x-[27px] justify-center items-center'>
                    <img src={truck} alt="truck" />
                    <div>
                        <h1 className='text-[24px] font-semibold'>Free Delivery</h1>
                        <span className='font-light'>Lorem ipsum dolor sit amet.</span>
                    </div>
                </div>
                <div className='flex gap-x-[27px] justify-center items-center'>
                    <img src={daily} alt="truck" />
                    <div>
                        <h1 className='text-[24px] font-semibold'>Support 24/7</h1>
                        <span className='font-light'>Lorem ipsum dolor sit amet.</span>
                    </div>
                </div>
                <div className='flex gap-x-[27px] justify-center items-center'>
                    <img src={protect} alt="truck" />
                    <div>
                        <h1 className='text-[24px] font-semibold'>100% Authentic</h1>
                        <span className='font-light'>Lorem ipsum dolor sit amet.</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Banner