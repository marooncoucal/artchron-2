import Link from "next/link"

export default function Button1({children, link, variant}) {
    switch (variant){
        case "right": 
        return (
            <Link 
                href={link ?? "#"} 
                className="font-button btn-1 bg-ac-lime-300 text-white"
            >
                {children}
            </Link>
        );
        case "wrong": 
        return (
            <Link 
                href={link ?? "#"} 
                className="font-button btn-1 bg-ac-orange-600 text-white w-full"
            >
                {children}
            </Link>
        );
        case "border": 
        return (
            <Link 
                href={link ?? "#"} 
                className="font-button btn-1 bg-white border border-[#F2F2F2] text-black"
            >
                {children}
            </Link>
        );
        case "default": 
        default:
        return (
            <Link 
                href={link ?? "#"} 
                className="font-button btn-1 bg-[#F2F2F2] text-black"
            >
                {children}
            </Link>
        );
}
}