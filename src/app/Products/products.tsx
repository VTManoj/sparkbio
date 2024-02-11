import { ProductList } from '@/utils/exportsFiles';
import React from 'react'
import Image from 'next/image'
import Product from "../../../public/Product.png"

const Products = () => {
    const SlicedProducts = ProductList.slice(0, 6);
    return (
        <div className='w-full h-screen bg-white'>
            <div className='font-yellow-tail text-[#68A47F] text-[24px] text-center pt-4'>Categories</div>
            <div className='py-1 text-[32px] font-extrabold text-center'>Our Products</div>
            <div className="products-section w-full h-[80%] grid grid-cols-3 gap-4 pt-4 justify-items-center">
                {SlicedProducts.map((item: any) => {
                    return (
                        <div className="products-card w-[50%] h-[95%]  bg-[#F9F8F8] rounded-3xl">
                            <div className='p-1 mt-4 ml-4 bg-[#274C5B] font-semibold text-white w-fit rounded-lg text-xs'>{item.powderType}</div>
                            <div className='w-[60%] h-[60%] flex justify-center m-auto pt-2'> <Image
                                className='w-full h-full '
                                src={item.image}
                                alt="Picture of the author"
                            /></div>
                            <div className='font-bold pt-2 text-center'>{item.title}</div>
                        </div>
                    )
                })}
            </div>
            <div className="viewmore text-center">
                <button className='p-4 bg-[#274C5B] text-white rounded-xl'>View More</button>
            </div>
        </div>
    )
}

export default Products;
