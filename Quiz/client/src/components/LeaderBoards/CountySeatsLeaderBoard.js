import { Container, AppBar, Typography } from '@material-ui/core';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import Map from '../Map/Map.js';
import useStyles from './styles.js'

function CountySeatsLeaderBoard(){
    const classes = useStyles();
    return(
        <div>
            <div id='LeaderBoardDiv'>
            <h1>County Seats Game LeaderBoard</h1>
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

export default CountySeatsLeaderBoard;
