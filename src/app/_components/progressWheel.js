'use client'

import { motion, useMotionValue, useTransform, animate } from 'motion/react'
import { useEffect } from 'react'
import { acLime, acOrange, acYellow } from './constants'

const orange = acOrange
const yellow = acYellow
const lime = acLime
const r = 30
const CIRCUMFERENCE = 2 * Math.PI * r

function clamp(value, min, max){ 
    if (value < min) return min 
    if (value > max) return max 
    return value
}

export default function ProgressWheel1({ resultNumber = 0, maxResult = 100}) {
    const clampMax = Math.max(1, maxResult)
    const value = clamp(resultNumber, 0, clampMax) / clampMax * 100
    const progress = useMotionValue(0)

    useEffect(() => {
        const controls = animate(progress, value, {
            duration: 1,
            ease: 'easeOut',
        })
        return controls.stop
    }, [value])

    const strokeDashoffset = useTransform(
        progress,
        v => CIRCUMFERENCE - (v / 100) * CIRCUMFERENCE
    )

    const progressWithPercent = useTransform(
        progress,
        v => `${Math.round(v)}%`
    )

    const animatedColor = useTransform(
        progress,
        [0, 40, 70, 100],
        [orange, yellow, lime, lime]
    )

    return (
        <div className="relative size-full">
            <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r={r}
                    fill="none"
                    stroke="#F2F2F2"
                    strokeWidth={12}
                />
                <motion.circle
                    cx="50"
                    cy="50"
                    r={r}
                    fill="none"
                    strokeWidth={12}
                    strokeDasharray={CIRCUMFERENCE}
                    // strokeLinecap="round"
                    style={{
                        stroke: animatedColor,
                        strokeDashoffset,
                    }}
                />
            </svg>
            <div className="absolute inset-0 grid place-items-center">
                <motion.span
                    className="text-[28px] 3xs:text-[32px] 2xs:text-[46px] font-sf-pro-text transition-all"
                    style={{ color: animatedColor }}
                >
                    {progressWithPercent}
                </motion.span>
            </div>
        </div>
    )
}