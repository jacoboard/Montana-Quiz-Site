import { Container, AppBar, Typography } from '@material-ui/core';
import Posts from '../../components/Posts/Posts.js';
import Form from '../../components/Form/Form.js';
import Map from '../../components/Map/Map.js';
import useStyles from './styles.js'

function CountySelector(){
    const classes = useStyles();
    return(
        <div>
            <Container maxWidth="md">
                <Container align="center">
                     <div id="formWraper">
                        <Form />
                    </div>
                </Container>  
            </Container>
        </div>
    );
}

export default CountySelector;
