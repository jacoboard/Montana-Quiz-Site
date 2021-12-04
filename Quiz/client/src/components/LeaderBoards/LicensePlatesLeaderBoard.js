import { Container, AppBar, Typography } from '@material-ui/core';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import LincensePlate from '../Map/Counties/licensePlate';
import useStyles from './styles.js'

function LicensePlatesLeaderBoard(){
    const classes = useStyles();
    return(
        <div>
            <h1>THIS IS THE ABOUT PAGE</h1>
                <Container maxWidth="md">
                    <Container align="center">
                        <div id="Map_Div">
                            <LincensePlate />
                        </div>
                        <div id="belowMap"> This is below map</div>
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

export default LicensePlatesLeaderBoard;