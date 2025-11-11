import React from 'react';
import './About.scss';
import carImg from "../../images/cars/carsImage/LexusCT200H.png" // 🛑 replace with your image path
import Footer from '../footer/Footer';

function About() {
  return (
    < div className='container'>
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">
          About <span>Our Company</span>
        </h2>
        <p className="about__text">
          We are a premium car rental service dedicated to providing a smooth and luxurious travel experience.
          Whether you need an instant rent, a private driver, or a long trip solution — our professional team
          ensures quality, comfort, and safety at every step.
        </p>
        <p className="about__text">
          With years of experience and a passion for excellence, we aim to make your journey as pleasant
          as your destination. Choose us for reliability, elegance, and performance.
        </p>
      </div>

      <div className="about__image">
        <img src={carImg} alt="Luxury car rental" />
      </div>
    </section>
      <Footer/>
    </div>
  );
}

export default About;
