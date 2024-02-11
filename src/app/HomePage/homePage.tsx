import React from 'react'
import Image from 'next/image'
import HomeIcon from "../../../public/homePage.png"
import Link from 'next/link'

const HomePage = () => {
    return (
        <div className='w-full h-screen bg-[#F1EFF0] flex items-center justify-center xs:flex-col '>
            <div className='w-[50%] flex flex-col  justify-center xs:w-full xs:h-[50%]'>
                <div className='pl-[25%] xs:pl-0 xs:text-center xs:pt-12'>
                    <div className='font-yellow-tail text-[#68A47F] text-[24px] xs:text-[18px]'>100% Natural </div>
                    <div className='py-2 text-[42px] font-extrabold  xs:text-[28px]'>
                        Choose the best <br />
                        healthier way<br />
                        of life
                    </div>
                    <div>
                    <Link href="#about">
                        <button className='bg-[#EFD372] p-4 rounded-lg w-max xs:p-2'>
                            <span className='inline-block pr-2 font-bold'>Explore Now</span>
                            <span className='inline-block'>
                                <svg className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                            </span>
                        </button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='w-[50%]  xs:w-full xs:h-[50%]'>
                <Image
                    src={HomeIcon}
                    className="xs:w-[80%] xs:m-auto"
                    alt="Picture of the author"
                />
            </div>
        </div>
    )
}

export default HomePage
