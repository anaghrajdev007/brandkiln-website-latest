import React, { useState, useEffect, useRef } from 'react';
import Mainsection from '../Component/mainsection';
import People from '../Component/Peoplesection';
import Particale from '../Component/Particale.js';
import Header from '../Component/header';
import imgBack from '../Images/image16.png';
import './main.css';

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); 

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
  
      const delta = event.deltaY || -event.detail;
      const direction = delta > 0 ? 1 : -1;

      if ((direction === 1 && currentSection < sectionRefs.current.length - 1) ||
          (direction === -1 && currentSection > 0)) {
        const nextSection = currentSection + direction;
        sectionRefs.current[nextSection].current.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(nextSection);
      }
    };

    const handleKeyPress = (event) => {
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        if (currentSection < sectionRefs.current.length - 1) {
          const nextSection = currentSection + 1;
          sectionRefs.current[nextSection].current.scrollIntoView({ behavior: 'smooth' });
          setCurrentSection(nextSection);
        }
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        if (currentSection > 0) {
          const prevSection = currentSection - 1;
          sectionRefs.current[prevSection].current.scrollIntoView({ behavior: 'smooth' });
          setCurrentSection(prevSection);
        }
      }
    };
  
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('DOMMouseScroll', handleScroll, { passive: false });
    window.addEventListener('mousewheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyPress, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('DOMMouseScroll', handleScroll);
      window.removeEventListener('mousewheel', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentSection]);


  return (
    <div className='main-bodyfront'>
      <div ref={sectionRefs.current[0]}>
      <Header/>
<Mainsection /></div>
      <div ref={sectionRefs.current[1]}><People /></div>
      <div ref={sectionRefs.current[2]}><Particale /></div>
    </div>
  );
};

export default Homepage;
