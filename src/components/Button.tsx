import React, { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
    isAnimated?: boolean
}

export function Button({
    isOutlined = false,
    isAnimated = false,
    ...props
}: ButtonProps) {
    const outline = isOutlined
        ? "bg-white dark:bg-black border border-purple-400 text-purple-600 cursor-default"
        : "bg-purple-600 text-white border-0"
    const animated = isAnimated ? "hover:animate-bounce" : ""
    return (
        <button
            type="button"
            className={` flex
            items-center justify-center  px-3 py-3 gap-2
            transition duration-300 filter hover:brightness-90 rounded-lg
            ${animated} ${outline}`}
            {...props}
        />
    )
}
