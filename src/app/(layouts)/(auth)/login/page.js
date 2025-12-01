import BigHeaderTest1 from "@/app/_components/bigHeadingText";
import BlackButtonTest1 from "@/app/_components/blackButton";
import ContainerMargin from "@/app/_components/containerMargin";
import Link from "next/link";

export default function Login1() {
  return (
    <div className="flex flex-col gap-5 w-full h-full justify-center px-4">
      <BigHeaderTest1>Вход</BigHeaderTest1>
      <div className="flex flex-col gap-[2px]">
        <label>Name:</label>
        <input type="text" className="border min-h-14" />
      </div>
      <div className="flex flex-col gap-[2px]">
        <label>Password:</label>
        <input type="password" className="border min-h-14" />
      </div>
      <BlackButtonTest1 link="/welcome">Войти</BlackButtonTest1>
      <div className="flex justify-center gap-8">
        <Link
          href={"/register"}
          className="text-[14px] text-gray-400 text-center"
        >
          Регистрация
        </Link>
        <Link
          href={"/login/forgotPass"}
          className="text-[14px] text-gray-400 text-center"
        >
          Забыли пароль?
        </Link>
      </div>
    </div>
  );
}
