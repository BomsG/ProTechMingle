import React from 'react'
import eye from '../assets/Right Content.png'
import PadLock from '../assets/Frame 35.png';
import leftArrow from '../assets/button-icon1.png'

const SetNewPassword = () => {
  return (
    <div className='h-auto max-w-md font-inter flex flex-col items-center justify-center mx-auto py-9'>
        <img src={PadLock} alt='lock img' className='w-24 mb-12'/>
        <h2 className='text-3xl font-medium text-center mb-3'>Set new password</h2>
        <p className='text-center text-xl font-normal mb-8'>Fill in the details with your preferred new password</p>
        <form action="" className='w-11/12 lg:w-full'>
          <label className='mt-6'><p className='text-lg font-medium mb-1'>New Password*</p>
                <div className='border border-inputBorder border-solid p-4 rounded-md mb-2 flex items-center'>
                    <input type='password' placeholder='Enter your new password' className='w-full placeholder:text-placeholder placeholder:font-normal placeholder:text-base border-none outline-none' />
                    <img src={eye} alt='eye-icon' />
                </div>
                <p className='font-normal text-passwordText text-base mb-8'>Minimum of 8 characters</p>
          </label>
          <label className='mt-6'><p className='text-lg font-medium mb-1'>Confirm New Password*</p>
                <div className='border border-inputBorder border-solid p-4 rounded-md mb-2 flex items-center'>
                    <input type='password' placeholder='Enter your new password' className='w-full placeholder:text-placeholder placeholder:font-normal placeholder:text-base border-none outline-none' />
                    <img src={eye} alt='eye-icon' />
                </div>
                <p className='font-normal text-passwordText text-base mb-8'>Minimum of 8 characters</p>
          </label>
          <input type='submit' value='Get Started' className='text-center w-full bg-signupButton text-white rounded-md py-3 px-6 cursor-pointer mb-6' /> 
        </form>
        <a href='/login' className='text-signupButton'><img src={leftArrow} alt='left-arrow' className='inline mr-0.5'/>Back to Login</a>
    </div>
  )
}

export default SetNewPassword