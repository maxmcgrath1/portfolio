import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Tocuh</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__options">
                        <MdOutlineMail />
                        <h4>Email</h4>
                        <h5>maxmcgrath@temple.edu</h5>
                        <a href="mailto:maxmcgrath@temple.edu">Email Me</a>
                    </article>
                    <article className="contact__options">
                        <RiMessengerLine />
                        <h4>Messenger</h4>
                        <h5>Max McGrath</h5>
                        <a href="https://m.me/MaxWellAmillionImus">Email Me</a>
                    </article>
                    <article className="contact__options">
                        <MdOutlineMail />
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