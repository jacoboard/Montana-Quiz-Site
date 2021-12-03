import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import useStyles from './styles.js'
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';
import About from './components/About/About.js';

const App = () => (
    <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar />
            <div id="NavBar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/leaderBoard">Leader Board</Link></li>
                    <li><Link to="/">Game</Link></li>
                    
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/auth" element={<Auth/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </Container>
        <div id="footer">This is footer </div>
    </BrowserRouter>
);

export default App;