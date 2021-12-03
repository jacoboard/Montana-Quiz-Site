import React, { useEffect } from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import About from './About'
import Home from './Home';
import {Route, Link } from "react-router-dom"

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import Map from './components/Map/Map.js';
import memories from './images/Montana.png';
import useStyles from './styles.js'

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <div className="App">
            <Route exact path="/" component={Home} />    
            <Route exact path="/about" component={About} />   
        
        </div>
            
    );
    
}

export default App; 