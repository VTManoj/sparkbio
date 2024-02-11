import React from 'react'
import Image from "next/image";
import ContactCover from "../../../public/contactCover.jpg"
import Logo from "../../../public/sparkBio.png"
import Link from 'next/link';

const Contact = () => {
    return (
        <div className='h-[80vh] w-full  md:h-fit xs:h-fit'>
            <div className=' w-[80%] m-auto h-[40%] pt-16 md:h-40 md:pt-6 xs:pt-6 xs:h-28'>
                <Image
                    className='w-full h-full object-cover rounded-full md:h-[100%] xs:h-[100%]'
                    src={ContactCover}
                    alt="Picture of the author"
                />
            </div>
            <div className='flex justify-center h-[60%] items-center  md:flex-col xs:flex-col'>
                <div className=' w-[30%] h-full flex items-center justify-center md:pt-6 xs:pt-6'>
                    <div>
                        <h1 className='font-bold text-2xl'>Contact Us</h1>
                        <div className='pt-4'>
                            <div className='font-bold text-xl'>Email</div>
                            <p>needhelp@sparkbio.com</p>
                        </div>
                        <div className='pt-4'>
                            <div className='font-bold text-xl'>Phone</div>
                            <p>04364 - 250988</p>
                        </div>
                        <div className='pt-4'>
                            <div className='font-bold text-xl'>Address</div>
                            <p>No.30, Karuppaiya Street, Korukkai Mayiladuthurai Tk - 609 203 </p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="w-[30%] h-full flex flex-col justify-center md:hidden xs:hidden ">
                    <div className='pt-4 font-bold text-2xl text-center'><Image src={Logo} className="w-[7%] h-[80%] inline-block" alt="Picture of the author" /><span className='pl-3'>SparkBio</span></div>
                    <div className='pt-4 text-center text-xl'>Spark Bio Pvt. Ltd. is a leading organic agriculture company specializing in sustainable farming practices and innovative bio-products. </div>
                </div>
                <div className="w-[30%] h-full flex items-center justify-center md:w-[60%] md:pt-8 md:pb-3 xs:w-[60%] xs:pt-8 xs:pb-3">
                    <div className='md:w-[50%]'>
                        <h1 className='font-bold text-2xl'>Utility Pages</h1>
                        <p className='pt-4 text-xl'><Link href="#homePage">Home</Link></p>
                        <p className='pt-4 text-xl'><Link href="#about">About</Link></p>
                        <p className='pt-4 text-xl'><Link href="#product">Our Products</Link></p>
                        <p className='pt-4 text-xl'><Link href="#offer">Offers</Link></p>
                        <p className='pt-4 text-xl'><Link href="#ecofriendly">Eco Friendly</Link></p>
                        <p className='pt-4 text-xl'><Link href="#contact">Contact Us</Link></p>
                    </div>
                </div>
            </div>

            <div className='hidden md:block xs:block borders pb-4' >
                <div className='pt-4 font-bold text-2xl text-center'><Image src={Logo} className="w-[7%] h-[80%] inline-block" alt="Picture of the author" /><span className='pl-3'>SparkBio</span> </div>
                <div className='pt-4 text-center text-sm w-[80%] mx-auto'>Spark Bio Pvt. Ltd. is a leading organic agriculture company specializing in sustainable farming practices and innovative bio-products.</div>
            </div>

        </div>
    )
}

export default Contact;
