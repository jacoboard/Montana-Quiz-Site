import { Container } from '@material-ui/core';
import Posts from '../Posts/Posts.js';

function FindCountyLeaderBoard(){
    return(
        <div>
        <div id='LeaderBoardDiv'>
        <h1>County Selection Game LeaderBoard</h1>
        </div>
            <Container maxWidth="md">
                <Container align="center">
                    <div id="postWraper">
                        <Posts />
                    </div>
                </Container>
            </Container>
    </div>
    );
}

export default FindCountyLeaderBoard;