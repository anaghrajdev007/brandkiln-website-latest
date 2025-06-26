import React, { useState, useEffect } from 'react';

import imgOne from '../Images/img-1.jpg';
import imgTwo from '../Images/img-2.jpg';
import imgBack from '../Images/image16.png';
import { Link } from 'react-router-dom';


const MainSection = () => {
  const [hoveredImage, setHoveredImage] = useState("image1");



  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoveredImage) {
        setHoveredImage('image1');
      }
    }, 10);

    return () => clearInterval(interval);
  }, [hoveredImage]);



  return (
    <section
      className='d-flex hero-section'
      style={{ backgroundImage: `url(${imgBack})` }}
    >
      <div
        className='w-50 hero-image hero-image1'
        style={{
          backgroundImage: `url(${imgOne})`,
          backgroundPosition: 'right',
          filter: hoveredImage === 'image2' ? 'blur(5px)' : 'none',
          transition: 'filter 0.3s ease', // Smooth transition for filter
        }}
        onMouseEnter={() => setHoveredImage('image1')}
        onMouseLeave={() => setHoveredImage(null)}
      >
        BRAND
        <span className='studio'>STUDIO</span>
        <div className='undermaindiv' style={{ alignItems: 'end' }}>
          <span className='undermain'>We Design Experiences</span>
          <Link to='/about'  className='buoton'>MORE</Link>
        </div>
      </div>
      <div
        className='w-50 hero-image hero-image2'
        style={{
          backgroundImage: `url(${imgTwo})`,
          backgroundPosition: '-70px',
          filter: hoveredImage === 'image1' ? 'blur(5px)' : 'none',
          transition: 'filter 0.3s ease', // Smooth transition for filter
        }}
        onMouseEnter={() => setHoveredImage('image2')}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <div className='undermaindiv' >
          <div className='undermain'>We Design Experiences</div>
          <Link to='/about' className='buoton'>MORE</Link>
        </div>
        <span>KILN</span>
        <section className='studio'>TECH</section>
      </div>
    </section>
  );
};

export default MainSection;
