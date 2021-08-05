import { AnchorHTMLAttributes, ReactNode } from "react"

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    active?: boolean
    children: ReactNode
}

// box-shadow: 0px 4px 16px rgba(112, 188, 206, 0.3);

export function ButtonSidebar({ active, children, ...props }: AnchorProps) {
    const shadow = active ? "blue-shadow" : ""
    return (
        <a {...props} className={`flex ${shadow}`}>
            {active ? (
                <div className="w-1.5 h-9 my-auto bg-blue-300 rounded-tr-lg rounded-br-lg" />
            ) : null}

            <button
                type="button"
                className={` flex flex-1
                items-center justify-center px-2 py-3 gap-4
                filter hover:brightness-90 rounded-lg
                text-gray-700 border-0`}
            >
                {children}
            </button>
        </a>
    )
}
