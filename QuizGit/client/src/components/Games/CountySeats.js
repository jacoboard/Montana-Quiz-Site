import { Container } from '@material-ui/core';
import Seats from '../Map/Counties/seats';

function CountySeats(){
    return(
        <div>
            <div id='GameInstructions'>
                <h1>Guess the County Seats!</h1>
                <h2>Do you know the county seats of each county?</h2>
                <h2>When you're ready, click 'Start' to begin!</h2>
            </div>
            <Container maxWidth="md">
                <Container align="center">
                    <div id="Map_Div">
                        <Seats />
                    </div>
                </Container>
            </Container>
        </div>
    );
}

export default CountySeats;