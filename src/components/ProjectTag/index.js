import React from 'react';
import CarouselItem from "../carouselItem";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "./style.css";

function ProjectTag(props) {
    return (
        <section className="card app">
            <ScrollAnimation animateIn={'animate__' + props.animIn[0]} animateOut={'animate__' + props.animOut[0]}>
                 <CarouselItem carArr={props.carouselArr} />
            </ScrollAnimation>
            <ScrollAnimation animateIn={'animate__' + props.animIn[1]} animateOut={'animate__' + props.animOut[1]}>
                <figure className="description">
                    <a className="link" href={props.site} target="_blank" rel="noopener noreferrer">
                        <h3 className="head1">{props.nameProject}</h3>
                    </a>
                    <a className="link" href={props.github} target="_blank" rel="noopener noreferrer">
                        <p className="head1">Link to GitHub repository</p>
                    </a>
                    <div dangerouslySetInnerHTML={{ __html: props.description }} />
                </figure>
            </ScrollAnimation>
        </section>
    )
}

export default ProjectTag;