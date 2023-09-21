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
                        <img src={avatar} alt="Client Avatar" />
                    </div>
                    <h5 className='client__name'> Client McHiredme</h5>
                    <small className='client__review'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni necessitatibus, perspiciatis error iusto minima libero ipsa corrupti accusantium quidem? Aspernatur sunt sed officia eaque minus veniam voluptatum error earum!
                    </small>
                </article>
                <article className='testimonial'>
                    <div className="client__avatar">
                        <img src={avatar} alt="Client Avatar" />
                    </div>
                    <h5 className='client__name'> Client McHiredme</h5>
                    <small className='client__review'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni necessitatibus, perspiciatis error iusto minima libero ipsa corrupti accusantium quidem? Aspernatur sunt sed officia eaque minus veniam voluptatum error earum!
                    </small>
                </article>
                <article className='testimonial'>
                    <div className="client__avatar">
                        <img src={avatar} alt="Client Avatar" />
                    </div>
                    <h5 className='client__name'> Client McHiredme</h5>
                    <small className='client__review'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni necessitatibus, perspiciatis error iusto minima libero ipsa corrupti accusantium quidem? Aspernatur sunt sed officia eaque minus veniam voluptatum error earum!
                    </small>
                </article>
                <article className='testimonial'>
                    <div className="client__avatar">
                        <img src={avatar} alt="Client Avatar" />
                    </div>
                    <h5 className='client__name'> Client McHiredme</h5>
                    <small className='client__review'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni necessitatibus, perspiciatis error iusto minima libero ipsa corrupti accusantium quidem? Aspernatur sunt sed officia eaque minus veniam voluptatum error earum!
                    </small>
                </article>
            </div>
        </section>
    )
}

export default Testimonials