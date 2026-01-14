import BackButton from "@/app/_components/goBackButton1";
import HeaderNav from "@/app/_components/headerNav";
import Link from "next/link";

export default function TesTypesLayout({children}){
    return(
        <section className="">
            <HeaderNav link={"/"} hasProgress={true} hasCount={true} fullCount={19}/>
            <div className="h-svh pt-20">{children}</div>
        </section>
    )
}

// h-[calc(100svh-50px)]