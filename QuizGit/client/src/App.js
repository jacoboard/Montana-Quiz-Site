import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './components/Map/App.css'
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';
import About from './components/About/About.js';
import LicensePlatesLeaderBoard from './components/LeaderBoards/LicensePlatesLeaderBoard'
import CountySeatsLeaderBoard from './components/LeaderBoards/CountySeatsLeaderBoard'
import FindCountyLeaderBoard from './components/LeaderBoards/FindCountyLeaderBoard'
import LicensePlates from './components/Games/LicensePlates'
import CountySeats from './components/Games/CountySeats'
import FindCounty from './components/Games/FindCounty';


function App() {
    return(
        <BrowserRouter>
            <div id="mainContent">
                <Container maxWidth="lg">
                    <Navbar />
                    <div id="NavBar">
                        <ul id="NavBarUL">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <ul class="dropdown">
                                <a href="javascript:void(0)" class="dropbtn">Games</a>
                                <div class="dropdown-content">
                                    <li> <Link to="/LicensePlates">License Plates</Link></li>
                                    <li> <Link to="/findCounty">County Selection</Link></li>
                                    <li> <Link to="/countySeats">County Seats</Link></li>
                                </div>     
                            </ul>
                            <ul class="dropdown">
                                <a href="javascript:void(0)" class="dropbtn">Leader Boards</a>
                                <div class="dropdown-content">
                                    <li> <Link to="/LicensePlatesLeaderBoard">License Plates</Link></li>
                                    <li> <Link to="/FindCountyLeaderBoard">County Selection</Link></li>
                                    <li> <Link to="/CountySeatsLeaderBoard">County Seats</Link></li>
                                </div>     
                            </ul>
                            
                        </ul>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/auth" element={<Auth/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/findCounty" element={<FindCounty/>} />
                        <Route path="/LicensePlates" element={<LicensePlates/>} />
                        <Route path="/countySeats" element={<CountySeats/>} />
                        <Route path="/CountySeatsLeaderBoard" element={<CountySeatsLeaderBoard/>} />
                        <Route path="/FindCountyLeaderBoard" element={<FindCountyLeaderBoard/>} />
                        <Route path="/licensePlatesLeaderBoard" element={<LicensePlatesLeaderBoard/>} />
                    </Routes>
                </Container>
            </div>
        </BrowserRouter>
    );
}

export default App;