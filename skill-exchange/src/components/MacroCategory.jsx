import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../utils/icons.js';
import { Link } from 'react-router-dom';

const Macrocategory = ({ title, icon, description, categories }) => {
  const { colorClass, items } = categories;
  const carouselTrackRef = useRef(null); // Reference for the carousel track

  const [showLeftArrow, setShowLeftArrow] = useState(false); 
  const [showRightArrow, setShowRightArrow] = useState(items.length >= 7);

  // Handle the carousel arrow click to scroll left or right
  const handleArrowClick = (direction) => {
    const track = carouselTrackRef.current;
    const scrollAmount = 400;

    if (direction === 'right') {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setShowLeftArrow(true);

      // Automatically hide the right arrow when reaching the end of the track
      if (track.scrollWidth - track.scrollLeft <= track.clientWidth) {
        setShowRightArrow(false);
      }
    } else if (direction === 'left') {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setShowRightArrow(true); // Ensure the right arrow is visible after scrolling left

      // Automatically hide the left arrow when reaching the start of the track
      if (track.scrollLeft <= 0) {
        setShowLeftArrow(false);
      }
    }
  };

  // Automatically update arrows visibility based on scroll position when component mounts
  const updateArrowVisibility = () => {
    const track = carouselTrackRef.current;
    const isAtStart = track.scrollLeft <= 0;
    const isAtEnd = track.scrollWidth - track.scrollLeft <= track.clientWidth;

    setShowLeftArrow(!isAtStart);
    setShowRightArrow(!isAtEnd);
  };

  // Hook to update arrow visibility on mount and when scrolling
  React.useEffect(() => {
    updateArrowVisibility();

    const handleScroll = () => updateArrowVisibility();
    const track = carouselTrackRef.current;
    track.addEventListener('scroll', handleScroll);

    return () => track.removeEventListener('scroll', handleScroll); // Clean up on unmount
  }, []);

  return (
    <section className="macrocategory">
      <div className="macrocategory--container">
        <div className="macrocategory-header">
          <div> 
            <h2 className={`macrocategory-heading`}>{title}</h2>
            <FontAwesomeIcon icon={icon} className={`input-icon macrocategory-heading__icon color--${colorClass}`} />
          </div>
          {description && <p className="macrocategory-description">{description}</p>}
        </div>
        <Link 
          to={`/categories/${title.replace(/\s+/g, '-').toLowerCase()}`}
          state={{ 
            categoryName: items[0].category,
            colorClass: colorClass 
          }}
        >
          <button className="macrocategory-button">Find People</button>
        </Link>
      </div>
    
      <div className="macrocategory-carousel">
        {showLeftArrow && (
          <button 
            className="carousel-arrow left-arrow"
            onClick={() => handleArrowClick('left')}
          >
            <FontAwesomeIcon icon={icons.arrowLeft} className="input-icon" />
          </button>
        )}

        <div className="carousel-track" ref={carouselTrackRef}>
          {items.map((item, index) => (
            <Link 
              key={index} 
              to={`/categories/${title.replace(/\s+/g, '-').toLowerCase()}/${item.name.replace(/\s+/g, '-').toLowerCase()}`}
              className="carousel-card"
              state={{ 
                skill: item.skill, 
                category: item.category,
                colorClass: colorClass 
              }}
            >
              <span className={`card-icon card-icon--${colorClass}`}>
                {item.icon}
              </span>
              <p className="card-label">{item.name}</p>
            </Link>
          ))}
        </div>

        {showRightArrow && (
          <button 
            className="carousel-arrow right-arrow"
            onClick={() => handleArrowClick('right')}
          >
            <FontAwesomeIcon icon={icons.arrowRight} className="input-icon" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Macrocategory;