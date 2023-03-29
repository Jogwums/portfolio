import React from 'react'

const Hero = (props) => {
  return (
    <>
        <div className='hero'>
              {props.children}
            <div className='heromsg'>
            </div>
        </div>
        
    </>
  )
}

export default Hero