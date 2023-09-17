import React from 'react'
import './about.css'
import ME from '../../assets/headshot2.png'
import {BsPersonWorkspace} from 'react-icons/bs'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-img">
                        <img src={ME} alt="me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <BsPersonWorkspace/>
                            <h5>Experience</h5>
                            <small>2 Years Coding</small>
                            <small>30+ Projects Completed</small>
                            <smal>Javascript and Python</smal>
                            <small>SQL and MongoDB</small>
                            <small>React</small>
                            <small>CRUDable Apps</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About