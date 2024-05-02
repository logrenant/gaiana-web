import React from 'react'
import ProductsCard from './_components/ProductsCard'
import Section from '@/components/Section'

const Section4 = () => {
    return (
        <Section id='section4'>
            <div className="flex flex-col w-full lg:flex-row justify-between gap-4 lg:px-18 px-8 my-24">
                <ProductsCard
                    title="Skin Care"
                    content="Skin Care - Masculine - Hair Care - For the Bath - Aromatheraphy"
                    imageSrc="/care.jpeg"
                />
                <ProductsCard
                    title="Functional Foods"
                    content="Gummies - Infusions - Compressed - Light Bulbs - Powder - Drinks"
                    imageSrc="/gummy.jpeg"
                />
                <ProductsCard
                    title="Intimate Well-Being"
                    content="Massage Oil - Massage Candle - Liquid/Solid Food Suplements - Box with Accessory"
                    imageSrc="/well-being.jpeg"
                />
            </div>
        </Section>
    )
}

export default Section4
