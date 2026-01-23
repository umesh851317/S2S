import React from 'react'

const Nav = () => {
  return (
    <div className='flex h-full shadow-md px-7 max-sm:px-3
    justify-between items-center'>
      <div className='flex justify-between items-center gap-3 max-sm:gap-1.5 '>
        <div>
          <div className='flex items-center border rounded-xl bg-[#FF6B00] justify-center text-2xl text-white h-11 w-10
          max-sm:h-10 max-sm:w-9 '>
            <i className="fa fa-cog text-md "
              aria-hidden="true"></i>
          </div>
        </div>
        <div className='flex flex-col justify-center '>
          <h1 className='font-bold text-3xl max-[450px]:text-2xl  max-[350px]:text-xl max-[450px]:flex-wrap max-sm:leading-6  '>Admin Dashboard</h1>
          <p className='text-sm text-gray-400 max-sm:leading-3'>Manage your restaurant</p>
        </div>
      </div>
      <div>
        <button className='border rounded-lg hover:bg-gray-100 p-2 max-sm:p-1 flex items-center gap-2 max-sm:gap-1'>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Nav
