import React from "react"
import { Sidebar } from "./components/Sidebar"
import { ThemeProvider } from "./context/ThemeContext"

import { Home } from "./pages/Home"

function App() {
    return (
        <ThemeProvider>
            <div className="flex ">
                <Sidebar />
                <main className="flex-1">
                    <Home />
                </main>
            </div>
        </ThemeProvider>
    )
}

export default App
