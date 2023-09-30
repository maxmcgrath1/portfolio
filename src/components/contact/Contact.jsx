import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
// import { RiMessengerLine } from 'react-icons/ri';
// import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7rhxj9n', 'template_z19dhkp', form.current, 'L5TQFyG1hyX-cd90E')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
        e.target.reset();
        alert("Thank you, your Email has been sent!")
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>maxmcg01@gmail.com</h5>
                        <a href="mailto:maxmcg01@gmail.com" target="_blank" rel="noreferrer">Send Me an Email</a>
                    </article>
                    {/* <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Max McGrath</h5>
                        <a href="https://m.me/MaxWellAmillionImus" target="_blank" rel="noreferrer">Message Me On Facebook</a>
                    </article> */}
                    {/* <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+123456789</h5>
                        <a href="https://api.whatsapp.com/send?phone=123456789" target="_blank" rel="noreferrer">Message Me on WhatsApp</a>
                    </article> */}
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact