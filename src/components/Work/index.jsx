import React from 'react'
import Wrapper from '../Wrapper'
import img1 from "../../assets/images/Mask Group (6).png"
import img2 from "../../assets/images/Mask Group (7).png"
import img3 from "../../assets/images/Mask Group (8).png"
import "./style.css"
const Work = () => {
  return (
    <div className='pt-[60px] pb-[174px]'>
        <Wrapper>
            <div>
                <h1 className='text-center text-[32px] font-bold mb-[20px]'>Browse The Range</h1>
                <p className='text-center text-[20px] font-light mb-[54px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex justify-between gap-x-[20px]'>
                    <div className='flex-1'>
                        <div className='mb-[75px] relative'>
                            <img src={img1} alt="" className='w-full'/>
                            <div className=' absolute bottom-[-45px] right-[50%] translate-x-[50%] w-[90px] h-[90px] flex justify-center items-center bg-[#FFFFFF] rounded-full mx-auto'> 
                                <div className=' w-[60px] h-[60px] flex justify-center items-center bg-[#111111] rounded-full mx-auto'>
                                    <span className='text-[24px] font-bold text-white'>1.</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-[24px] font-bold mb-[10px]'>Purchase Securely</h1>
                            <p className='text-[18px] font-light text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='mb-[75px] relative'>
                            <img src={img2} alt="" className='w-full'/>
                            <div className=' absolute bottom-[-45px] right-[50%] translate-x-[50%] w-[90px] h-[90px] flex justify-center items-center bg-[#FFFFFF] rounded-full mx-auto'> 
                                <div className=' w-[60px] h-[60px] flex justify-center items-center bg-[#111111] rounded-full mx-auto'>
                                    <span className='text-[24px] font-bold text-white'>2.</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-[24px] font-bold mb-[10px]'>Ships From Warehouse</h1>
                            <p className='text-[18px] font-light text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='mb-[75px] relative'>
                            <img src={img3} alt="" className='w-full'/>
                            <div className=' absolute bottom-[-45px] right-[50%] translate-x-[50%] w-[90px] h-[90px] flex justify-center items-center bg-[#FFFFFF] rounded-full mx-auto'> 
                                <div className=' w-[60px] h-[60px] flex justify-center items-center bg-[#111111] rounded-full mx-auto'>
                                    <span className='text-[24px] font-bold text-white'>3.</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-[24px] font-bold mb-[10px]'>Style Your Room</h1>
                            <p className='text-[18px] font-light text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Work