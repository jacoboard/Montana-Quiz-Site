import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';

import useStyles from './styles.js'
import './components/Map/App.css'
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';
import About from './components/About/About.js';
import Game2LeaderBoard from './components/LeaderBoards/Game2'
import CountySelectionLeaderBoard from './components/LeaderBoards/CountySelectionLeaderBoard'
import Game3LeaderBoard from './components/LeaderBoards/Game3'
import Game2 from './components/Games/Game2'
import CountySelection from './components/Games/CountySelector'
import Game3 from './components/Games/Game3'


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
                            <li> <Link to="/game2">Game 2</Link></li>
                            <li> <Link to="/countySelection">County Selection</Link></li>
                            <li> <Link to="/game3">Game 3</Link></li>
                        </div>     
                    </ul>
                    <ul class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Leader Boards</a>
                        <div class="dropdown-content">
                            <li> <Link to="/game2LeaderBoard">Game 2</Link></li>
                            <li> <Link to="/countySelectionLeaderBoard">County Selection</Link></li>
                            <li> <Link to="/game3LeaderBoard">Game 3</Link></li>
                        </div>     
                    </ul>
                    
                </ul>
            </div>
        
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/auth" element={<Auth/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/game2" element={<Game2/>} />
                <Route path="/game3" element={<Game3/>} />
                <Route path="/countySelection" element={<CountySelection/>} />
                <Route path="/game2LeaderBoard" element={<Game2LeaderBoard/>} />
                <Route path="/countySelectionLeaderBoard" element={<CountySelectionLeaderBoard/>} />
                <Route path="/game3LeaderBoard" element={<Game3LeaderBoard/>} />
            </Routes>
        </Container>

        </div>

       
        
    </BrowserRouter>
    );
}

export default App;



{/* <div class="dropdown">
  <button
    class="btn btn-primary dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}