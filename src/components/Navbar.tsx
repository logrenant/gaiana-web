"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Sun from './svg/sun'
import UnderlineLinkButton from './buttons/underline-link-button'
import { AnimatePresence, animate, delay, motion } from "framer-motion"
import { exit } from 'process'

const Navbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const menuLinks = [
        { title: "About us", href: "/aboutus" },
        { title: "Contact", href: "/contact" }
    ];
    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const menuVariants = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };
    const containerVariants = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        }, open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        }
    };

    return (
        <div className='w-full fixed top-0 left-0 z-40 px-4 lg:px-18 py-8 bg-primary'>
            <div className='flex flex-row justify-between items-end'>
                <div className='text-xl lg:text-5xl font-semibold'>
                    <Link href="/">
                        Laboratoire Gaïana Paris
                    </Link>
                </div>
                <div className='hidden lg:inline'>
                    <div className='flex flex-row items-center gap-12 text-2xl'>
                        <div className='flex gap-6'>
                            <UnderlineLinkButton label='À Propos de Nous' href='/aboutus' />
                            <UnderlineLinkButton label='Contact' href='/contact' />
                        </div>
                    </div>
                </div>
                <div className='inline lg:hidden text-sm font-normal'
                    onClick={toggleMenu}
                >
                    Menu
                </div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className='fixed left-0 top-0 w-full h-screen py-8 px-4 origin-top bg-secondary text-primary'>
                        <div className='flex h-full flex-col'>
                            <div className='flex justify-between items-end'>
                                <div className='text-xl lg:text-5xl font-semibold'>
                                    <Link href="/">
                                        Laboratoire Gaïana Paris
                                    </Link>
                                </div>
                                <div className='cursor-pointer'
                                    onClick={toggleMenu}
                                >
                                    Close
                                </div>
                            </div>
                            <motion.div
                                variants={containerVariants}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className='flex flex-col h-full justify-center items-center gap-4'
                            >
                                {menuLinks.map((link, index) => (
                                    <div className='overflow-hidden' key={index}>
                                        <MenuLink title={link.title} href={link.href} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar

interface MenuLinkProps {
    title: string;
    href: string;
}

const menuLinkVariants = {
    initial: {
        y: "30vh",
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
        },
    }, open: {
        y: 0,
        transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
        },
    }
}

const MenuLink: React.FC<MenuLinkProps> = ({ title, href }) => {
    return (
        <motion.div
            variants={menuLinkVariants}
            className='text-2xl'>
            <Link href={href}>{title}</Link>
        </motion.div>
    );
};