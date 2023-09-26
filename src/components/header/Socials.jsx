import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Socials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/max-mcgrath1/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/maxmcgrath1" target="_blank" rel="noreferrer"><BsGithub/></a>
        </div>
    )
}

export default Socials