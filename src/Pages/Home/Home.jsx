// Home.jsx
import React from 'react';
import Intro from './Components/Intro';
import ProjectsCarousel from './Components/ProjectsCarousel';
import './Home.css';

function Home() {
  return (
    <div className="portfolio-container">
      <Intro />
      <ProjectsCarousel />
    </div>
  );
}

export default Home;
