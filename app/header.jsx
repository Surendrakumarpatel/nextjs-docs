import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <div className='flex space-x-10 items-center bg-blue-500 py-4 px-5 text-white'>
            <h1 className='text-white text-lg'>Root Layout</h1>
            <Link 
            href={"/blog"}
            className='bg-white px-4 py-1 rounded-lg text-black'
            >Blog</Link>
        </div>
    )
}

export default Header