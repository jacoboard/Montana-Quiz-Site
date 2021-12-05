import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from '../Posts/Posts.js';
import { getPosts } from '../../actions/posts';

function CountySeatsLeaderBoard(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <div>
            <div id='LeaderBoardDiv'>
                <h1>County Seats LeaderBoard</h1>
            </div>
            <Container maxWidth="md">
                <Container align="center">
                    <div id="postWraper">
                        <Posts num={1} />
                    </div>
                </Container>
            </Container>
        </div>
    );
}

export default CountySeatsLeaderBoard;
