import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiSolidUserDetail} from 'react-icons/bi'
import {} from 'react-icons/'
import {} from 'react-icons/'
import {} from 'react-icons/'

const Nav = () => {
    return (
        <nav>
            <a href="#"><AiOutlineHome/></a>
            <a href="#about"><BiSolidUserDetail/></a>
            <a href="#experience"><AiOutlineHome/></a>
            <a href="#portfolio"><AiOutlineHome/></a>
            <a href="#contact"><AiOutlineHome/></a>
        </nav>
    )
}

export default Nav