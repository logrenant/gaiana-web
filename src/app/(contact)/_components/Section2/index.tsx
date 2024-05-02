"use client"

import React, { useContext, useEffect } from 'react'
import { FC, useState } from "react";
import Section from '@/components/Section';
import Flower from '@/components/svg/flower';
import { ScrollContext } from '@/app/(aboutus)/useScroll';
import Link from 'next/link';
import Peony from '@/components/svg/peony';


const Section2: FC = () => {
    const { scrollY } = useContext(ScrollContext);

    return (
        <Section id="section2">
            <div className='relative bg-primary flex flex-col px-18 gap-8 border-t border-light z-10'>
                <div className='flex flex-row justify-between items-center w-full my-18'>
                    <div className=' text-9xl font-normal text-secondary tracking-tighter leading-[0.925]'>
                        <h1>You Can Reach Us.</h1>
                    </div>
                    <div
                        style={{
                            transform: `rotate(${scrollY * 0.9}deg)`,
                            transition: 'transform 0.1s ease',
                        }}>
                        <Peony />
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
                <div className='flex flex-row justify-between items-center font-light text-3xl w-full mb-48'>
                    <div className='cursor-pointer text-gray flex flex-col m-0 p-0 items-center hover:text-orange transition-all duration-500'>
                        <span className='text-2xl'>15 Rue De La Nouvelle</span> France 93100 Montreuil
                    </div>
                    <Link href="mailto:info@gaianaparis.com" className='text-3xl cursor-pointer text-gray hover:text-orange transition-all duration-500'>
                        info@gaianaparis.com
                    </Link>
                    <Link href="mailto:nashide@gaianaparis.com" className='text-3xl cursor-pointer text-gray hover:text-orange transition-all duration-500'>
                        nashide@gaianaparis.com
                    </Link>
                </div>
            </div>
        </Section>
    )
}

export default Section2