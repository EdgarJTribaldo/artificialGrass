import React from 'react';
import heroImage from '../assets/resources1.jpeg'

const Hero = () => {

    return(
        <section className='hero' style={{backgroundImage: `url(${heroImage})` }}>
            <div className='hero-content'>
                <h1>Quality Installation & Maintenance Services</h1>
                <p>For Homeowners and Golf Courses in Miami, USA</p>
                <button className="btn">Get a Quote</button>
            </div>
        </section>
    )
}

export default Hero;