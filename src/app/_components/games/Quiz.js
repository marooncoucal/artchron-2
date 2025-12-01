
"use client"

import Image from "next/image";
import { useState } from "react"

const initialQuests = [
    {
        type: "group",
        text: "Вопрос 1",
        image: "/AH_1.png",
        subquestions: [
            {
                label: "Автор",
                choices: ["Виктор Васнецов", "Иероним Босх"],
                correct: 1
            },
            {
                label: "Название",
                choices: ["Сад земных наслаждений", "Крик"],
                correct: 0
            },
            {
                label: "Дата",
                choices: ["1505", "1980"],
                correct: 0
            }
        ]
    },
    {
        type: "group",
        text: "Вопрос 2",
        image: "/AH_2.png",
        subquestions: [
            {
                label: "Автор",
                choices: ["Малевич", "Эдвард Мунк"],
                correct: 1
            },
            {
                label: "Название",
                choices: ["Крик", "Ночной дозор"],
                correct: 0
            },
            {
                label: "Дата",
                choices: ["1893", "1920"],
                correct: 0
            }
        ]
    }
];

export default function Quiz() {
    const [quests, setQuests] = useState(
        initialQuests.map(q => ({
            ...q,
            subquestions: q.subquestions.map(sq => ({ ...sq, selected: null }))
        }))
    );

    const [questIndex, setQuestIndex] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);

    const quest = quests[questIndex];

    function next() {
        setAnswered(false);
        setIsCorrect(null);

        if (questIndex < quests.length - 1) {
            setQuestIndex(questIndex + 1);
        } else {
            const retry = confirm("Вы завершили тест. Хотите пройти ещё раз?");
            if (retry) {
                const reset = initialQuests.map(q => ({
                    ...q,
                    subquestions: q.subquestions.map(sq => ({ ...sq, selected: null }))
                }));
                setQuests(reset);
                setQuestIndex(0);
            }
        }
    }

    function check() {
        const allCorrect = quest.subquestions.every(sq => sq.selected === sq.correct);
        setIsCorrect(allCorrect);
        setAnswered(true);
    }

    return (
        <div className="text-black w-full max-w-md mx-auto px-4 py-6 border border-black relative overflow-hidden">
            <div className="mb-5">
                <div className="h-2 w-full bg-gray-300 rounded overflow-hidden mb-4">
                    <div
                        className="h-full bg-black transition-all duration-300"
                        style={{ width: `${((questIndex) / quests.length) * 100}%` }}
                    />
                </div>
                <div className="text-xl font-bold leading-tight">
                    <p>{quest.text}</p>
                </div>
            </div>

            {quest.image && (
                <Image
                    src={quest.image}
                    alt="Изображение к вопросу"
                    width={720}
                    height={720}
                    className="w-full h-auto mb-6"
                    priority
                />
            )}


<div className="relative mb-[25px]">
                <div className={`${answered ? "opacity-40" : "opacity-100"} transition-opacity duration-200`}>
                    {quest.subquestions.map((sq, sqIndex) => (
                        <div key={sqIndex} className="mb-4 w-full">
                            <div className="mb-2 font-semibold">{sq.label}</div>
                            <div className="flex flex-row gap-4 w-full">
                                {sq.choices.map((choice, index) => (
                                    <div
                                        key={index}
                                        className={`border rounded cursor-pointer select-none text-left flex items-center justify-start px-4
                                            ${sq.selected === index ? "bg-[#cbcbcb]" : ""}
                                            ${answered ? "pointer-events-none" : ""}`}
                                        style={{ width: "50%", height: "60px" }}
                                        onClick={() => {
                                            if (answered) return;
                                            const updatedQuests = [...quests];
                                            updatedQuests[questIndex].subquestions[sqIndex].selected = index;
                                            setQuests(updatedQuests);
                                        }}
                                    >
                                        {choice}
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative min-h-[30px] flex flex-col justify-end ">
                <div
                    className={`absolute bottom-[40px] left-0 right-0 mx-auto w-full max-w-[100%] transition-transform duration-500 ease-in-out
                        ${answered ? "translate-y-0" : "translate-y-[150%]"} bg-white rounded-t-xl shadow-md px-4 pt-3 pb-1 z-20`}
                    style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
                >
                    <div className={`text-lg font-semibold ${isCorrect ? "text-green-600" : "text-orange-500"}`}>
                        {isCorrect ? "Верно!" : "Неверно. Правильные ответы:"}
                    </div>
                    {!isCorrect && (
                        <ul className=" text-sm text-left">
                            {quest.subquestions.map((sq, i) => (
                                <li key={i}>
                                    <strong>{sq.label}:</strong> {sq.choices[sq.correct]}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>


<div className="flex justify-center">
                    {!answered ? (
                        <div
                            className={`border text-center border-black bg-black text-white rounded p-2 w-full max-w-[100%] cursor-pointer
                                ${quest.subquestions.every(sq => sq.selected !== null) ? "hover:bg-gray-800" : "opacity-50 cursor-not-allowed"}`}
                            onClick={() => {
                                if (quest.subquestions.every(sq => sq.selected !== null)) check();
                            }}
                        >
                            Проверить
                        </div>
                    ) : (
                        <div
                            className={`rounded-t-none rounded-b p-2 w-full max-w-[100%] text-center cursor-pointer text-white font-semibold transition-colors
                                ${isCorrect ? "bg-green-600 hover:bg-green-700" : "bg-orange-500 hover:bg-orange-600"}`}
                            onClick={next}
                        >
                            {questIndex < quests.length - 1 ? "Следующий вопрос" : "Завершить"}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}