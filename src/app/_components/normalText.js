export default function NormalTextTest1({children, color, textAlign}) {
  return (
    <div className="">
        <p className="text-base" style={{color: color ?? "#bbb", textAlign: textAlign ?? "left"}}>
            {children}
        </p>
    </div>
  )
}