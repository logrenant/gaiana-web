"use client"

import React, { Dispatch, SetStateAction, useContext, useEffect } from 'react'
import { FC, useState } from "react";
import Section from '@/components/Section';
import { ScrollContext } from "@/app/(aboutus)/useScroll";
import { motion, useMotionValue } from 'framer-motion';

const imgs = [
    {
        image: "https://images.unsplash.com/photo-1578747763484-51b21a33e4fa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        image: "https://images.unsplash.com/photo-1524265490809-ee2da0fcd355?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        image: "https://images.unsplash.com/photo-1608068811588-3a67006b7489?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        image: "https://images.unsplash.com/photo-1675521005096-729123cd1dc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 150,
};

const Section2: FC = () => {
    const { scrollY } = useContext(ScrollContext);

    const [imgIndex, setImgIndex] = useState(0);

    const dragX = useMotionValue(0);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    };

    return (
        <Section id="section2">
            <div className="relative overflow-hidden border-t border-gray lg:px-18 lg:pt-18 pt-8">
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    style={{
                        x: dragX,
                    }}
                    animate={{
                        translateX: `-${imgIndex * 100}%`,
                    }}
                    transition={SPRING_OPTIONS}
                    onDragEnd={onDragEnd}
                    className="flex cursor-grab items-center active:cursor-grabbing"
                >
                    <Images imgIndex={imgIndex} />
                </motion.div>
            </div>
            <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        </Section>
    )
}

const Images = ({ imgIndex }: { imgIndex: number }) => {
    return (
        <>
            {imgs.map((img, idx) => {
                return (
                    <motion.div
                        key={idx}
                        style={{
                            backgroundImage: `url(${img.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        animate={{
                            scale: imgIndex === idx ? 0.95 : 0.85,
                        }}
                        transition={SPRING_OPTIONS}
                        className="aspect-video w-full shrink-0 rounded-sm object-cover h-"
                    />
                );
            })}
        </>
    );
};

const Dots = ({
    imgIndex,
    setImgIndex,
}: {
    imgIndex: number;
    setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
    return (
        <div className="flex justify-center my-8 lg:mt-0 lg:mb-18 w-full gap-2">
            {imgs.map((_, idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => setImgIndex(idx)}
                        className={`h-2 w-3 rounded-full transition-all duration-300 ${idx === imgIndex ? "bg-orange w-6" : "bg-green"
                            }`}
                    />
                );
            })}
        </div>
    );
};

export default Section2
