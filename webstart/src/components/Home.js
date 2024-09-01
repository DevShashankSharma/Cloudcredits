import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TemplateGallery from './TemplateGallary';

function Home({ isDarkMode }) {
  return (
    <>
      <Hero isDarkMode={isDarkMode} />
      <Features isDarkMode={isDarkMode} />
      <TemplateGallery isDarkMode={isDarkMode} />
    </>
  );
}

export default Home;
