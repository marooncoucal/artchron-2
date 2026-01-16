import BigHeaderTest1 from "@/app/_components/bigHeadingText";
import BottomNav1 from "@/app/_components/bottomNav";
import { imgNotFound } from "@/app/_components/imgNotFound";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesPage1() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <BottomNav1 />
      <div className="fixed z-100 flex-center flex-col gap-1 w-full pt-10 pb-10 bg-linear-to-b from-white from-80% to-white/0 to-100%">
        <div className="w-full wrap-break-word font-h3 text-center">С чего начнем?</div>
        <div className="w-full wrap-break-word font-main-text text-gray-400 text-center">для начала треннинга выберите тест</div>
      </div>

      <div className="pt-40 pb-40 flex flex-col gap-20 items-center">
        <TestTypeCircle src={"/img/plashki/main1.jpg"} link={"/categories/sections"}>Тесты по направлениям</TestTypeCircle>
        <TestTypeCircle src={"/img/plashki/main2.jpg"} link={"/categories/sections"}>Тесты по курсам</TestTypeCircle>
      </div>

    </div>
  );
}

function TestTypeCircle({link, children, src}){
  return(
    <Link href={link ?? "#"}
      className="w-full flex flex-col items-center justify-center"
    >
      <div className="bg-gray-400 w-[192px] h-[192px] rounded-full overflow-hidden drop-shadow-lg">
        <Image
          src={src ?? imgNotFound}
          width={500}
          height={500}
          alt="image"
          className="object-cover h-full h-min-[290px] h-max-[560px] w-full"
        />
      </div>
      <div className="text-[16px] text-ac-gray mt-5">{children}</div>
    </Link>
  )
}