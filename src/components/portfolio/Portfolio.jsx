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
                        <img src={blackjackLogo} alt="Blackjack" />
                    </div>
                    <h3>Blackjack</h3>
                    <a href="https://github.com/maxmcgrath1/Blackjack" className='btn' target='_blank' rel="noreferrer">GitHub</a>
                    <a href="https://maxmcgrath1.github.io/Blackjack/" className='btn' target='_blank' rel="noreferrer">Live Site</a>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={ggLogo} alt="Blackjack" />
                    </div>
                    <h3>Good Games</h3>
                    <a href="https://github.com/maxmcgrath1/Blackjack" className='btn' target='_blank' rel="noreferrer">GitHub</a>
                    <a href="https://maxmcgrath1.github.io/Blackjack/" className='btn' target='_blank' rel="noreferrer">Live Site</a>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={fumblrLogo} alt="Blackjack" />
                    </div>
                    <h3>fumblr</h3>
                    <a href="https://github.com/maxmcgrath1/Blackjack" className='btn' target='_blank' rel="noreferrer">GitHub</a>
                    <a href="https://maxmcgrath1.github.io/Blackjack/" className='btn' target='_blank' rel="noreferrer">Live Site</a>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={wayfarerLogo} alt="Blackjack" />
                    </div>
                    <h3>Wayfarer</h3>
                    <a href="https://github.com/maxmcgrath1/Blackjack" className='btn' target='_blank' rel="noreferrer">GitHub</a>
                    <a href="https://maxmcgrath1.github.io/Blackjack/" className='btn' target='_blank' rel="noreferrer">Live Site</a>
                </article>
            </div>
        </section>
    )
}

export default Portfolio