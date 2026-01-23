"use client";
import React, { useState } from 'react'
import Table from '@/components/admin/tables/table'
import Nav from '@/components/navbar/nav'
import Menu from '@/components/admin/menu/menu';

const page = () => {
       const [currCompo, setCurrCompo] = useState(<Menu />)

       
       return (
              <main className='h-full bg-[#f6f5f4e1]'>
                     <nav className='fixed w-full h-21 z-50 bg-gray-50' >
                            <Nav />
                     </nav>
                     <div className='fixed w-full bg-gray-50 pt-21 z-40 border-b border-gray-400'>
                            <div className='h-15 px-7 max-sm:px-3.5 text-xl max-sm:text-lg max-sm:
                            flex items-center justify-around '>
                                   <button onClick={()=>{setCurrCompo(<Menu/>)}}>Menu</button>
                                   <button onClick={()=>{setCurrCompo(<Table/>)}}>Table</button>
                                   <button>Inventory</button>
                            </div>
                     </div>
                     <div className='pt-36 h-full '>
                            {currCompo}
                     </div>
              </main>
       )
}

export default page
