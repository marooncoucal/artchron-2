import { imgNotFound } from "@/app/_components/imgNotFound";
import RowCircles from "@/app/_components/rowCircles1";
import Image from "next/image";
import Link from "next/link";

export default async function CategoriesSections({params}){
    const { slug } = await params
    return(
        <div className="w-full h-full flex flex-col gap-10 items-center py-20">
            <Link href={"/categories/sections" ?? "#"}
                className="w-full flex flex-col items-center justify-center gap-3"
            >
                <div className="bg-gray-400 w-[180px] h-[180px] rounded-full overflow-hidden drop-shadow-lg">
                <Image
                    src={'/img/gold-star-bg.png' ?? imgNotFound}
                    width={500}
                    height={500}
                    alt="image"
                    className="object-cover h-full h-min-[290px] h-max-[560px] w-full"
                />
                </div>
                <div>По всем направлениям</div>
            </Link>
            <RowCircles title='Направление 1' desc='Описание 1 описание описание' link={"/categories/sections/topics/"} />
            <RowCircles title='Направление 2' desc='Описание 2 описание описание' link={"/categories/sections/topics/"} />
            <RowCircles title='Направление 3' desc='Описание 3 описание описание' link={"/categories/sections/topics"} />
        </div>
    )
}