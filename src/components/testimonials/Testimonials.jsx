import React from 'react'
import './testimonials.css'
import avatar from '../../assets/headshot1.png'

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews from Clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials__container">
                <article className='testimonial'>
                    <div className="client__avatar">
                        <img src={avatar} alt="" />
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Testimonials