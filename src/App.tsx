import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"
import { ThemeProvider } from "./context/ThemeContext"
import Dashboard from "./pages/Dashboard"
import Discs from "./pages/Discs"
import Formats from "./pages/Formats"
import Instruments from "./pages/Instruments"
import Musics from "./pages/Music"
import Musicians from "./pages/Musician"

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Sidebar />
                <main className="ml-72 min-h-screen">
                    <div className="ml-72 min-h-screen z-10 fixed left-0 w-full px-8 pt-8">
                        <Switch>
                            <Route path="/dashboard">
                                <Dashboard />
                            </Route>
                            <Route path="/musics">
                                <Musics />
                            </Route>
                            <Route path="/musicians">
                                <Musicians />
                            </Route>
                            <Route path="/discs">
                                <Discs />
                            </Route>
                            <Route path="/instruments">
                                <Instruments />
                            </Route>
                            <Route path="/formats">
                                <Formats />
                            </Route>
                            <Route exact path="/">
                                <Redirect to="/dashboard" />
                            </Route>
                        </Switch>
                    </div>
                </main>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
