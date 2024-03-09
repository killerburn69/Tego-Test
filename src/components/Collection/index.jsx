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
            <div className='flex justify-between'>
                <img src={img1} alt="" className='translate-y-[38px]'/>
                <img src={img2} alt="" />
                <img src={img3} alt="" className='translate-y-[38px]'/>
            </div>
        </Wrapper>
    </div>
  )
}

export default Collection