import React from 'react'
import Image from "next/image";
import Logo from "../../../public/sparkBio.png"
import Link from 'next/link';
const Navbar = () => {
    return (
        <nav className='h-16 w-full bg-white fixed top-0 flex'>
            <div className='flex w-[50%] h-full items-center pl-4 md:w-[30%]'>
                <Image src={Logo} className="w-[7%] h-[80%] xs:w-[30%] md:w-[15%]" alt="Picture of the author" />
                <div className='pl-4 font-extrabold text-3xl'>SparkBio</div>
            </div>
            <div className='w-[50%] flex justify-evenly items-center font-semibold xs:hidden md:w-[70%]'>
                <div className='cursor-pointer'><Link href="#homePage">Home</Link></div>
                <div className='cursor-pointer'><Link href="#about">About</Link></div>
                <div className='cursor-pointer'><Link href="#product">Our Products</Link></div>
                <div className='cursor-pointer'><Link href="#offer">Offers</Link></div>
                <div className='cursor-pointer'><Link href="#ecofriendly">Eco Friendly</Link></div>
                <div className='cursor-pointer'><Link href="#contact">Contact Us</Link></div>
            </div>
        </nav>
    )
}

export default Navbar
