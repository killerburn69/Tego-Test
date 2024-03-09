import React from 'react'
import './style.css'
import Button from '../Button'
const Hero = () => {
  return (
    <div className='bg_img'>
        <div className='absolute top-[115px] right-[90px] px-[39px] pt-[37px] py-[41px] bg-[#DFE9F4] w-fit rounded-xl drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
            <div className='flex flex-col gap-y-[20px] mb-[30px]'>
              <h4 className='drop-shadow-[0px_3px_2px_#333333] text-[#333333] text-[16px] font-semibold tracking-widest'>New Arrival</h4>
              <h1 className='text-[#054C73] text-[52px] text-bold max-w-[450px] leading-[1.2] font-bold'>Discover Our New Collection</h1>
              <p className='text-[18px] text-[#333333] max-w-[500px] leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <Button className='drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] stroke-none'>buy now</Button>
        </div>
    </div>
  )
}

export default Hero