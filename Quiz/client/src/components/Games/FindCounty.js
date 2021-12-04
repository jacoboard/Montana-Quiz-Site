import { Container, AppBar, Typography } from '@material-ui/core';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import FindCounties from '../Map/Counties/findCounties';
import useStyles from './styles.js'

function FindCounty(){
    const classes = useStyles();
    return(
        <div>
            <h1>THIS IS THE ABOUT PAGE</h1>
                <Container maxWidth="md">
                    <Container align="center">
                        <div id="Map_Div">
                            <FindCounties />
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

export default FindCounty;
