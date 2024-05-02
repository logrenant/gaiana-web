import React from 'react'
import Link from 'next/link'
import Sun from './svg/sun'
import UnderlineLinkButton from './buttons/underline-link-button'

const Navbar = () => {
    return (
        <div className='w-full fixed top-0 left-0 z-50 flex flex-row justify-between items-end px-18 py-8 bg-primary'>
            <div className='text-5xl font-medium'>
                <Link href="/">
                    Laboratoire Gaïana Paris
                </Link>
            </div>
            <div className='flex flex-row items-center gap-12 text-2xl'>
                <div className='flex gap-6'>
                    <UnderlineLinkButton label='About us' href='/aboutus' />
                    <UnderlineLinkButton label='Contact' href='/contact' />
                </div>
                <div>
                    <Sun />
                </div>
            </div>
        </div>
    )
}

export default Navbar
