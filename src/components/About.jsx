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
            <p className='mid'>
              It is our purpose as food lovers with a passion for providing good ambiance and experiences
              to serve and bring joy to people's lives through our love language
              ...GOOD FOOD!
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
