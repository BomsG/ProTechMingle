import React from 'react'
import CheckImg from '../assets/Frame 20.png'

const ResetSuccessful = () => {
  return (
    <div className='font-inter flex flex-col items-center justify-center h-screen w-11/12 mx-auto text-center'>
      <div>
        <img src={CheckImg} alt='check img' className='mb-10' />
      </div>
      <div>
        <h2 className='text-4xl font-medium mb-2'>Password reset successful</h2>
        <p className='font-normal text-xl mb-8'>You can login into your with your new password.</p>
        <a href='/login' className='block bg-signupButton text-white text-lg font-semibold py-4 px-6 rounded-md'>Continue to login</a>
      </div>
    </div>
  )
}

export default ResetSuccessful