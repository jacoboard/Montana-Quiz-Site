import { Container, AppBar, Typography } from '@material-ui/core';
import Posts from '../../components/Posts/Posts.js';
import Form from '../../components/Form/Form.js';
import Map from '../../components/Map/Map.js';
import useStyles from './styles.js'

function About(){
    const classes = useStyles();
    return(
        <div>
            <h1>THIS IS THE ABOUT PAGE</h1>
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
                        <div id="footer"> This is the footer</div>
                    </Container>
                </Container>
        </div>
    );
}

export default About;
