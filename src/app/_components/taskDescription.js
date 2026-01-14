export default function TaskDescription({header, desc}){
    return(
        <div className="flex-center flex-col px-4 pt-4">
            <h2 className="text-[18px] leading-[22px] text-center  text-ac-gray mb-[6px]">
                {header}
            </h2>
            <p className="text-[12px] leading-[14px] text-center text-ac-gray-light">
                {desc}
            </p>
        </div>
    )
}