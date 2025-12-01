import BigHeaderTest1 from "@/app/_components/bigHeadingText";
import BlackButtonTest1 from "@/app/_components/blackButton";
import ContainerMargin from "@/app/_components/containerMargin";
import Link from "next/link";

export default function RestorePass1() {
  return (
    <div className="flex flex-col gap-5 w-full h-full justify-center px-4">
    <BigHeaderTest1>Восстановление пароля</BigHeaderTest1>
    <div className="flex flex-col gap-[2px]">
      <label>Email:</label>
      <input type="text" className="border min-h-14" />
    </div>
    <BlackButtonTest1 link="/login">Восстановить пароль</BlackButtonTest1>
    </div>
  )
}