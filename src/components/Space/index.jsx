import React from 'react'
import Wrapper from '../Wrapper'
import Button from '../Button'
import img from "../../assets/images/Mask Group (3).png"
const Space = () => {
  return (
    <div className='bg-[#F2F5FF] h-full py-[60px]'>
        <Wrapper>
            <div className='flex justify-between items-center'>
                <div className='flex-1'>
                    <h1 className='font-bold text-[32px] mb-[20px]'>Beautiful Your Space</h1>
                    <p className='font-light text-[20px] max-w-[514px] mb-[30px]'>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <Button className="px-[57px] py-[24px]">learn more</Button>
                </div>
                
                <div className='relative z-20'>
                    <img src={img} alt="" className='translate-x-[-68px] '/>
                    <div className='w-[373px] h-[373px] bg-[#09513B] rounded-full absolute top-[50%] right-0 translate-y-[-50%] z-[-1]'></div>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Space