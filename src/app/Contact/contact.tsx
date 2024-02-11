import React from 'react'
import Image from "next/image";
import ContactCover from "../../../public/contactCover.jpg"
import Logo from "../../../public/sparkBio.png"

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
                            <p>+91 12345 12345</p>
                        </div>
                        <div className='pt-4'>
                            <div className='font-bold text-xl'>Address</div>
                            <p>No.30, Karuppaiya Street, Korukkai Mayiladuthurai Tk - 609 203 </p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="w-[30%] h-full flex flex-col justify-start md:hidden xs:hidden ">
                    <div className='pt-4 font-bold text-2xl text-center'><Image src={Logo} className="w-[7%] h-[80%] inline-block" alt="Picture of the author" /><span className='pl-3'>SparkBio</span></div>
                    <div className='pt-4 text-center text-xl'>Simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum simply dummy text of the printing </div>
                </div>
                <div className="w-[30%] h-full flex items-center justify-center md:w-[60%] md:pt-8 md:pb-3 xs:w-[60%] xs:pt-8 xs:pb-3">
                    <div>
                        <h1 className='font-bold text-2xl'>Utility Pages</h1>
                        <p className='pt-4 text-xl'>Home</p>
                        <p className='pt-4 text-xl'>Products</p>
                        <p className='pt-4 text-xl'>About</p>
                        <p className='pt-4 text-xl'>Eco-Friendly Product</p>
                    </div>
                </div>
            </div>

            <div className='hidden md:block xs:block borders pb-4' >
                <div className='pt-4 font-bold text-2xl text-center'><Image src={Logo} className="w-[7%] h-[80%] inline-block" alt="Picture of the author" /><span className='pl-3'>SparkBio</span> </div>
                <div className='pt-4 text-center text-sm w-[80%] mx-auto'>Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum simply dummy text of the printing </div>
            </div>

        </div>
    )
}

export default Contact;
