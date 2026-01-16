import Link from "next/link"

export default function Button1({children, link, variant, className, onClick}) {
    let stl = ""
    switch (variant){
        case "right": 
            stl = "bg-ac-lime-300 text-white"
            break;
        case "wrong": 
            stl = "bg-ac-orange-600 text-white"
            break;
        case "border": 
            stl = "bg-white border border-[#F2F2F2] text-[#393939]"
            break;
        default:
            stl = "bg-[#F2F2F2] text-[#393939]"
            break;
    }
    return (
        <div className={`font-button py-3 rounded-full w-full ${stl} ${className}`}>
            {
                link ? (
                    <Link href={link ?? "#"}>{children}</Link>
                ) : (
                    <div onClick={onClick}>{children}</div>
                )
            }
        </div>
    );
}