import BigHeaderTest1 from "@/app/_components/bigHeadingText";
import BlackButtonTest1 from "@/app/_components/blackButton";
import ContainerMargin from "@/app/_components/containerMargin";
import Link from "next/link"

export default function Register1() {
  return (
        <div className="h-full flex flex-col gap-5 w-full justify-center px-4">
        <BigHeaderTest1>Регистрация</BigHeaderTest1>
        <div className="flex flex-col gap-[2px]">
          <label>Имя</label>
          <input type="text" className="border min-h-14" />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label>Телефон</label>
          <input type="password" className="border min-h-14" />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label>Пароль</label>
          <input type="text" className="border min-h-14" />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label>Повторить пароль</label>
          <input type="password" className="border min-h-14" />
        </div>
        <BlackButtonTest1 link="/welcome">Зарегистрироваться</BlackButtonTest1>
        </div>
  );
}