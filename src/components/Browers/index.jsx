import React from 'react'
import Wrapper from '../Wrapper'
import img1 from "../../assets/images/Mask Group (4).png"
import img2 from "../../assets/images/Image-living room.png"
import img3 from "../../assets/images/Mask Group (5).png"
const Browser = () => {
  return (
    <div className='py-[60px]'>
        <Wrapper>
            <div >
                <h1 className='text-center text-[32px] font-bold mb-[20px]'>Browse The Range</h1>
                <p className='text-center text-[20px] font-light mb-[54px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex justify-between gap-x-[20px]'>
                    <div className='flex-1'>
                        <img src={img1} alt="" className='w-full'/>
                        <p className='text-center text-[24px] font-semibold mt-[30px]'>Dining</p>
                    </div>
                    <div className='flex-1'>
                        <img src={img2} alt="" className='w-full'/>
                        <p className='text-center text-[24px] font-semibold mt-[30px]'>Living</p>
                    </div>
                    <div className='flex-1'>
                        <img src={img3} alt="" className='w-full'/>
                        <p className='text-center text-[24px] font-semibold mt-[30px]'>Bedroom</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Browser