import { ProductList } from '@/utils/exportsFiles';
import React from 'react'
import Image from 'next/image'

const Products = () => {
    const SlicedProducts = ProductList.slice(0, 6);
    return (
        <div className='w-full h-screen bg-white xs:h-fit'>
            <div className='h-[10%] xs:pt-16'>
                <div className='font-yellow-tail text-[#68A47F] text-[24px] text-center pt-2  xs:text-[18px]'>Categories</div>
                <div className=' text-[32px] font-extrabold text-center  xs:text-[24px]'>Our Products</div>
            </div>
            <div className="products-section w-full h-[80%] grid grid-cols-3 gap-4 pt-4 justify-items-center xs:grid-cols-2 xs:gap-2">
                {SlicedProducts.map((item: any) => {
                    return (
                        <div className="products-card w-[50%] h-[95%]  bg-[#F9F8F8] rounded-3xl md:h-[70%]  md:w-[80%] xs:w-[90%]">
                            <div className='p-1 mt-4 ml-4 bg-[#274C5B] font-semibold text-white w-fit rounded-lg text-xs text-[8px] xs:m-auto xs:w-[60%] xs:text-center'>{item.powderType}</div>
                            <div className='w-[60%] h-[60%] flex justify-center m-auto pt-2 md:h-[60%] md:w-[80%] md:items-center'> <Image
                                className='w-full h-full md:w-[70%] md:h-[70%]'
                                src={item.image}
                                alt="Picture of the author"
                            /></div>
                            <div className='font-bold pt-2 text-center xs:text-[10px]'>{item.title}</div>
                        </div>
                    )
                })}
            </div>
            <div className="viewmore text-center h-[10%]">
                <button className='p-4 bg-[#274C5B] text-white rounded-xl xs:p-2 xs:my-2'>View More</button>
            </div>
        </div>
    )
}

export default Products;
