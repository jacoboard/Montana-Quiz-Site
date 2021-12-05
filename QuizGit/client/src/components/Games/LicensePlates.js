import { Container } from '@material-ui/core';
import LincensePlate from '../Map/Counties/licensePlate';

function LicensePlates(){
    return(
        <div>
            <div id='GameInstructions'>
                <h1>Guess the Plate Number!</h1>
                <h2>Enter your guessed number below.</h2>
                <h2>Press 'Start' to begin!</h2>
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