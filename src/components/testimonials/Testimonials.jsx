import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/headshot1.png'

const data = [
    {
        avatar: AVTR,
        name: "Client McHiredme",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, odit beatae consequuntur id omnis temporibus. Ipsam ex laboriosam corrupti eos perspiciatis vitae ullam autem nobis reiciendis? Ut placeat optio corporis!"
    },
    {
        avatar: AVTR,
        name: "Earnest Achiever",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, odit beatae consequuntur id omnis temporibus. Ipsam ex laboriosam corrupti eos perspiciatis vitae ullam autem nobis reiciendis? Ut placeat optio corporis!"
    },
    {
        avatar: AVTR,
        name: "Tony Peluso",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, odit beatae consequuntur id omnis temporibus. Ipsam ex laboriosam corrupti eos perspiciatis vitae ullam autem nobis reiciendis? Ut placeat optio corporis!"
    },
    {
        avatar: AVTR,
        name: "Bryan Von Baron",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, odit beatae consequuntur id omnis temporibus. Ipsam ex laboriosam corrupti eos perspiciatis vitae ullam autem nobis reiciendis? Ut placeat optio corporis!"
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews from Clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials__container">
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <article key={index} className='testimonial'>
                            <div className="client__avatar">
                                <img src={avatar} alt="Client Avatar" />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>
                                {review}
                            </small>
                        </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonials