import BackButton from "./goBackButton1";

export default function HeaderNav({header}){
    return(
        <div className="navBack fixed top-0 left-0 right-0 z-1000 mt-12 p-4 flex items-center">
            <BackButton/>
            {header && <div className="text-center flex-1">{header}</div>}
        </div>
    )
}