'use client'

import Button1 from "@/app/_components/buttons1";
import HeaderNav from "@/app/_components/headerNav";
import ProgressWheel1 from "@/app/_components/progressWheel";

export default function resultTestPage1() {
  return (
    <div className="resultTestPage1 h-full w-full">
        {/* src/app/(layouts)/resultScreen/page.js */}
        <HeaderNav hasExit={true} link={"/"} hasHeader header={"Результаты"}/>
        <div className="px-4 pt-20 pb-40 gap-20 flex-col flex-center h-full">
          <div className="aspect-square w-full max-w-[400px]">
            <ProgressWheel1 resultNumber={56} maxResult={78}/>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-h3">Почти идеально!</div>
            <div className="font-main-text text-gray-400">
              Вы знаете тему на 5+ Вы знаете тему на 5+ Вы знаете тему на 5+ Вы знаете тему на 5+ Вы знаете тему на 5+ Вы знаете тему на 5+
            </div>
          </div>
          <div className="fixed right-4 left-4 bottom-5 gap-3 flex flex-col">
            <Button1 variant={"default"}>Сохранить и выйти</Button1>
            <Button1 variant={"border"}>пройти еще раз</Button1>
          </div>
        </div>
    </div>
  )
}