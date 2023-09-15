import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'
import {BiBook} from 'react-icons/bi'
import {BsBriefcaseFill} from 'react-icons/bs'
import {BiSolidMessageDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><IoIosContact/></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBriefcaseFill/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSolidMessageDetail/></a>
        </nav>
    )
}

export default Nav