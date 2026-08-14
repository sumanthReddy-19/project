import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Results from "./pages/Results";

function App() {
    return (
        <BrowserRouter>

            <div className="app-layout">

                <Sidebar />

                <div className="main-section">

                    <Navbar />

                    <main className="content-area">

                        <Routes>

                            <Route
                                path="/"
                                element={<Dashboard />}
                            />

                            <Route
                                path="/students"
                                element={<Students />}
                            />

                            <Route
                                path="/courses"
                                element={<Courses />}
                            />

                            <Route
                                path="/assignments"
                                element={<Assignments />}
                            />

                            <Route
                                path="/results"
                                element={<Results />}
                            />

                        </Routes>

                    </main>

                </div>

            </div>

        </BrowserRouter>
    );
}

export default App;