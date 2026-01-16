import ExitCloseButton from "./exitCloseButton1";
import BackButton from "./goBackButton1";

export default function HeaderNav({
    hasBackButton = true,
    link, header,
    hasGradient = false,
    hasProgress = false,
    hasCount = false, fullCount = 1, // quantity of questions
    currentCount // prbly from array.length of questions
}) {
    const grad = hasGradient ? "bg-linear-to-b from-white from-40% via-white/50 via-70% to-white/0 to-100%" : "" 
    if (!currentCount) currentCount = 4
    const progress = Math.round(currentCount / Math.max(1, fullCount) * 100)
    return (
        <div className={`navBack fixed top-0 left-0 right-0 z-1000 pt-3 pb-8 px-4 flex items-center justify-between gap-6 ${grad}`}>
            <div className="w-[48px] h-[48px]">{hasBackButton && <BackButton />}</div>
            {header && <div className='w-full font-main-text font-medium text-center text-[20px] leading-5 text-gray-500'>{header ?? "header"}</div>}
            {hasProgress &&
                <div className="wrapperProgress w-full flex-center flex-col gap-1.5 pb-3">
                    {hasCount && <div className="text-sm text-gray-300"><span className="text-ac-gray">{currentCount}</span>/{fullCount}</div>}
                    <div className="grayProgressField w-full bg-gray-100 h-3 rounded-sm overflow-hidden transition-all duration-300">
                        <div style={{ width: `${progress}%` ?? "20%" }} className="colorProgress h-full bg-ac-lime-300 rounded-sm" />
                    </div>
                </div>
            }
            <div className="w-[48px] h-[48px]">{link && <ExitCloseButton link={link ?? "#"} />}</div>
        </div>
    )
}