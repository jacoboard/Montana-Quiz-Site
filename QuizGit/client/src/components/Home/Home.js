import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Map from '../Map/Map.js';
import { getPosts } from '../../actions/posts';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <div>
            <div id="TopContent">
                <h1>Welcome To The Montana Quiz Site!</h1>
                <h2>Here you can learn about the great state of Montana</h2>
                <h2>Currently the county's geographical location, county seat location, and the licence plate numbers are online</h2>
                <h2>Click on a county to start learning!</h2>
            </div>
            <Container align="center">
                <Map />
            </Container>
        </div>
    );
};

export default Home;