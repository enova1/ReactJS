// src/Layout.jsx

import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
    return (
        <div>
            <header>
                <h1>My React Example Site!</h1>
                <Link to="/">Home</Link> --
                <Link to="/weather">Weather --
                    <Link to="/employee">Employee</Link></Link>
            </header>
            <main>
                {children}
            </main>
            <footer style={{ textAlign: 'center', marginTop: '20px' }}>
                <p>&copy; {new Date().getFullYear()} Chris Tate. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Layout;