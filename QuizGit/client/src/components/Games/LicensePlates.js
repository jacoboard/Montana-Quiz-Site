import { Container, AppBar, Typography } from '@material-ui/core';
import Form from '../Form/Form.js';
import LincensePlate from '../Map/Counties/licensePlate';
import useStyles from './styles.js'

function LicensePlates(){
    const classes = useStyles();
    return(
        <div>
            <div id='GameInstructions'>
            <h1>License Plates Finding</h1>
            <h2>Ready to test your skills?</h2>
            <h2>This is a test of if you know that License Plates number of a county</h2>
            <h2>Press start to begin or click on the form to begin!</h2>
            </div>
                <Container maxWidth="md">
                    <Container align="center">
                        <div id="Map_Div">
                            <LincensePlate />
                        </div>
                    </Container>
                </Container>
        </div>
    );
}

export default LicensePlates;