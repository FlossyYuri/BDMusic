import React from "react"
import { Header } from "../types"
import { resolveNestedAtribute } from "../utils"
import Container from "./Container"
import "./style/table.css"

interface TableProps {
    header: Header[]
    items: any[]
    menuItems: (item: any) => any[]
}
const CustomTable = ({
    header,
    items = [],
    menuItems = () => [],
}: TableProps) => {
    return (
        <table className="table">
            <thead>
                <tr className="cor">
                    {header.map((head) => (
                        <th key={head.key}>{head.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <Container key={index} menuItems={menuItems(item)}>
                        {header.map((head) => (
                            <td key={head.key}>
                                {head.component
                                    ? head.component(item)
                                    : resolveNestedAtribute(item, head.key)}
                            </td>
                        ))}
                    </Container>
                ))}
            </tbody>
        </table>
    )
}
export default CustomTable
