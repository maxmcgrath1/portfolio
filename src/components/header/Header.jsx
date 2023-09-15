import React from 'react'
import './header.css'
import CTA from './CTA'
import headshot from '../../assets/headshot1.png'
import Socials from './Socials'

const Header = () => {
    return (
        <header id='header'>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Max McGrath</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                
                <CTA />
                <Socials />

                <div className='headshot'>
                    <img src={headshot} alt="my headshot" />
                </div>

                <a href="#contact" className="scroll__down">MY SCROLL JAWN</a>
            </div>
        </header>
    )
}

export default Header