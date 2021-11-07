import React, { useEffect } from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import memories from './images/Montana.png';
import useStyles from './styles.js'

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <Container maxWidth="md">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Montana Quiz</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
                <Container align="center">
                        <Form />
                </Container>
                <Container align="center">
                        <Posts />
                </Container>
        </Container>
    )
}

export default App;