import BigHeaderTest1 from "@/app/_components/bigHeadingText";
import BlackButtonTest1 from "@/app/_components/blackButton";
import ContainerMargin from "@/app/_components/containerMargin";
import { imgNotFound } from "@/app/_components/imgNotFound";
import NormalTextTest1 from "@/app/_components/normalText";
import Image from "next/image";
import Link from "next/link"

export default function AuthScreen1() {
  return (
    <div className="h-full flex flex-col gap-14 w-full items-center justify-center">
      <div className="bg-gray-400 w-[180px] h-[180px] rounded-full overflow-hidden drop-shadow-lg">
        <Image
          src={imgNotFound}
          width={500}
          height={500}
          alt='image'
          className="object-cover h-full h-min-[290px] h-max-[560px] w-full"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-3">
        <BigHeaderTest1>Art Chronos</BigHeaderTest1>
        <ContainerMargin><NormalTextTest1 textAlign="center">Платформа для изучения истории искусств через тесты в игровом формате </NormalTextTest1></ContainerMargin>
        <ContainerMargin><BlackButtonTest1 link={'/login'}>Войти</BlackButtonTest1></ContainerMargin>
        <Link href={'/register'}><div className="text-[14px] text-gray-400">зарегистрироваться</div></Link>
      </div>
    </div>
  );
}