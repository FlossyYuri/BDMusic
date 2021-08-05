import { ReactNode } from "react"

type Props = {
    title: string
    icon: ReactNode
    children: ReactNode
}

export function Card({ title, icon, children }: Props) {
    return (
        <div
            className="flex-grow rounded w-9/12 md:w-72 hover:bg-purple-200  bg-purple-100"
            style={{
                clipPath:
                    "polygon(0px 15px, 15px 0px, 100% 0px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0px 100%, 0px 15px)",
            }}
        >
            <h3
                className="flex font-bold justify-between items-center w-full
                px-4 py-2 text-sm md:text-lg font-medium text-left text-purple-900
                bg-purple-200 rounded-lg hover:bg-purple-300
                focus:outline-none focus-visible:ring focus-visible:ring-purple-500
                focus-visible:ring-opacity-75"
            >
                {title}
                {icon}
            </h3>
            <ul className="p-4 flex flex-col gap-1 dark:text-purple-900">
                {children}
            </ul>
        </div>
    )
}
