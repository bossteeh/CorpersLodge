import React from 'react';
import image from './Images/Group312.png';

const SectionOne = () => {
  return (
    <section className="firstSection container">
      <div className="text">
        <h2>Find your perfect</h2>
        <h2>
          home <span>Anywhere</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
          orci hendrerit feugiat odio a amet. Vestibulum in eget massa sit id.
          Sem justo, in massa nunc faucibus purus. Aliquam nulla nulla sagittis
          eget neque dictum.
        </p>
        <div className='btns'>
          <button>Get Started</button>
          <button className='learnbtn'>Learn More</button>
        </div>
      </div>
      <div className="building">
        <img src={image} alt="" srcset="" />
      </div>
    </section>
  );
};

export default SectionOne;
