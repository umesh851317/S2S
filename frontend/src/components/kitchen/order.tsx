"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Order = () => {
       const [allOrder, setOrderd] = useState([
              {
                     table: 5,
                     status: "PENDING",
                     items: [
                            {
                                   itemsName: "Panjabi Thali",
                                   qty: 1
                            }
                            , {
                                   itemsName: "Extra Roti",
                                   qty: 3
                            }
                            , {
                                   itemsName: "Extra Roti",
                                   qty: 3
                            }
                            , {
                                   itemsName: "Extra Roti",
                                   qty: 3
                            }
                            , {
                                   itemsName: "Extra Roti",
                                   qty: 3
                            }
                     ]
              },
              {
                     table: 6,
                     status: "PREPARING",
                     items: [
                            {
                                   itemsName: "Rajsthani Thali",
                                   qty: 21
                            }, {
                                   itemsName: "Rajsthani Thali",
                                   qty: 2
                            }, {
                                   itemsName: "Rajsthani Thali",
                                   qty: 2
                            }, {
                                   itemsName: "Rajsthani Thali",
                                   qty: 2
                            }, {
                                   itemsName: "Rajsthani Thali",
                                   qty: 2
                            }, {
                                   itemsName: "Rajsthani Thali",
                                   qty: 2
                            }
                     ]
              },
              {
                     table: 6,
                     status: "READY",
                     items: [
                            {
                                   itemsName: "Rajsthani Thali",
                                   qty: 2
                            }, {
                                   itemsName: "Rajsthani Thali",
                                   qty: 2
                            }
                     ]
              },
              {
                     table: 6,
                     status: "READY",
                     items: [
                            {
                                   itemsName: "Rajsthani Thali",
                                   qty: 2
                            }, {
                                   itemsName: "Rajsthani Thali",
                                   qty: 2
                            }
                     ]
              },
              {
                     table: 6,
                     status: "READY",
                     items: [
                            {
                                   itemsName: "Rajsthani Thali",
                                   qty: 2
                            }, {
                                   itemsName: "Rajsthani Thali",
                                   qty: 2
                            }
                     ]
              }
       ])
       return (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-3">
                     {allOrder?.map((OrderNo, idx) => (
                            <div key={idx} className="border rounded-lg overflow-hidden bg-white">
                                   {/* Header */}
                                   <div
                                          className={`flex justify-between items-center p-3 ${OrderNo.status === "PENDING"
                                                 ? "bg-red-100"
                                                 : OrderNo.status === "PREPARING"
                                                        ? "bg-amber-100"
                                                        : OrderNo.status === "READY"
                                                               ? "bg-green-100"
                                                               : "bg-blue-100"
                                                 }`}
                                   >
                                          <div>
                                                 <h1 className="text-2xl">Table {OrderNo.table}</h1>
                                                 <div className="flex items-center gap-1">
                                                        <Image src="/clock.png" alt="clock" width={15} height={15} />
                                                        <span className="text-sm">5 min ago</span>
                                                 </div>
                                          </div>

                                          <div className="text-2xl">{OrderNo.status}</div>
                                   </div>

                                   <hr />

                                   {/* Body */}
                                   <div className="p-3 flex flex-col">
                                          {OrderNo.items.map((i, index) => (
                                                 <div key={index}>
                                                        <div className="flex justify-between items-center py-1">
                                                               <span className="text-lg">{i.itemsName}</span>
                                                               <span className="px-1.5 py-1 rounded-md bg-gray-200">
                                                                      x{i.qty}
                                                               </span>
                                                        </div>
                                                        <hr className="text-gray-200" />
                                                 </div>
                                          ))}

                                          <div className="w-full pt-2">
                                                 <button
                                                        className={`border w-full p-2 rounded-lg font-semibold 
                                                               ${OrderNo.status === "PENDING" ? "bg-yellow-400"
                                                               : OrderNo.status === "PREPARING"? "bg-green-600"
                                                               : OrderNo.status === "READY"? "bg-blue-600": "bg-red-600"
                                                               } text-white`}
                                                 >
                                                        {
                                                               OrderNo.status === "PENDING" ? "Start Preaparing"
                                                               : OrderNo.status === "PREPARING" ? "Mark Ready" :"Mark Delivered"
                                                        }
                                                 </button>
                                          </div>
                                   </div>
                            </div>
                     ))}
              </div>

       )
}

export default Order
