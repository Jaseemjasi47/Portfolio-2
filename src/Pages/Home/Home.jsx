import React, { useState, useEffect } from 'react';
import './Home.css';
import Img1 from '../../Assets/Images/coding-1.jpg';
import Img2 from '../../Assets/Images/coding-2.jpg';
import Img3 from '../../Assets/Images/coding-3.jpg';
import Img4 from '../../Assets/Images/typing.jpg';

const projectImages = [Img1, Img2, Img3, Img4];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  let touchStartX = 0;

  // Auto-Navigate Carousel
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectImages.length) % projectImages.length);
  };

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      handleNext();
    } else if (touchEndX - touchStartX > 50) {
      handlePrev();
    }
  };

  return (
    <div className="portfolio-container">
      {/* Header Section with Background Image */}
      <h1 className="font-1 animated-text">Mohammad Jaseem K J</h1>
      <section
        className="home-header"
        style={{ backgroundImage: `url(${Img1})` }}
      >
        <div className="header-text">
          {/* <h1 className="font-1 animated-text">Mohammad Jaseem K J</h1> */}
          <p className="font-4 overlay-text">Full Stack Developer | Digital Marketer | Photographer</p>
        </div>
      </section>

      {/* Projects Carousel Section */}
      <section className="home-projects">
        <h2 className="font-1">Latest Projects</h2>
        <div
          className="carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="carousel-button" onClick={handlePrev}>❮</button>
          <div className="carousel-image-wrapper">
            <img
              src={projectImages[currentIndex]}
              alt={`Project ${currentIndex + 1}`}
              className="carousel-image img-shadow"
            />
          </div>
          <button className="carousel-button" onClick={handleNext}>❯</button>
        </div>
      </section>
    </div>
  );
}

export default Home;