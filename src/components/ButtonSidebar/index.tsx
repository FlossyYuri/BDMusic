import { AnchorHTMLAttributes, ReactNode } from "react"
import { NavLink } from "react-router-dom"

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    active?: boolean
    to: string
    children: ReactNode
}

// box-shadow: 0px 4px 16px rgba(112, 188, 206, 0.3);

export function ButtonSidebar({ active, children, to, ...props }: AnchorProps) {
    return (
        <NavLink to={to} {...props} className="navlink flex py-3 pl-8">
            {children}
        </NavLink>
    )
}
