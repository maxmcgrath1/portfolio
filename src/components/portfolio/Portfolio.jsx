import React from 'react'
import './portfolio.css'
import blackjackLogo from '../../assets/blackjacklogo.jpg'
import fumblrLogo from '../../assets/fumblr.png'
import ggLogo from '../../assets/SquareSmash.png'
import wayfarerLogo from '../../assets/wayfarerlogo.webp'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>My Portfolio</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <h3>This is a portfolio item title</h3>
                        <a href="https://github.com/maxmcgrath1/Blackjack" className='btn' target='_blank'>GitHub</a>
                        <a href="https://maxmcgrath1.github.io/Blackjack/" className='btn' target='_blank'>Live Site</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio