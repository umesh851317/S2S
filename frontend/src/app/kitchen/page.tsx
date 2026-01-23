"use client"
import Order from '@/components/kitchen/order'
import Nav from '@/components/navbar/nav'

const page = () => {
       return (
              <main className='h-full bg-[#f6f5f4e1]'>
                     <nav className='fixed w-full h-21 z-50 bg-gray-50'>
                            <Nav />
                     </nav>
                     <div className=' fixed w-full bg-gray-50 pt-21 z-40 border-b border-gray-400' >
                            <div className="flex h-25 justify-around items-center">
                                   <button className="w-1/20 max-sm:w-1/5 h-18  flex flex-col items-center text-center py-2 rounded-xl bg-[#FF6B00]/10">
                                          <span className="font-bold text-xl sm:text-3xl lg:text-2xl text-[#FF6B00]">1</span>
                                          <span className="text-xs sm:text-sm lg:text-xs text-[#FF6B00]">All</span>
                                   </button>

                                   <button className="w-1/20 max-sm:w-1/5 h-18 flex flex-col items-center text-center py-2 rounded-xl">
                                          <span className="font-bold text-xl sm:text-3xl lg:text-2xl text-red-600">1</span>
                                          <span className="text-xs sm:text-sm lg:text-xs text-gray-600">Pending</span>
                                   </button>

                                   <button className="w-1/20 max-sm:w-1/5 h-18 flex flex-col items-center text-center py-2 rounded-xl">
                                          <span className="font-bold text-xl sm:text-3xl lg:text-2xl text-amber-400">1</span>
                                          <span className="text-xs sm:text-sm lg:text-xs text-gray-600">Preparing</span>
                                   </button>

                                   <button className="w-1/20 max-sm:w-1/5 h-18 flex flex-col items-center text-center py-2 rounded-xl">
                                          <span className="font-bold text-xl sm:text-3xl lg:text-2xl text-green-500">1</span>
                                          <span className="text-xs sm:text-sm lg:text-xs text-gray-600">Ready</span>
                                   </button>
                            </div>
                     </div>
                     <div className='pt-46 h-full' >
                            <Order/>
                     </div>
              </main>
       )
}

export default page
