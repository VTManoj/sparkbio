import React from 'react'
import Image from 'next/image'
import Organic from "../../../public/organic.png"
import Quality from "../../../public/Quality.png"
const About = () => {
    return (
        <div className='about-container w-full h-screen xs:h-fit xs:p-4'>
            <div className="flex flex-row-reverse  w-[100%] h-full ">
                <div className="about-desc-container flex flex-col justify-center  w-[50%] h-full md:w-[70%] xs:w-full xs:pt-4">
                    <div className='font-yellow-tail text-[#68A47F] text-[28px] py-4  xs:text-[18px] xs:py-2'>About Us</div>
                    <div className='text-[32px] font-extrabold  xs:text-[24px]'>
                        We Believe in Working <br />
                        Accredited Farmers
                    </div>
                    <div className='w-[70%] font-semibold pt-2 xs:w-full xs:text-[16px] xs:font-medium'>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </div>
                    <div className='pt-6'>
                    <div className='pt-4 flex '>
                        <div className='flex flex-row items-center'>
                            <div className='bg-white p-4 w-max h-fit rounded-xl flex items-center justify-center'>
                                <Image
                                    className=' '
                                    src={Organic}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className='w-[50%] pl-4 xs:w-[80%]'>
                                <p className='text-[18px] font-extrabold'>Organic Foods Only</p>
                                <p  className='text-[14px]  xs:bg-[white] xs:p-1 xs:rounded-xl '>
                                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <div className='flex flex-row items-center'>
                            <div className='bg-white p-4 w-max h-fit rounded-xl flex items-center justify-center'>
                                <Image
                                    className=' '
                                    src={Quality}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className='w-[50%] pl-4  xs:w-[80%]'>
                                <p className='text-[18px] font-extrabold'>Organic Foods Only</p>
                                <p  className='text-[14px] xs:bg-[white] xs:p-1 xs:rounded-xl'>
                                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="view-more pt-10 xs:text-center">
                        <button className='p-3 px-8 rounded-lg bg-[#274C5B] text-white'>View More</button>
                    </div>
                </div>
                <div className='w-[50%] h-full md:w-[30%] xs:w-0'></div>
            </div>
        </div>
    )
}

export default About
