import { ProductList } from '@/utils/exportsFiles';
import React from 'react'
import Image from 'next/image'

const Offer = () => {
    const SlicedProducts = ProductList.slice(0, 3);

    return (
        <div className='offer-section w-full h-[80vh] bg-[#274C5B] xs:h-max'>
            <div className='w-[80%] h-full m-auto md:w-[90%] xs:w-full'>
                <div className='h-full'>
                    <div className='flex items-center h-[20%] pt-12 xs:flex-col '>
                        <div className='w-[90%]'>
                            <div className='font-yellow-tail text-[#68A47F] text-[28px] py-4 xs:text-[18px] xs:py-2'>About Us</div>
                            <div className='text-[32px] font-extrabold text-white  xs:text-[24px]'>We Offer Organic Products For You</div>
                        </div>
                        <div className="w-[40%] xs:pt-2">
                            <div>
                                <button className='p-4 rounded-lg bg-[#EFD372] xs:p-2'>View All Product</button>
                            </div>
                        </div>
                    </div>
                    <div className="products-section w-full h-[60%] grid grid-cols-3 gap-4 pt-16 justify-items-center xs:pt-4 xs:grid-cols-2 xs:gap-2 xs:justify-items-center xs:py-12" >
                        {SlicedProducts.map((item: any) => {
                            return (
                                <div className="products-card w-[50%] h-[100%]  bg-[#F9F8F8] rounded-3xl md:w-[95%] md:h-[85%] xs:w-[90%] ">
                                    <div className='p-1 mt-4 ml-4 bg-[#274C5B] font-semibold text-white w-fit rounded-lg text-xs'>{item.powderType}</div>
                                    <div className='w-[60%] h-[60%] flex justify-center m-auto pt-2 md:h-[50%]'> <Image
                                        className='w-full h-full md:h-[95%]'
                                        src={item.image}
                                        alt="Picture of the author"
                                    /></div>
                                    <div className='font-bold pt-2 text-center'>{item.title}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Offer
