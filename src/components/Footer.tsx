import React, { MouseEvent } from "react";
import {
    SiInstagram,
    SiLinktree,
    SiAmazon,
} from "react-icons/si";
import { useAnimate } from "framer-motion";
import { IconType } from "react-icons";
import UnderlineLinkButton from "./buttons/underline-link-button";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-secondary text-primary p-18">
            <div className="flex justify-between py-8 items-center">
                <div className="text-5xl font-medium">
                    Laboratoire Gaïana Paris
                </div>
                <div className="flex justify-end">
                    <LinkBox Icon={SiInstagram} href="https://www.instagram.com/gaianaparis/" />
                    <LinkBox Icon={SiAmazon} href="https://www.amazon.fr/dp/B0CVVZWGPR" />
                    <LinkBox Icon={SiLinktree} href="https://linktr.ee/gaianaparis?utm_source=qr_code" />
                </div>
            </div>
            <div className="flex flex-row justify-between items-center py-8 border-t border-gray">
                <div className="text-gray text-sm">
                    Copyright © 2024. All rights reserved.
                </div>
                <div className="flex gap-8 text-lg">
                    <Link href="/aboutus" className="text-gray hover:text-primary transition-colors duration-200">
                        About us
                    </Link>
                    <Link href="/contact" className="text-gray hover:text-primary transition-colors duration-200">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
    [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    top: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }: { Icon: IconType; href: string }) => {
    const [scope, animate] = useAnimate();

    const getNearestSide = (e: MouseEvent) => {
        const box = (e.target as HTMLElement).getBoundingClientRect();

        const proximityToLeft = {
            proximity: Math.abs(box.left - e.clientX),
            side: "left" as Side,
        };
        const proximityToRight = {
            proximity: Math.abs(box.right - e.clientX),
            side: "right" as Side,
        };
        const proximityToTop = {
            proximity: Math.abs(box.top - e.clientY),
            side: "top" as Side,
        };
        const proximityToBottom = {
            proximity: Math.abs(box.bottom - e.clientY),
            side: "bottom" as Side,
        };

        const sortedProximity = [
            proximityToLeft,
            proximityToRight,
            proximityToTop,
            proximityToBottom,
        ].sort((a, b) => a.proximity - b.proximity);

        return sortedProximity[0].side;
    };

    const handleMouseEnter = (e: MouseEvent) => {
        const side = getNearestSide(e);

        animate(scope.current, {
            clipPath: ENTRANCE_KEYFRAMES[side],
        });
    };

    const handleMouseLeave = (e: MouseEvent) => {
        const side = getNearestSide(e);

        animate(scope.current, {
            clipPath: EXIT_KEYFRAMES[side],
        });
    };

    return (
        <a
            target="_blank"
            href={href}
            onMouseEnter={(e) => {
                handleMouseEnter(e);
            }}
            onMouseLeave={(e) => {
                handleMouseLeave(e);
            }}
            className="relative grid h-12 w-full place-content-center sm:h-28 md:h-24 md:w-24"
        >
            <Icon className="text-xl sm:text-3xl lg:text-4xl" />

            <div
                ref={scope}
                style={{
                    clipPath: BOTTOM_RIGHT_CLIP,
                }}
                className="absolute inset-0 grid place-content-center bg-primary text-secondary"
            >
                <Icon className="text-xl sm:text-3xl md:text-4xl" />
            </div>
        </a>
    );
};

export default Footer