"use client";
import Image from 'next/image'
import React, { useState } from 'react'

const Table = () => {
       const [openQr, setOpenQr] = useState(false)
       const qrOpener = () => {
              setOpenQr(true)
       }
       const [tables, setTables] = useState([1, 2, 3, 4, 5, 6]);
       return (
              <div className='px-7 max-sm:px-3.5 py-5 '>
                     {
                            openQr && (
                                   <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
                                          <div
                                                 className="bg-white w-full max-w-md rounded-2xl p-5 sm:p-7 shadow-xl flex flex-col justify-center items-center gap-3"
                                          >
                                                 <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
                                                        Table 1 QR Code
                                                 </h1>

                                                 <Image
                                                        src="/qr.png"
                                                        alt="QR Code"
                                                        width={160}
                                                        height={160}
                                                        className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44"
                                                 />

                                                 <p className="text-xs sm:text-sm text-gray-600 text-center">
                                                        Scan this QR code to access the menu for Table 1
                                                 </p>

                                                 <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4">
                                                        <button
                                                               onClick={() => setOpenQr(false)}
                                                               className="w-full sm:w-1/2 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition"
                                                        >
                                                               Close
                                                        </button>

                                                        <button className="w-full sm:w-1/2 py-2 rounded-md bg-[#FF6B00] text-white hover:opacity-90 transition">
                                                               Download
                                                        </button>
                                                 </div>
                                          </div>
                                   </div>

                            )
                     }
                     <div>
                            <div className='flex font-semibold text-lg max-sm:text-md  justify-between items-center'>
                                   <div className=''>Tables & QR Codes</div>
                                   <button className='bg-[#FF6B00] text-white p-1.5 rounded-lg font-medium '>
                                          + Add Table
                                   </button>
                            </div>
                            <div className='py-3 flex flex-col gap-2.5'>
                                   <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5'>
                                          {
                                                 tables.map((tNo, idx) => (
                                                        <div key={idx}
                                                               className='shadow-xl rounded-lg flex-1/4 p-7 bg-white
                                          flex flex-col justify-center items-center gap-1'>
                                                               <h1 className='text-2xl font-medium'>Table {tNo}</h1>
                                                               <span className='font-medium text-green-400'>Active</span>
                                                               <button onClick={() => qrOpener()}
                                                                      className='bg-gray-100 w-full p-2 rounded-lg flex gap-2 justify-center items-center text-lg'>
                                                                      <i className="fa fa-qrcode" aria-hidden="true"></i>
                                                                      <span>view Qr Code</span>
                                                               </button>
                                                        </div>
                                                 ))
                                          }

                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default Table
