import { useContext } from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import { ThemeContext } from "../context/ThemeContext"

export function ThemeMode() {
    const { theme, setTheme } = useContext(ThemeContext)

    // function setDarkMode(){}
    return (
        <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
    )
}
