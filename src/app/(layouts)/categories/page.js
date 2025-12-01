import BigHeaderTest1 from "@/app/_components/bigHeadingText";
import { imgNotFound } from "@/app/_components/imgNotFound";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesPage1() {
  return (
    <div className="w-full h-full flex flex-col gap-10 items-center py-20">
      <BigHeaderTest1>Все категории</BigHeaderTest1>
      {/* slug by topic */}
      <Link href={"/categories/sections" ?? "#"}
        className="w-full flex flex-col items-center justify-center gap-3"
      >
        <div className="bg-gray-400 w-[180px] h-[180px] rounded-full overflow-hidden drop-shadow-lg">
          <Image
            src={imgNotFound}
            width={500}
            height={500}
            alt="image"
            className="object-cover h-full h-min-[290px] h-max-[560px] w-full"
          />
        </div>
        <div>По темам</div>
      </Link>
      {/* slug by year */}
      <Link href={"/categories/sections" ?? "#"}
        className="w-full flex flex-col items-center justify-center gap-3"
      >
        <div className="bg-gray-400 w-[180px] h-[180px] rounded-full overflow-hidden drop-shadow-lg">
          <Image
            src={imgNotFound}
            width={500}
            height={500}
            alt="image"
            className="object-cover h-full h-min-[290px] h-max-[560px] w-full"
          />
        </div>
        <div>По № курсу</div>
      </Link>
    </div>
  );
}
