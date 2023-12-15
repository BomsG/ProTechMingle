import React from 'react'
import Star  from '../../assets/AI-stars.png';
import illustration from '../../assets/rafiki.png'
import buttonIcon from '../../assets/button-icon.png'
import eye from '../../assets/Right Content.png'
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className='lg:flex lg:items-center font-inter'>
        <div className='hidden lg:block lg:bg-gray lg:h-full lg:w-1/2'>
          <div className='w-9/12 mx-auto mt-20 mb-16'>
            <h2 className='text-4xl font-medium mb-10'>Introducing <span className='text-dash'>-</span></h2>
            <div className='flex items-center mb-6'>
              <img src={Star} alt='star' className='mr-3' />
              <p className='text-lg font-medium text-black'>Connect and interact with fellow tech professionals.</p></div>
            <div className='flex items-center mb-6'>
              <img src={Star} alt='star' className='mr-3' />
              <p className='text-lg font-medium text-black'>Join communities of like-minded professionals.</p></div>
            <div className='flex items-center mb-6'>
              <img src={Star} alt='star' className='mr-3' />
              <p className='text-lg font-medium text-black'>Discover and apply to the most suitable job opportunities for you.</p></div>
            <div className='flex items-center mb-6'>
              <img src={Star} alt='star' className='mr-3' />
              <p className='text-lg font-medium text-black'>Find events that align with your preferences.</p></div>
          </div>
            <div>
              <img src={illustration} alt='illustration' className='max-w-xl mx-auto' />
            </div>
        </div>
        
        <div className='bg-white lg:w-1/2'>
          <div className='max-w-md lg:w-9/12 m-auto py-6 lg:py-0'>
            <h4 className='w-11/12 max-w-sm mx-auto font-semibold text-2xl text-signupButton mb-14 mt-10 lg:hidden'>ProTechMingle</h4>
            <h2 className='text-2xl md:text-4xl font-medium text-center mb-3'>Create an account</h2>
            <h6 className='font-normal text-center text-black text-xl'>Let’s get you started.</h6>
            <form className='mt-6 w-11/12 lg:max-w-md mx-auto lg:w-full'>
              <label><p className='text-lg font-medium mb-1'>Name*</p>
               <input type='text' placeholder='Enter your name' required className='block border border-inputBorder border-solid p-4 rounded-md placeholder:text-placeholder placeholder:font-normal placeholder:text-base w-full mb-6 focus:outline-none' />
              </label>

              <label className='mt-6'><p className='text-lg font-medium mb-1'>Email*</p>
               <input type='email' placeholder='Enter your email' className='block border border-inputBorder border-solid p-4 rounded-md placeholder:text-placeholder placeholder:font-normal placeholder:text-base w-full mb-6 focus:outline-none' />
              </label>

              <label className='mt-6'><p className='text-lg font-medium mb-1'>Password*</p>
               <div className='border border-inputBorder border-solid p-4 rounded-md mb-2 flex items-center'>
                  <input type='password' placeholder='Enter your password' className='w-full placeholder:text-placeholder placeholder:font-normal placeholder:text-base border-none outline-none' />
                  <img src={eye} alt='eye-icon' />
               </div>
               <p className='font-normal text-passwordText text-base mb-9'>Minimum of 8 characters</p>
              </label>

              <input type='submit' value='Get Started' className='text-center w-full bg-signupButton text-white text-xl font-semibold rounded-md py-4 px-6 cursor-pointer mb-6' />  
            </form>
            <button className='max-w-md mx-auto w-11/12 lg:w-full border border-solid border-signupButton rounded-md p-4 mb-6 flex items-center justify-center'><img src={buttonIcon} alt='google icon' className='mr-2 w-9' /><span className='font-semibold text-xl text-signupButton'>Sign up with Google</span></button>
   <Link to="/Login">
            <h6 className='mb-9 lg:mb-0 font-normal text-base lg:text-xl text-center'>Already have an account? <span className='font-medium text-signupButton'><Link to="/"><a href='/login'>Log in</a></Link></span></h6> 
     </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;
