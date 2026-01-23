import React from 'react'

const page = () => {
  return (
    <div className='h-full w-full flex justify-center items-center bg-[#f4d6c1]'>
      <div className='bg-amber-50 h-160 w-115 px-8 m-4
                      flex flex-col gap-4
                      border-2 rounded-2xl border-white'>
        <div className='text-center pt-15 flex flex-col gap-5 w-full items-center'>
          <div className=' flex justify-center items-center'>
            <i className="fa fa-cutlery  
          text-[white] text-4xl border-2 w-18 h-18 rounded-full border-[#FF6B00] bg-[#FF6B00] p-3" aria-hidden="true"></i>
          </div>
          <div className='flex flex-col gap-1'>
            <h1 className='font-medium text-4xl max-[400px]:text-[32px]'>Scan to serve</h1>
            <span className='text-sm text-gray-500'>Sign in to continue</span>
          </div>
        </div>
        <form action="" className='flex flex-col gap-2'>
          <span className='text-sm'>Email</span>
          <input className='h-10 px-3 
          border border-gray-400 rounded-lg
          focus:border-[#FF6B00] focus:outline-none focus:border-2 '
            type="email" name="" id="" />
          <span className='text-sm'>Password</span>
          <input className='h-10 px-3 
          border border-gray-400 rounded-lg
          focus:border-[#FF6B00] focus:outline-none focus:border-2 '
            type="password" name="" id="" />
          <button className='w-full mt-2 bg-[#FF6B00] h-10 rounded-lg '>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default page
