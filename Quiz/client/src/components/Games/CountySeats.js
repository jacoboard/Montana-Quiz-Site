import { Container, AppBar, Typography } from '@material-ui/core';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import Seats from '../Map/Counties/seats';
import useStyles from './styles.js'

function CountySeats(){
    const classes = useStyles();
    return(
        <div>
            <div id='GameInstructions'>
            <h1>Enter The County Seat</h1>
            <h2>Do you know the county seats of each county?</h2>
            <h3>When you're ready to begin click on form or start button to begin!</h3>
            </div>
            
                <Container maxWidth="md">
                    <Container align="center">
                    <div id="Map_Div">
                        <Seats />
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

export default CountySeats;