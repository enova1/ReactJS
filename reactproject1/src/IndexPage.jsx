

// IndexPage.jsx

import react from "react";
import { Link } from "react-router-dom";

function indexPage() {
    return (
        <div>
            <p>This is an example React site.</p>
            <p>
                <img src="/Images/React.png" alt="ReactJS" style={{ maxWidth: '400px' }} />
            </p>
        </div>
    );
}

export default indexPage;
