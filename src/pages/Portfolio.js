import React, { Component } from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap"
import Navbar from "../Components/Navbar"
import ProjectCard from "../Components/ProjectCard"
import projects from "../projects.json"

class Portfolio extends Component{
    state = {
        projects
    }

    render() {
        return(
            <div>
            <Navbar />
            <Container>
            {this.state.projects.map(project => (
                <ProjectCard 
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                href={project.href}
                img={project.img}
                />
            ))}
            </Container>
            </div>
        )
    }
}

export default Portfolio