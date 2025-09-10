import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./Pages/projects.jsx";
import Contact from "./Pages/contacts.jsx";
import Resume from "./Pages/resume.jsx";
import Loader from "./components/Loader.jsx"; // 👈 import loader

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <>
            <Loader /> {/* 👈 Show loader first */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/Profile-links" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    </StrictMode>
);
