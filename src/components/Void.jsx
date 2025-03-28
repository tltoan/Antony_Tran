import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import "./styles/Void.css";

const Void = () => {
    return (
        <div className='void'>
            <Navbar />
            <h1>Uh oh</h1>
            <p>This product is not ready for delivery yet.</p>
            <Link to="/projects">Return back to projects</Link>
        </div>
    );
};

export default Void;