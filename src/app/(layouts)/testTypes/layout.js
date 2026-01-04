import BackButton from "@/app/_components/goBackButton1";
import HeaderNav from "@/app/_components/headerNav";
import Link from "next/link";

export default function TesTypesLayout({children}){
    return(
        <section className="">
            <HeaderNav hasExit={true} hasProgress={true} progress={120} hasCount={true} count={12}/>
            <div className="h-[calc(100svh-50px)] pt-10">{children}</div>
        </section>
    )
}