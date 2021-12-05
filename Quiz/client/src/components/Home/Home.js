import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import Map from '../Map/Map.js';
import { getPosts } from '../../actions/posts';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <div>
            <Container align="center">
                <h1>Welcome to the Montana Quiz Site!</h1>
                <h2>Here you can learn via an interactive map what the county seats and license plate numbers are in montana counties, as well as where the counties are geographicaly</h2>
                <h3>Click on a county to get started!</h3>
                <Map />
            </Container>
            
        </div>
    );
};

export default Home;