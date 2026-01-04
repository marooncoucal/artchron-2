import Button1 from "@/app/_components/buttons1";
import HeaderNav from "@/app/_components/headerNav";

export default function resultTestPage1() {
  return (
    <div className="resultTestPage1 h-full w-full">
        {/* src/app/(layouts)/resultScreen/page.js */}
        <HeaderNav hasExit={true} link={"/"} hasHeader header={"Результаты"}/>
        <div className="pt-20 px-4 flex-col flex-center gap-4">
          <div className="bg-gray-200 h-[250px] w-[250px]"></div>
          <div className="font-h3">Header </div>
          <div className="font-main-text text-gray-400">description </div>
          {/* <button className="font-ubuntu-mono uppercase text-[20px] leading-none py-2 rounded-full bg-ac-orange-600 text-white text-center w-full">description</button> */}
          <Button1 variant={"default"}>gnfsngks</Button1>
          <Button1 variant={"border"}>gnfsngks</Button1>
          <Button1 variant={"right"}>gnfsngks</Button1>
          <Button1 variant={"wrong"}>gnfsngks</Button1>
        </div>
    </div>
  )
}