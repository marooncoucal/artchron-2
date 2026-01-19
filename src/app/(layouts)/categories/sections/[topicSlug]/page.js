import BottomNav1 from "@/app/_components/bottomNav";
import CircleHead from "@/app/_components/circleCenterHead";
import HeaderNav from "@/app/_components/headerNav";
import { imgNotFound } from "@/app/_components/imgNotFound";

import { testRowsSrc1 } from "@/app/_components/srcData";

async function getTests(){
    const remoteData = await fetch("http://localhost:3000/srcData/tests1.json", 
    { cache: "no-store" })
    const data = await remoteData.json()
    return data
}

export default async function SectionTopics({params}){
    const { topicSlug } = await params
    const testInfo = await getTests()
    // console.log(slug)
    const quiz = testInfo.quizes.find(q => q.topicSlug === topicSlug)
    if (!quiz) {
        return <div>topic not found</div>
    }
    const tests = quiz.topics
    const header = quiz.name
    // const testInfo = testRowsSrc1
    // const test1 = testInfo.quizes[0]
    // const tests = test1.topics
    // const header = test1.name
    return(
        <div className="w-full flex flex-col items-center gap-18 pt-26 pb-40">
            <HeaderNav header={header} hasGradient={true}/>
            <BottomNav1 />
            {tests.map((t, index) => (
                <CircleHead
                    key={index} 
                    link={t.link ?? "#"} 
                    src={t.src ?? imgNotFound} 
                    title={t.title} 
                    desc={t.desc}
                />
            ))}
        </div>
    )
}