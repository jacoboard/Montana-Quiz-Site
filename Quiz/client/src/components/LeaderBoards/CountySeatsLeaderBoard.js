import { Container, AppBar, Typography } from '@material-ui/core';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import Map from '../Map/Map.js';
import useStyles from './styles.js'

function CountySelectorLeaderBoard(){
    const classes = useStyles();
    return(
        <div>
            <h1>THIS IS THE CountySelectorLeaderBoard PAGE</h1>
                <Container maxWidth="md">
                    <Container align="center">
                            <Map />
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

export default CountySelectorLeaderBoard;
