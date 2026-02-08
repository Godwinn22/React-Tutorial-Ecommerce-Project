import React from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import "./NotFoundPage.css";

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <div className="not-found">
                <h1>404 Error Page</h1>
                <Link to="/" className="notfound-home">Go to Home Page</Link>
            </div>
        </>
    );
};

export default NotFoundPage;
