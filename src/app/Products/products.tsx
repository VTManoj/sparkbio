import { ProductList } from '@/utils/exportsFiles';
import React from 'react'
import Image from 'next/image'

const Products = () => {
    const SlicedProducts = ProductList.slice(0, 6);
    return (
        <div className='w-full h-screen bg-white'>
            <div className='font-yellow-tail text-[#68A47F] text-[24px] text-center'>Categories</div>
            <div className='py-1 text-[32px] font-extrabold text-center'>Our Products</div>
            <div className="products-section w-full h-full flex  flex-wrap pt-4 justify-around overflow-hidden">
                {SlicedProducts.map((item: any) => {
                    return (
                        <div className="products-card w-[30%] h-[40%] bg-[#F9F8F8] rounded-3xl">
                            <div>{item.powderType}</div>
                            <div> <Image
                                src={item.image}
                                alt="Picture of the author"
                            /></div>
                            <div>{item.title}</div>
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
