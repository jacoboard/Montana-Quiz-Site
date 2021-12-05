import { Container } from '@material-ui/core';
import FindCounties from '../Map/Counties/findCounties';

function FindCounty(){
    return(
        <div>
            <div id='GameInstructions'>
                <h1>Guess the County!</h1>
                <h2>Click on the correct county!</h2>
                <h2>Click 'Start' to begin!</h2>
            </div>
            <Container maxWidth="md">
                <Container align="center">
                    <div id="Map_Div">
                        <FindCounties />
                    </div>
                </Container>
            </Container>
        </div>
    );
}

export default FindCounty;
