import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#header" className='footer__logo'>Max McGrath</a>

            <ul className='permalinks'>
                <li> <a href="#header">Home</a> </li>
                <li> <a href="#about">About</a> </li>
                <li> <a href="#experience">Experience</a> </li>
                <li> <a href="#portfolio">Portfolio</a> </li>
                <li> <a href="#contact">Contact</a> </li>
            </ul>

            <div className="footer__socials">
            <a href="https://www.linkedin.com/in/max-mcgrath1/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/maxmcgrath1" target="_blank" rel="noreferrer"><BsGithub/></a>
            </div>
        </footer>
    )
}

export default Footer