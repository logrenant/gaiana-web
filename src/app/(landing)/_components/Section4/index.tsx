import React from 'react'
import ProductsCard from './_components/ProductsCard'
import Section from '@/components/Section'

const Section4 = () => {
    return (
        <Section id='section4'>
            <div className="flex flex-col w-full lg:flex-row justify-between gap-4 lg:px-18 px-8 my-8 lg:my-24">
                <ProductsCard
                    title="Soins de la peau"
                    content="Soins cutanés - Produits pour Hommes - Soins capillaires - Pour le bain - Aromathérapie"
                    imageSrc="/care.jpeg"
                />
                <ProductsCard
                    title="Compléments Alimentaires"
                    content="Gummies- Infusions - Comprimés - Ampoules - Poudres - Boissons"
                    imageSrc="/gummy.jpeg"
                />
                <ProductsCard
                    title="Bien-être Intime"
                    content="Huiles de massage - Bougies de massage - Compléments alimentaires liquides/solides - Coffrets avec accessoires"
                    imageSrc="/well-being.jpeg"
                />
            </div>
        </Section>
    )
}

export default Section4
