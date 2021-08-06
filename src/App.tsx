import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"
import { ThemeProvider } from "./context/ThemeContext"
import { Home } from "./pages/Home"

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Sidebar />
                <main className="ml-72 min-h-screen">
                    <div className="ml-72 min-h-screen z-10 fixed left-0 w-full">
                        <Switch>
                            <Route path="/">
                                <Home />
                            </Route>
                            <Route path="/musics">
                                <Home />
                            </Route>
                            <Route path="/musicians">
                                <Home />
                            </Route>
                            <Route path="/discs">
                                <Home />
                            </Route>
                            <Route path="/instruments">
                                <Home />
                            </Route>
                            <Route path="/formats">
                                <Home />
                            </Route>
                            <Route exact path="/">
                                <Redirect to="/" />
                            </Route>
                        </Switch>
                    </div>
                </main>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
