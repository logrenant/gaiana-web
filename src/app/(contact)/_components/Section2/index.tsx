"use client"

import React, { useContext } from 'react'
import { FC } from "react";
import Section from '@/components/Section';
import { ScrollContext } from '@/app/(aboutus)/useScroll';
import Link from 'next/link';
import Peony from '@/components/svg/peony';
import MobilePeony from '@/components/svg/mobilePeony';


const Section2: FC = () => {
    const { scrollY } = useContext(ScrollContext);

    return (
        <Section id="section2">
            <div className='relative bg-primary flex flex-col px-4 lg:px-18 gap-8 border-t border-light z-10'>
                <div className='flex flex-row justify-between items-center w-full my-18'>
                    <div className='text-4xl lg:text-9xl font-normal text-secondary tracking-tighter leading-[0.925]'>
                        <h1>You Can Reach Us.</h1>
                    </div>
                    <div
                        style={{
                            transform: `rotate(${scrollY * 0.9}deg)`,
                            transition: 'transform 0.1s ease',
                        }}>
                        <div>
                            <div className='hidden lg:inline'>
                                <Peony />
                            </div>
                            <div className='inline lg:hidden'>
                                <MobilePeony />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ width: '100%' }}>
                        <iframe
                            title="Gaiana"
                            width="100%"
                            height="600"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ahmet%20Yesevi%20Mh.%20Ergin%20Sk.%20No:%202%20Nil%C3%BCfer/Bursa+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embedhttps://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=15%20RUE%20DE%20LA%20NOUVELLE%20France%2093100%20MONTREUIL+(Gaiana)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className='flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center font-light text-xl lg:text-3xl w-full mb-48'>
                    <div className='cursor-pointer text-gray flex flex-col m-0 p-0 items-center hover:text-orange transition-all duration-500'>
                        <span className='lg:text-2xl'>15 Rue De La Nouvelle</span> France 93100 Montreuil
                    </div>
                    <Link href="mailto:info@gaianaparis.com" className='lg:text-3xl text-2xl cursor-pointer text-gray hover:text-orange transition-all duration-500'>
                        info@gaianaparis.com
                    </Link>
                    <Link href="mailto:nashide@gaianaparis.com" className='lg:text-3xl text-2xl cursor-pointer text-gray hover:text-orange transition-all duration-500'>
                        nashide@gaianaparis.com
                    </Link>
                </div>
            </div>
        </Section>
    )
}

export default Section2