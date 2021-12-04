import { Container, AppBar, Typography } from '@material-ui/core';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import LincensePlate from '../Map/Counties/licensePlate';
import useStyles from './styles.js'

function LicensePlatesLeaderBoard(){
    const classes = useStyles();
    return(
        <div>
        <div id='LeaderBoardDiv'>
        <h1>License Plates Game LeaderBoard</h1>
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

export default LicensePlatesLeaderBoard;