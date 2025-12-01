import Image from "next/image";
import Link from "next/link";
import { imgNotFound } from "./imgNotFound";

export default function CircleHead({link, title, desc, src}){
    return(
        <Link href={link ?? "#"}
            className="flex flex-col items-center justify-center gap-6"
        >
            <div className="bg-gray-400 w-[180px] h-[180px] rounded-full overflow-hidden drop-shadow-lg">
            <Image
                src={src ?? imgNotFound}
                width={500}
                height={500}
                alt="image"
                className="object-cover h-full h-min-[290px] h-max-[560px] w-full"
            />
            </div>
            <div className="flex flex-col items-center">
                <div>{title}</div>
                <div className="text-sm text-gray-400">{desc}</div>
            </div>
        </Link>
    )
}