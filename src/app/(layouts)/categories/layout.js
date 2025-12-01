import BackButton from "@/app/_components/goBackButton1";
import HeaderNav from "@/app/_components/headerNav";
import Link from "next/link";

export default function CategoriesLayout({children}){
    return(
        <section className="">
            <HeaderNav/>
            <div className="h-[calc(100svh-50px)]">{children}</div>
        </section>
    )
}