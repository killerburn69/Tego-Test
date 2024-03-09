import React from 'react'
import Wrapper from '../Wrapper'
import img1 from "../../assets/images/Mask Group (2).png"
import img2 from "../../assets/images/Mask Group (1).png"
import img3 from "../../assets/images/Mask Group.png"
const Collection = () => {
  return (
    <div className='pt-[60px] pb-[98px] bg-[]'>
        <Wrapper>
            <h1 className='text-center mb-[20px] text-[32px] font-bold'>Inspiration Collection</h1>
            <p className='text-center mb-[50px] text-[20px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex justify-between gap-x-[40px]'>
              <div className='flex-1'>

                <img src={img1} alt="" className='translate-y-[38px] w-full'/>
              </div>
              <div className='flex-1'>

                <img src={img2} alt="" className='w-full'/>
              </div>
              <div className='flex-1'>
                <img src={img3} alt="" className='translate-y-[38px] w-full'/>
              </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Collection