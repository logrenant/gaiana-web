import Link from "next/link";

type UnderlineLinkButtonProps = {
    label: string;
    href: string;
};

export default function UnderlineLinkButton({ label, href }: UnderlineLinkButtonProps) {
    return (
        <Link href={href} className="group text-hint hover:text-green transition-all duration-300 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-r from-green to-green bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"> {label} </span>
        </Link>
    );
}
