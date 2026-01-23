"use client";
import Image from 'next/image'
import React, { useState } from 'react'

const Menu = () => {
       const [open, setOpen] = useState(false);

       const handleDelete = () => setOpen(true);



       const confirmDelete = () => {
              setOpen(false);
              // alert("Item deleted (demo)");
       };


       return (
              <div className='px-7 max-sm:px-3.5 py-5 '>
                     {open && (
                            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                                   <div className="bg-white w-[90%] max-w-sm rounded-2xl p-5 shadow-xl">
                                          <h2 className="text-lg font-bold">Delete Item</h2>
                                          <p className="text-gray-600 mt-2">
                                                 Are you sure you want to delete this item?
                                          </p>

                                          <div className="flex gap-3 mt-5">
                                                 <button
                                                        onClick={() => setOpen(false)}
                                                        className="w-1/2 border rounded-lg py-2 hover:bg-gray-100"
                                                 >
                                                        Cancel
                                                 </button>

                                                 <button
                                                        onClick={confirmDelete}
                                                        className="w-1/2 bg-[#FF6B00] text-white rounded-lg py-2 hover:opacity-90"
                                                 >
                                                        Yes, Delete
                                                 </button>
                                          </div>
                                   </div>
                            </div>
                     )}

                     <div>
                            <div className='flex font-semibold text-lg max-sm:text-md  justify-between items-center'>
                                   <div className=''>Menu Items</div>
                                   <button className='bg-[#FF6B00] text-white p-1.5 rounded-lg font-medium '>
                                          + Add Items
                                   </button>
                            </div>
                            <div className='py-3 flex flex-col gap-2.5'>
                                   <div className='border rounded-xl bg-white shadow-lg'>
                                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-5 py-4 border rounded-xl bg-white shadow-lg">
                                                 {/* Left Side */}
                                                 <div className="flex items-start sm:items-center gap-3 w-full sm:w-2/3">
                                                        <div className="shrink-0">
                                                               <Image src="/favicon.ico" alt="logo" width={80} height={80} className="rounded-lg" />
                                                        </div>

                                                        <div className="leading-5">
                                                               <h1 className="font-bold text-lg sm:text-2xl">
                                                                      Panjabi thali
                                                               </h1>

                                                               <p className="text-gray-700 text-sm sm:text-base">
                                                                      6 roti,paneer sabji,vegitable sabji,1 papad,rice,buter milk
                                                               </p>

                                                               <div className="flex flex-wrap items-center gap-2 mt-2">
                                                                      <span className="text-xs sm:text-sm px-2 py-1 bg-gray-100 rounded-md text-gray-700">
                                                                             Main course
                                                                      </span>

                                                                      <span className="text-sm sm:text-base font-semi  bold text-green-700 bg-green-100 px-3 py-1 rounded-lg">
                                                                             ₹ 200
                                                                      </span>
                                                               </div>
                                                        </div>
                                                 </div>

                                                 {/* Right Side */}
                                                 <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-1/3">
                                                        {/* Available */}
                                                        <label className="flex items-center gap-2">
                                                               <input type="checkbox" className="w-4 h-4" />
                                                               <span className="text-sm sm:text-base">Available</span>
                                                        </label>

                                                        {/* Buttons */}
                                                        <div className="flex items-center gap-3">
                                                               {/* Edit */}
                                                               <button className="p-2 rounded-lg border border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition">
                                                                      <i className="fa fa-pencil-square" aria-hidden="true"></i>
                                                               </button>

                                                               {/* Delete */}
                                                               <button onClick={() => handleDelete()}
                                                                      className="p-2 rounded-lg border border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition">
                                                                      <i className="fa fa-trash" aria-hidden="true"></i>
                                                               </button>
                                                        </div>

                                                 </div>
                                          </div>
                                   </div>

                            </div>
                     </div>
              </div>
       )
}

export default Menu
