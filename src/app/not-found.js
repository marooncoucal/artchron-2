import Link from "next/link";
import BackButton from "./_components/goBackButton1";

export default function Error404() {
  return (
    <div className="w-full h-full pb-40 justify-center items-center flex flex-col gap-6">
      <div className="flex-col justify-center items-center gap-[10px] flex">
        <div className="text-black text-8xl font-semibold">404</div>
        <div className=" text-black text-2xl font-normal">
          страница не найдена
        </div>
      </div>
      <BackButton/>
    </div>
  );
}
