import "./Background.css";
import {Container} from "react-bootstrap";
import { FaGithubAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Background(){
    return(
       <div className="hero">
           <Container>
        <div class="hero-text">
        <img src={process.env.PUBLIC_URL + '/img/Corrine.jpg'} alt="Corrine Pusillo" />
        <h1 class="responsive">Hi! My name is Corrine</h1>
        <p class="lead">I'm an aspiring Full Stack Developer.</p>
        <a href="https://linkedin.com/in/corrine-pusillo" target="_blank" className="fa-icons"><FaLinkedin /></a>
        <a href="mailto:corrine.bootcamp.forward@gmail.com" className="fa-icons"><FaEnvelope /></a>
        <a href="http://github.com/cpusillo" target="_blank" alt="Github" className="fa-icons"><FaGithubAlt /></a>
      </div>
           </Container>
       </div>
    )
}

export default Background