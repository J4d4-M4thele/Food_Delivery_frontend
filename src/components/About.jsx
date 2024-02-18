import React from 'react';
import { Link } from 'react-router-dom'; 
import {HiOutlineArrowRight} from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we take seriously is serving good food.</p>
            </div>
            <p className='mid'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Placeat quidem voluptatem nostrum voluptates ipsum, magni quod non ducimus, distinctio 
            vero dolores soluta officia itaque omnis minus et tempore quasi praesentium?
            </p>
            <Link to={'/'}>Explore Menu{' '} <span><HiOutlineArrowRight/></span></Link>
        </div>
        <div className="banner">
            <img src="about.png" alt="about" />
        </div>
      </div>
    </section>
  )
}

export default About
