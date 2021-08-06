export const resolveNestedAtribute: (obj: any, path: any) => any = (
    obj,
    path
) => {
    return path.split(".").reduce((o: any, k: any) => {
        return o && o[k]
    }, obj)
}

export const dropdownToValueObject = (items: any) =>
    items.reduce(
        (prev: any, item: any) => ({
            ...prev,
            [item.value]: { label: item.label },
        }),
        {}
    )

export const timeSanitizer = (time: string | number) =>
    time <= 9 ? `0${time}` : time
