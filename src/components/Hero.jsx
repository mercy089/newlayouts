// import React from 'react';
import Nav from './Nav';
import HeroContent from './HeroContent';
// import RotatedText from './RotatedText';

const Hero = () => {
  return (
    <section className="w-[95%] h-[95%] bg-black flex flex-col rounded-3xl">
      <Nav />
      {/* <hr /> */}
      <HeroContent />
      {/* <RotatedText /> */}
    </section>
  );
};

export default Hero;
