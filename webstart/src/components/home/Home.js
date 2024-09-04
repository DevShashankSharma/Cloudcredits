import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';

function Home({ isDarkMode }) {
  return (
    <>
      <Hero isDarkMode={isDarkMode} />
      <Features isDarkMode={isDarkMode} />
      <Testimonials isDarkMode={isDarkMode} />
    </>
  );
}

export default Home;
