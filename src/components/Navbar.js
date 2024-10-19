import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full flex items-center justify-between p-4 px-12'>
            <div className='w-60 h-20 bg-blue-300 '>
                deet logo
            </div>
            <div className='flex items-center '>
                <Link to='/' className='mx-4 hover:border-b-[2px] text-2xl font-semibold duration-200'>Home</Link>
                <Link to='/dealroom' className='mx-4 hover:border-b-[2px] text-2xl font-semibold duration-200'>Dealroom</Link>
                <Link to='/' className='mx-4 hover:border-b-[2px] text-2xl font-semibold duration-200'>Speakers</Link>
                <Link to='/' className='mx-4 hover:border-b-[2px] text-2xl font-semibold duration-200'>Schedule</Link>
            </div>
            <div className='w-60 h-20 flex justify-center items-center'>
                <button className='hover:bg-blue-500 rounded-lg p-3 px-4 font-semibold hover:text-white shadow-xl bg-gray-200 text-blue-500 duration-200 text-xl'>Sponsor Today</button>
            </div>
        </div>
    )
}

export default Navbar
