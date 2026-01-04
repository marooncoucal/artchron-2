'usec client'

import ExitCloseButton from "./exitCloseButton1";
// import { useEffect } from "react";
import BackButton from "./goBackButton1";
import { ExitButton } from "./icons";

export default function HeaderNav({
    hasExit = false, link,
    hasHeader = false, header, 
    hasProgress = false, progress, 
    hasCount = false, count
}){
    const fullCount = count
    const currentCount = count/2
    return(
        <div className="navBack fixed top-0 left-0 right-0 z-1000 mt-12 p-4 flex items-center justify-between gap-6">
            <BackButton/>
            {hasHeader && <div className='w-full text-center text-[20px] leading-[22px] text-gray-500'>{header ?? "header"}</div>}
            {hasProgress && 
                <div className="wrapperProgress flex flex-col justify-center items-center gap-1.5 py-2.5 max-w-[calc(100vw-88px)] mx-auto w-full">
                    {hasCount && <div className="text-sm text-gray-300"><span className="text-black">{currentCount}</span>/{fullCount}</div>}
                    <div className="grayProgressField w-full bg-gray-100 h-3 rounded-sm overflow-hidden transition-all duration-300">
                        <div style={{width: progress ?? 10}} className="colorProgress h-full bg-ac-lime-300 rounded-sm"/>
                    </div>
                </div>
            }
            {hasExit && <ExitCloseButton link={link} />}
        </div>
    )
}

function ProgressBar() {
    const router = useRouter()
    
    const [windowWidth, setWindowWidth] = useState(0)

    // useEffect(() => {
    //     const handleResize = () => setWindowWidth(window.innerWidth)
    //     handleResize()
    //     window.addEventListener('resize', handleResize)
    //     return () => window.removeEventListener('resize', handleResize)
    // }, [])

    return (
        <div
            className="absolute left-0 top-14 z-50 w-full px-4 pb-4 pt-2 md:pt-4"
            style={{ paddingLeft: windowWidth > 768 ? '16px' : '8px' }}
        >
            {/* Header row */}
            <div className="flex items-start gap-2 w-full max-w-[calc(100vw-2rem)] md:max-w-4xl mx-auto">
                {link ? (
                    <button
                        onClick={() => router.push(link)}
                        className="p-1 hover:scale-105 transition-transform shrink-0"
                        aria-label="Back"
                    >
                        <Image
                            src={Back2W}
                            width={32}
                            height={32}
                            alt="Back"
                            className="brightness-0 invert grayscale hover:grayscale-0 transition-all duration-200"
                        />
                    </button>
                ) : (
                    <button
                        onClick={() => router.back()}
                        className="p-1 hover:scale-105 transition-transform shrink-0"
                        aria-label="Back"
                    >
                        <Image
                            src={Back2W}
                            width={32}
                            height={32}
                            alt="Back"
                            className="brightness-0 invert grayscale hover:grayscale-0 transition-all duration-200"
                        />
                    </button>
                )}

                {header && (
                    <div className="flex-1 min-w-0 pt-2 truncate">
                        <ThemedText type="header3" numberOfLines={1}>
                            {children}
                        </ThemedText>
                    </div>
                )}

                {back && (
                    <button
                        className="ml-auto p-1 hover:scale-105 transition-transform shrink-0"
                        onClick={() => router.push('/(tabs)')}
                        aria-label="Close"
                    >
                        <Image
                            src={CloseW}
                            width={32}
                            height={32}
                            alt="Close"
                            className="brightness-0 invert grayscale hover:grayscale-0 transition-all duration-200 self-end"
                        />
                    </button>
                )}
            </div>

            {/* Progress bar */}
            {progressBar && (
                <div className="flex items-center justify-center gap-1.5 px-1 py-2.5 w-full max-w-[calc(100vw-2rem)] md:max-w-4xl mx-auto">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-lime-500 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Question counter */}
            {numQuest && (
                <div className="text-center mt-[-0.375rem] w-full max-w-[calc(100vw-2rem)] md:max-w-4xl mx-auto">
                    <div className="truncate">
                        Вопрос 5 из 20
                    </div>
                </div>
            )}
        </div>
    )
}