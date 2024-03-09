import React from 'react'
import Wrapper from '../Wrapper'

const Email = () => {
  return (
    <div className='pt-[83px] pb-[37px] mb-[23px] bg-[#F2F5FF]'>
        <Wrapper>
            <div>
                <h1 className='text-center text-[32px] font-bold mb-[20px]'>Join Our Mailing List</h1>
                <p className='text-center text-[20px] font-light mb-[54px] w-[515px] mx-auto'>Sign up to receive inspiration, product updates, and special offers from our team.</p>
                <form>
                    <div className='flex justify-center rounded-[3px] border-[#011C42] border-[1px] w-fit mx-auto overflow-hidden'>
                        <input type="text" name="" id="" placeholder='example@gmail.com' className='w-[486px] border-none placeholder:font-light placeholder:text-[#666666] outline-none p-[25px]'/>
                        <button className='px-[44px] py-[26px] bg-[#054C73] text-[#FFFFFF] font-bold rounded-[3px]'>Submit</button>
                    </div>
                </form>
            </div>
        </Wrapper>
    </div>
  )
}

export default Email