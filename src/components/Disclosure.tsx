import { Disclosure } from "@headlessui/react"
import { ReactNode } from "react"
import { BsBoxArrowInDown } from "react-icons/bs"

type Props = {
    title: string
    subTitle: string
    children: ReactNode
}

export function Disclosur({ title, subTitle, children }: Props) {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{title}</span>
                        <BsBoxArrowInDown
                            className={`${
                                open ? "transform rotate-180" : ""
                            } w-5 h-5 text-purple-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel
                        className="px-4 py-2 text-sm
                            dark:text-gray-300 text-gray-500"
                    >
                        <h4 className=" font-medium mb-2">{subTitle}</h4>
                        {children}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
