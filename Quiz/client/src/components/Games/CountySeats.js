import { Container, AppBar, Typography } from '@material-ui/core';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import Seats from '../Map/Counties/seats';
import useStyles from './styles.js'

function CountySeats(){
    const classes = useStyles();
    return(
        <div>
            <h1>County Seats Selection</h1>
            <h2>Ready to test your skills?</h2>
            <h3>  </h3>
                <Container maxWidth="md">
                    <Container align="center">
                    <div id="Map_Div">
                        <Seats />
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

export default CountySeats;