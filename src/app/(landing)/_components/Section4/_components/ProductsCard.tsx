import React from 'react'
import Image from 'next/image'

// @ts-ignore
const ProductsCard = ({ title, content, imageSrc }) => {
    return (
        <div className='group relative flex flex-col rounded-sm justify-between border border-gray w-full min-h-[422px] p-4 items-center bg-primary text-secondary hover:text-primary duration-400'>
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <Image
                    className='w-full h-full object-cover aspect-auto rounded-sm'
                    src={imageSrc}
                    alt={title}
                    fill
                    style={{
                        objectFit: "cover"
                    }}
                />
            </div>
            <div className='font-bold lg:text-3xl z-30'>
                {title}
            </div>
            <div className='font-semibold lg:text-2xl text-center z-30'>
                {content}
            </div>
            <div className='absolute inset-0 z-20 bg-primary bg-opacity-10 backdrop-filter backdrop-blur-sm pointer-events-none'></div>
        </div>
    )
}

export default ProductsCard
