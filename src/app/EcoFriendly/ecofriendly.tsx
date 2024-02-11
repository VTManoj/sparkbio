import React from 'react'
const EcoFriendly = () => {
    return (
        <div className='ecofriendly w-full h-screen flex xs:block xs:overflow-x-hidden'>
            <div className='ecofriendly-image-continer w-[50%] h-full md:w-[40%] '>
                <div className='flex justify-center items-center h-full'>
                    <div className='hidden xs:block'>
                        <div className='w-[70%] h-[60%] box-shadow bg-white rounded-3xl p-12 md:w-[95%]  md:h-fit xs:w-[80%] xs:h-[90%] xs:p-2 xs:m-auto'>
                            <div className="font-yellow-tail text-[#68A47F] text-[28px] py-4 xs:text-[18px] xs:py-1 ">Eco Friendly</div>
                            <div className="text-[32px] font-extrabold  xs:text-[24px]">
                                Spark Bio is a Friendly <br />
                                Organic Store
                            </div>
                            <div className='pt-6 pb-4 xs:pt-3 xs:pb-4'>
                                <h2 className='font-bold text-xl xs:text-lg'>Sustainable Sourcing</h2>
                                <p className='xs:text-sm'>Our company prioritizes eco-friendly practices by sourcing materials responsibly, minimizing environmental impact, and supporting fair trade initiatives for a greener supply chain.
                                </p>
                            </div>
                            <div className=' pb-4  xs:pb-4'>
                                <h2 className='font-bold text-xl xs:text-lg'>Packaging Innovation</h2>
                                <p className='xs:text-sm'>We reduce waste by utilizing eco-conscious packaging materials, such as recyclable, biodegradable, or compostable options, ensuring that our products are delivered sustainably.
                                </p>
                            </div>
                            <div >
                                <h2 className='font-bold text-xl xs:text-lg'>Carbon Neutrality Commitment</h2>
                                <p className='xs:text-sm'>With a dedication to environmental stewardship, we offset our carbon footprint through initiatives like tree planting or renewable energy adoption, striving for a carbon-neutral operation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='eco-content w-[50%] h-full flex items-center  md:w-[60%] xs:w-[100%] xs:hidden '>
                <div className='w-[70%] h-[60%] box-shadow bg-white rounded-3xl ml-[-10%] p-12 md:w-[95%] 2xl:h-fit xl:h-fit md:h-fit xs:w-[100%] xs:h-[90%] xs:p-2 xs:m-auto xs:hidden'>
                    <div className="font-yellow-tail text-[#68A47F] text-[28px] py-4 xs:text-[18px] xs:py-1 ">Eco Friendly</div>
                    <div className="text-[32px] font-extrabold  xs:text-[24px]">
                        Spark Bio is a Friendly <br />
                        Organic Store
                    </div>
                    <div className='pt-6 pb-4 xs:pt-3 xs:pb-4'>
                        <h2 className='font-bold text-xl xs:text-lg'>Sustainable Sourcing</h2>
                        <p className='xs:text-sm'>Our company prioritizes eco-friendly practices by sourcing materials responsibly, minimizing environmental impact, and supporting fair trade initiatives for a greener supply chain.
                        </p>
                    </div>
                    <div className=' pb-4  xs:pb-4'>
                        <h2 className='font-bold text-xl xs:text-lg'>Packaging Innovation</h2>
                        <p className='xs:text-sm'>We reduce waste by utilizing eco-conscious packaging materials, such as recyclable, biodegradable, or compostable options, ensuring that our products are delivered sustainably.
                        </p>
                    </div>
                    <div >
                        <h2 className='font-bold text-xl xs:text-lg'>Carbon Neutrality Commitment</h2>
                        <p className='xs:text-sm'>With a dedication to environmental stewardship, we offset our carbon footprint through initiatives like tree planting or renewable energy adoption, striving for a carbon-neutral operation.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EcoFriendly
