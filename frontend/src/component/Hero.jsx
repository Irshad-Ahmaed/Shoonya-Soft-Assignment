import React from 'react'

const Hero = () => {
  return (
    <div className='hidden md:flex flex-col m-4 p-4 bg-orange-100 rounded-md gap-4'>
        <div>
            <img src='https://images.pexels.com/photos/802417/pexels-photo-802417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            alt='her_img' 
            className='object-cover w-full h-[300px] rounded-md'
            />
        </div>
        <div>
            <h2 className='font-semibold text-xl'>Discover Your Inner Peace</h2>
            <p className='my-2'>Join us for a  series of Wellness  retreats designed to help you find tranquility</p>
        </div>
    </div>
  )
}

export default Hero