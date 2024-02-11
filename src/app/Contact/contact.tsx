import React from 'react'
import Image from "next/image";
import ContactCover from "../../../public/contactCover.jpg"

const Contact = () => {
    return (
        <div className='h-[80vh] w-full md:h-[70vh]'>
            <div className=' w-[80%] m-auto h-[40%] pt-16 md:h-[40%]'>
                <Image
                    className='w-full h-full object-cover rounded-full md:h-[40%]'
                    src={ContactCover}
                    alt="Picture of the author"
                />
            </div>
            <div className='flex justify-center h-[60%] items-center md:h-[40%]'>
                <div className=' w-[30%] h-full flex items-center justify-center'>
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
                <div className="w-[30%] h-full flex flex-col justify-start ">
                    <div className='pt-4 font-bold text-2xl text-center'>Sparkbio</div>
                    <div className='pt-4 text-center text-xl'>Simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum simply dummy text of the printing </div>
                </div>
                <div className="w-[30%] h-full flex items-center justify-center">
                    <div>
                        <h1 className='font-bold text-2xl'>Utility Pages</h1>
                        <p className='pt-4 text-xl'>Home</p>
                        <p className='pt-4 text-xl'>Products</p>
                        <p className='pt-4 text-xl'>About</p>
                        <p className='pt-4 text-xl'>Eco-Friendly Product</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;
