import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-screen-xl mx-auto'>
        {children}
    </div>
  )
}

export default Wrapper