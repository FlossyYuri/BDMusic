import { BiBriefcaseAlt2 } from "react-icons/bi"
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFileProtect,
    AiOutlineClose,
    AiOutlineAppstore,
    AiOutlineSend,
} from "react-icons/ai"
import { ReactNode, useState } from "react"
import { ThemeMode } from "./ThemeMode"

type Props = {
    link: string
    icon: ReactNode
    title: string
    setBottom: (text: string) => void
}

function NavLink({ link, icon, title, setBottom }: Props) {
    return (
        <a href={`#${link}`} onClick={() => setBottom("-bottom-52")}>
            <li className="flex flex-col md:flex-row items-center gap-2">
                {icon}
                {title}
            </li>
        </a>
    )
}

export function Header() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [bottom, setBottom] = useState("-bottom-52")

    return (
        <header
            className="w-full md:h-8 fixed bottom-0 left-0 z-50
                md:top-0 "
        >
            <nav
                className={`
                fixed ${bottom} left-0 w-full py-16 pl-6 shadow
                bg-white dark:bg-gray-900 md:dark:bg-black transition-all duration-300
                rounded-t-3xl md:rounded-none md:static md:container md:mx-auto
                flex flex-row justify-between md:py-4 md-pl-0
                items-end font-pop`}
            >
                <span
                    className={`${
                        bottom === "bottom-0"
                            ? ""
                            : "block absolute top-4 left-4"
                    }hidden md:static md:block dark:text-gray-400 hover:text-purple-900
                    text-gray-500 font-bold`}
                >
                    Bernardo Júnior
                </span>
                <div>
                    <ul
                        className="
                            grid grid-rows-2 grid-flow-col
                            md:flex gap-14 md:gap-6 font-semibold"
                    >
                        <NavLink
                            link="home"
                            icon={<AiOutlineHome />}
                            title="Home"
                            setBottom={setBottom}
                        />
                        <NavLink
                            link="about"
                            icon={<AiOutlineUser />}
                            setBottom={setBottom}
                            title="Sobre"
                        />
                        <NavLink
                            link="skills"
                            icon={<AiOutlineFileProtect />}
                            setBottom={setBottom}
                            title="Skills"
                        />
                        <NavLink
                            link="portifolio"
                            icon={<BiBriefcaseAlt2 />}
                            setBottom={setBottom}
                            title="Portfólio"
                        />
                        <NavLink
                            link="contact"
                            icon={<AiOutlineSend />}
                            setBottom={setBottom}
                            title="Contacto"
                        />

                        <ThemeMode />
                    </ul>
                </div>
            </nav>
            {bottom === "bottom-0" ? (
                <button
                    className="md:hidden text-3xl absolute bottom-4 right-4"
                    type="button"
                    onClick={() => setBottom("-bottom-52")}
                >
                    <AiOutlineClose />
                </button>
            ) : (
                <button
                    className="md:hidden font-bold text-3xl absolute bottom-4 right-4"
                    type="button"
                    onClick={() => setBottom("bottom-0")}
                >
                    <AiOutlineAppstore />
                </button>
            )}
        </header>
    )
}
