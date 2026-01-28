import Link from "next/link"

export default function Button1({children, link, variant, className, onClick, disabled = false}) {
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
        <div className={`rounded-full w-full h-full flex ${stl} select-none cursor-pointer`} >
            {
                link && !disabled ? (
                    <Link href={link ?? "#"} className={`${className} font-button py-3 px-2 rounded-full w-full flex-center`}>{children}</Link>
                ) : (
                    <div onClick={!disabled ? onClick : undefined} className={`${className} font-button py-3 px-2 rounded-full w-full flex-center`}>{children}</div>
                )
            }
        </div>
    );
}