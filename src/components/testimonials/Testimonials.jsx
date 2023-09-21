import React from 'react'
import './testimonials.css'
import avatar from '../../assets/headshot1.png'

const data = [
    {
        avatar: avatar,
        name: "Client McHiredme",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, odit beatae consequuntur id omnis temporibus. Ipsam ex laboriosam corrupti eos perspiciatis vitae ullam autem nobis reiciendis? Ut placeat optio corporis!"
    },
    {
        avatar: avatar,
        name: "Earnest Achiever",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, odit beatae consequuntur id omnis temporibus. Ipsam ex laboriosam corrupti eos perspiciatis vitae ullam autem nobis reiciendis? Ut placeat optio corporis!"
    },
    {
        avatar: avatar,
        name: "Tony Peluso",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, odit beatae consequuntur id omnis temporibus. Ipsam ex laboriosam corrupti eos perspiciatis vitae ullam autem nobis reiciendis? Ut placeat optio corporis!"
    },
    {
        avatar: avatar,
        name: "Bryan ",
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
                            <h5 className='client__name'> Client McHiredme</h5>
                            <small className='client__review'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni necessitatibus, perspiciatis error iusto minima libero ipsa corrupti accusantium quidem? Aspernatur sunt sed officia eaque minus veniam voluptatum error earum!
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