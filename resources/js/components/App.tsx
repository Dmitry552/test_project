import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";

import '../styles/app.scss'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<Navigate to="/" />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
