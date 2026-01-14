import Button1 from "@/app/_components/buttons1";
import HeaderNav from "@/app/_components/headerNav";
import ProgressWheel1 from "@/app/_components/progressWheel";

export default function resultTestPage1() {
  return (
    <div className="resultTestPage1 h-full w-full">
        <HeaderNav hasBackButton={false} link={"/"} header={"Результаты"}/>
        <div className="px-4 pt-20 pb-40 gap-10 flex-col flex-center h-full">
          <div className="aspect-square w-full max-w-[400px]">
            <ProgressWheel1 resultNumber={109} maxResult={178}/>
          </div>
          <ResultDescription resultNumber={109} maxResult={178}/>
          <div className="fixed right-4 left-4 bottom-5 gap-3 flex flex-col">
            <Button1 link={"/"} variant={"default"}>Сохранить и выйти</Button1>
            <Button1 link={"#"} variant={"border"}>пройти еще раз</Button1>
          </div>
        </div>
    </div>
  )
}

function ResultDescription({ resultNumber = 0, maxResult = 100 }) {
  function clamp(value, min, max) {
    if (value < min) return min
    if (value > max) return max
    return value
  }
  const clampMax = Math.max(1, maxResult)
  const value = clamp(resultNumber, 0, clampMax) / clampMax * 100
  const rules = [
    { min: 90, h: 'Почти идеально!', d: 'Тема освоена на отлично! Продолжай в том же духе!' },
    { min: 70, h: 'Отлично!', d: 'Тема изучена уверенно. Хороший результат!' },
    { min: 50, h: 'Хорошо!', d: 'Тема усвоена на хорошем уровне. Отличная работа!' },
    { min: 30, h: 'Неплохо!', d: 'Тема изучена в общих чертах. Продолжай углубляться!' },
    { min: 0, h: 'Не беда!', d: 'Знакомство с темой только началось. Попробуй ещё раз!' },
  ]
  // function checkRules(rule) {
  //   return rule.min <= value;
  // }
  // const { h: heading, d: description } = rules.find(checkRules)
  const { h: heading, d: description } = rules.find(rule => rule.min <= value)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//   let heading = ''
//   let description = ''
//   switch (true) {
//     case value >= 90:
//       heading = 'Почти идеально!'
//       description = 'Тема освоена на отлично! Продолжай в том же духе!'
//       break;
//     case value >= 70:
//       heading = 'Отлично!'
//       description = 'Тема изучена уверенно. Хороший результат!'
//       break;
//     case value >= 50:
//       heading = 'Хорошо!'
//       description = 'Тема усвоена на хорошем уровне. Отличная работа!'
//       break;
//     case value >= 30:
//       heading = 'Неплохо!'
//       description = 'Тема изучена в общих чертах. Продолжай углубляться!'
//       break;
//     case value >= 0:
//       heading = 'Не беда!'
//       description = 'Знакомство с темой только началось. Попробуй ещё раз!'
//       break;
//     default:
//       heading = 'Хорошая работа'
//       description = 'Вы прошли тест'
//   }
  return (
    <div className="w-full flex flex-col gap-1">
      <div className="w-full wrap-break-word font-h3">{heading}</div>
      <div className="w-full wrap-break-word font-main-text text-gray-400">{description}</div>
    </div>
  )
}