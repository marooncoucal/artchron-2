import BottomNav1 from "@/app/_components/bottomNav";
import BackButton from "@/app/_components/goBackButton1";
import HeaderNav from "@/app/_components/headerNav";
import Link from "next/link";

export default function CategoriesLayout({children}){
    return(
        <section className="flex-center">
            <BottomNav1 />
            <div className="h-svh w-full">{children}</div>
        </section>
    )
}