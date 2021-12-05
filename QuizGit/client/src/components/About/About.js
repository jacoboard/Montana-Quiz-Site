import montana from '../../images/Montana.png';
import { Container } from '@material-ui/core';

function About(){
    return(
        <Container align="center">
            <h1>Welcome to the Montana Quiz</h1>
            <img src={montana} alt="montana hall" height="350" />
            <h1>Who are we?</h1>
            <p>We are John Chiki, Jacob Oard, and Tristan Stevens; 3 students at Montana State University.</p>
            <p>This project is the result of an assignment for our Web Development class.</p>
            <p>This webpage should assist you in learning various facts about Montana and it's counties in a fun and interactive way.</p>
            <h1>Enjoy!</h1>
        </Container>
    );
}

export default About;
