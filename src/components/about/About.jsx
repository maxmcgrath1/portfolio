import React from 'react'
import './about.css'
import ME from '../../assets/headshot2.png'
import {BsPersonWorkspace} from 'react-icons/bs'
import {FaPeopleGroup} from 'react-icons/fa6'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-img">
                        <img src={ME} alt="headshot2" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <BsPersonWorkspace className='about__icon'/>
                            <h5>Experience</h5>
                            <small>2+ Years Coding</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                        <article className='about__card'>
                            <FaPeopleGroup className='about__icon'/>
                            <h5>Clients</h5>
                            <small>25+ Worldwide</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod soluta expedita maxime fuga amet nobis deserunt cumque optio, voluptas nam dolorum quasi voluptates placeat culpa eligendi molestias praesentium asperiores!
                    </p>

                </div>
            </div>
        </section>
    )
}

export default About