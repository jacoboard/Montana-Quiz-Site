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
                <Map />
            </Container>
            <Container align="center">
                <Form />
            </Container>
            <Container align="center">
                <Posts />
            </Container>
        </div>
    );
};

export default Home;