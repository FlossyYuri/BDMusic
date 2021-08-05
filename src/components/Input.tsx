type Props = {
    label: string
    placeholder: string
    required?: boolean
    value: string
    isEmail?: boolean
    setValue: (value: string) => void
}

export function Input({
    label,
    placeholder,
    isEmail = false,
    required = false,
    value,
    setValue,
}: Props) {
    return (
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
                className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                htmlFor={`grid-${label}`}
            >
                {label}
                <input
                    className="block w-full bg-transparent text-gray-700 text-xs
                    md:text-sm border-b focus:border-purple-500 py-3 px-4
                    leading-tight focus:outline-none"
                    id={`grid-${label}`}
                    type={isEmail ? "email" : "text"}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </label>
        </div>
    )
}
