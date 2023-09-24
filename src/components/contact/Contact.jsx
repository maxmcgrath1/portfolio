import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Tocuh</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__options">
                        <h4>Email</h4>
                        <h5>maxmcgrath@temple.edu</h5>
                        <a href="mailto:maxmcgrath@temple.edu">Email Me</a>
                    </article>
                </div>
                {/* End of Contact Options */}
                <form action=''>

                </form>
            </div>
        </section>
    )
}

export default Contact