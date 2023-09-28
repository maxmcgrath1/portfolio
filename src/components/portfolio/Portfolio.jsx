import React from 'react'
import './portfolio.css'
import blackjackLogo from '../../assets/blackjacklogo.jpg'
import fumblrLogo from '../../assets/fumblr.png'
import ggLogo from '../../assets/SquareSmash.png'
import wayfarerLogo from '../../assets/wayfarerlogo.webp'

const data = [
    {
        id: 1,
        image: blackjackLogo,
        title: "Blackjack",
        github: "https://github.com/maxmcgrath1/Blackjack",
        demo: "https://maxmcgrath1.github.io/Blackjack/",
        description: "A browser based blackjack game that utilizes HTML, CSS, and Javascript. Designed to be played on a desktop device."
    },
    {
        id: 2,
        image: ggLogo,
        title: "Good Games",
        github: "https://github.com/maxmcgrath1/good_games_frontend",
        demo: "https://ggood-ggames.netlify.app/",
        description: "Good Games is a MERN stack website dedicated to playing games right in your browser. These games were built using react."
    },
    {
        id: 3,
        image: fumblrLogo,
        title: "fumblr",
        github: "https://github.com/maxmcgrath1/fumblr",
        demo: "https://fumblr-ko0z.onrender.com/fumblr",
        description: "Fumblr is a full-stack MEN app collaborative project between myself and 2 others, where we made a Tumblr copycat to pay homage to the older version of it."
    },
    {
        id: 4,
        image: wayfarerLogo,
        title: "Wayfarer",
        github: "https://github.com/maxmcgrath1/Project_Wayfarer",
        demo: "https://project-wayfarer.onrender.com",
        description: "Wayfarer is a mock traveling blog where users can post about various cities they have been to. This project was a 3-person collaboration, utilizing Django and Python."
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Recent Work</h5>
            <h2>My Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo, description }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={image} className='project__image' alt="Project" />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Site</a>
                                </div>
                                <small className='about'>
                                    {description}
                                </small>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio