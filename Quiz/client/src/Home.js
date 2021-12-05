import React, { useEffect } from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import Map from './components/Map/Map.js';
import memories from './images/Montana.png';
import useStyles from './styles.js'


function Home(){
    const classes = useStyles();
    let playerscore = 50;
    let playersubmission = "John";
    console.log(score);
    for(let i = 0; i < 31; i++){
        console.log(i);
    }

    return(
        <Container maxWidth="md">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Montana Quiz </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Container align="center">
                    <Map />
                    <div id="belowMap"> This is below map</div>
            </Container>
        </Container>
        
    );
}

export default Home;
