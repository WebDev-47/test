import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navibar() {
    const [ isopen, setIsopen] = useState(false)
  return (
    <>
    <div className=' flex justify-between items-center bg-gray-500 min-w-fit'>

        <div className=' flex gap-[30em] items-center'>
            <div className='flex justify-center items-center'>
                <div className='bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg '></div>
                <p className=' text-gray-50'>Logo</p>
            </div>

            <div className=' md:hidden text-3xl'>
    <button onClick={()=> setIsopen(!isopen)}>
     {
                isopen ? <FaTimes/> : <FaBars/>
     }
            </button>
    </div>

        </div>

       {/* Nav menu  */}
        <div className=' hidden md:flex space-x-4 text-sm font-bold items-center '>
            <nav className=' flex mr-56 gap-10 '>
            <li className='bg-yellow-600 hover:text-white p-2 m-2 rounded-3xl text list-none border-l-4 cursor-pointer'>Home</li>
            <li className='bg-yellow-600 hover:text-white p-2 m-2 rounded-3xl text list-none border-l-4 cursor-pointer'>About</li>
            <li className='bg-yellow-600 hover:text-white p-2 m-2 rounded-3xl text list-none border-l-4 cursor-pointer'>Contact</li>
            <li className='bg-yellow-600 hover:text-white p-2 m-2 rounded-3xl text list-none border-l-4 cursor-pointer'>Blog</li>
            </nav>
            
            {/* button tag  */}
            <div className=' relative'>
                <button className='bg-red-600 rounded-2xl p-2 m-2 hover:bg-blue-500 hover:text-white border-l-4 mr-5 cursor-pointer'>Login</button>
                <button className='bg-red-600 rounded-2xl p-2 m-2 hover:bg-blue-500 hover:text-white border-l-4 mr-5 cursor-pointer'>Sign Up</button>
            </div>
        </div>

    </div>
    <div>
            {
                isopen &&(
                    <div className=' md:hidden space-x-4  '>
                    <nav className=' md:flex text-center justify-center items-center'>
                    <li className='bg-yellow-600 w-[8em] font-bold hover:text-white p-2 m-2 rounded-3xl text list-none border-l-4 cursor-pointer '>Home</li>
                    <li className='bg-yellow-600 w-[8em] font-bold hover:text-white p-2 m-2 rounded-3xl text list-none border-l-4 cursor-pointer '>About</li>
                    <li className='bg-yellow-600 w-[8em] font-bold hover:text-white p-2 m-2 rounded-3xl text list-none border-l-4 cursor-pointer '>Contact</li>
                    <li className='bg-yellow-600 w-[8em] font-bold hover:text-white p-2 m-2 rounded-3xl text list-none border-l-4 cursor-pointer '>Blog</li>
                    </nav>
                    
                    {/* button tag  */}
                    <div className='flex md:justify-between'>
                        <button className='bg-red-600 rounded-2xl p-2 m-2 hover:bg-blue-500 hover:text-white border-l-4 mr-5 cursor-pointer'>Login</button>
                        <button className='bg-red-600 rounded-2xl p-2 m-2 hover:bg-blue-500 hover:text-white border-l-4 mr-5 cursor-pointer'>Sign Up</button>
                    </div>
                </div>
        
                )
            }
         </div>


</>
  )
}

export default Navibar