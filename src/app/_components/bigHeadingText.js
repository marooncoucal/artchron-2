export default function BigHeaderTest1({children, color}) {
  return (
    <p className="text-[32px] font-bold" style={{color: color ?? "#000"}}>
      {children}
    </p>
  )
}