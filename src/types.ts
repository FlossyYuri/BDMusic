export interface Header {
    key: string
    label: string
    component: (item: any) => JSX.Element
}
