import React from 'react'
import CV from '../../assets/resume.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download>Download DV</a>
            <a href='#contact'>Contact Me</a>
        </div>
    )
}

export default CTA