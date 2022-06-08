import React from 'react';
import image from './Images/sectiontwo.png';

const SectionTwo = () => {
  return (
    <section className="sec2">
      <div className='secondSection container'>
          <div className="image">
            <img src={image} alt="" srcset="" />
          </div>
          <div className='text'>
            <h2>Enjoy Luxury Apartment at Affordable Prices</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              orci hendrerit feugiat odio a amet. Vestibulum in eget massa sit id.
              Sem justo, in massa nunc faucibus purus. Aliquam nulla nulla sagittis
              eget neque dictum.
            </p>
            <div className="btns">
              <button>Get Started</button>
              <button className="learnbtn">Learn More</button>
            </div>
          </div>
      </div>
    </section>
  );
};

export default SectionTwo;
