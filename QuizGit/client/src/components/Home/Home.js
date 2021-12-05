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
            <Container align="center">
                <Map />
            </Container>
        </div>
    );
};

export default Home;