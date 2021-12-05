import React, { useEffect } from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import Map from './components/Map/Map.js';
import memories from './images/Montana.png';
import useStyles from './styles.js'

function LeaderBoard(){
    const classes = useStyles();
    return(
        <div>
            <h1 align="center">THIS IS THE LeaderBoard PAGE</h1>
        <Container maxWidth="md">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Montana Quiz </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Container align="center">
            </Container>
            <Container align="center">
                <div id="formWraper">
                    <Form />
                </div>
            </Container>
            <Container align="center">
                <div id="postWraper">
                    <Posts />
                </div>
            </Container>
            
        </Container>

        
        </div>
    );
}

export default LeaderBoard;
