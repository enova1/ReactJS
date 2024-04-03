// main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employee from "./Employee";
import WeatherPage from "./WeatherPage";
import IndexPage from "./IndexPage"; // Correct casing for import
import "./index.css";
import Layout from "./Layout"; // Import your layout component

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Layout> {/* Wrap Routes with Layout */}
            <Routes>
                    <Route path="/" element={<IndexPage />} /> 
                    <Route path="/weather" element={<WeatherPage />} />
                    <Route path="/Employee" element={<Employee />} />
                    {/* Add more routes here for additional pages */}
                </Routes>
            </Layout>
        </Router>
    </React.StrictMode>
);
