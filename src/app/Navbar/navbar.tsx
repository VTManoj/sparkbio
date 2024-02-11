import React from 'react'
import Image from "next/image";
import Logo from "../../../public/sparkBio.png"
const Navbar = () => {
    return (
        <nav className='h-16 w-full bg-white fixed top-0 flex'>
            <div className='flex w-[50%] h-full items-center pl-4'>
                <Image src={Logo} className="w-[7%] h-[80%]" alt="Picture of the author" />
                <div className='pl-4 font-extrabold text-3xl'>SparkBio</div>
            </div>
            <div className='w-[50%] flex justify-evenly items-center font-semibold xs:hidden'>
                <div className='cursor-pointer'>Home</div>
                <div className='cursor-pointer'>About</div>
                <div className='cursor-pointer'>Our Products</div>
                <div className='cursor-pointer'>Eco Friendly</div>
                <div className='cursor-pointer'>Contact Us</div>
            </div>
        </nav>
    )
}

export default Navbar
