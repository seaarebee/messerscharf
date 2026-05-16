import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import CourseSection from './components/CourseSection';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import ContactFooter from './components/ContactFooter';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ProductGrid />
      <CourseSection />
      <AboutSection />
      <ProcessSection />
      <ContactFooter />
    </>
  );
}

export default App;
