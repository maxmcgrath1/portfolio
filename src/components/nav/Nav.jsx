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
            <a href="#header"><AiOutlineHome/></a>
            <a href="#about"><IoIosContact/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#portfolio"><BsBriefcaseFill/></a>
            <a href="#contact"><BiSolidMessageDetail/></a>
        </nav>
    )
}

export default Nav