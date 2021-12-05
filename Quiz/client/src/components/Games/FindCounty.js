import { Container, AppBar, Typography } from '@material-ui/core';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import FindCounties from '../Map/Counties/findCounties';
import useStyles from './styles.js'

function FindCounty(){
    const classes = useStyles();
    return(
        <div>
            <div id='GameInstructions'>
            <h1>Choose The County</h1>
            <h2>Ready to test your skills?</h2>
            <h3>Here you can click on the map where you think the county is</h3>
            <h3>Click Start when ready to begin!</h3>
            </div>
                <Container maxWidth="md">
                    <Container align="center">
                        <div id="Map_Div">
                            <FindCounties />
                        </div>
                    </Container>
                    <Container align="center">
                        <div id="formWraper">
                        </div>
                    </Container>
                </Container>
        </div>
    );
}

export default FindCounty;
