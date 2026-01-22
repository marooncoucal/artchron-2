import HeaderNav from "@/app/_components/headerNav";
import { imgNotFound } from "@/app/_components/imgNotFound";
import RowCircles from "@/app/_components/rowCircles1";
import Image from "next/image";
import Link from "next/link";

import { testRowsSrc1 } from "@/app/_components/srcData";
import BottomNav1 from "@/app/_components/bottomNav";
import { CMS_URL } from "@/config";

async function getRows(){
    const remoteData = await fetch(CMS_URL + "/srcData/tests1.json", { cache: "no-store" })
    const data = await remoteData.json()
    return data
}

export default async function CategoriesSections({params}){
    // const { slug } = await params
    // const tSrc = testRowsSrc1
    const quizRows = await getRows()
    const tSrc = quizRows.quizes
    return(
        <div className="w-full flex flex-col items-center gap-18 pt-26 pb-36">
            <HeaderNav header={"Направления"} hasGradient={true}/>
            <BottomNav1 />
            {tSrc.map((row, index) => (
                <RowCircles key={index} testInfo={row}/>
            ))}
            <AllTestCircle />
        </div>
    )
}

function AllTestCircle(){
    return(
        <div className="flex flex-col items-center">
            <Link href={"/categories/sections" ?? "#"} className="w-full flex flex-col items-center justify-center gap-3">
                <div className="bg-gray-400 size-[192px] rounded-full overflow-hidden">
                    <Image
                        src={'/img/gold-star-bg.png' ?? imgNotFound}
                        width={500}
                        height={500}
                        alt="image"
                        className="object-cover h-full h-min-[290px] h-max-[560px] w-full"
                    />
                </div>
            </Link>    
            <div className="font-h3 text-[16px] text-ac-gray mt-6 text-center">По всем направлениям</div>
        </div>
    )
}