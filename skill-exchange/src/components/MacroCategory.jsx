import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Macrocategory = ({ title, icon, description, categories }) => {

  const { colorClass, items } = categories;  // Destructure to get colorClass and items

  return (
    <section className="macrocategory">
      <div className="macrocategory--container">
        <div className="macrocategory-header">
          <div> 
            <h2 className={`macrocategory-heading`}>{title}</h2>
            <FontAwesomeIcon icon={icon} className="input-icon macrocategory-heading__icon" />
          </div>
          {description && <p className="macrocategory-description">{description}</p>}
        </div>
        <button className="macrocategory-button">Find People</button>
      </div>
    
      <div className="macrocategory-carousel">
        <button className="carousel-arrow left-arrow">←</button>
        <div className="carousel-track">
          {items.map((category, index) => {


            return (
              <Link 
                key={index} 
                to={`/categories/${title.replace(/\s+/g, '-').toLowerCase()}/${category.name.replace(/\s+/g, '-').toLowerCase()}`}
                className="carousel-card"
                state={{ 
                  image: category.image, 
                  colorClass: colorClass 
                }}
              >
                <span
                  className={`card-icon card-icon--${colorClass}`}
                >
                  {category.icon}
                </span>
                <p className="card-label">{category.name}</p>
              </Link>
            );
          })}
        </div>
        <button className="carousel-arrow right-arrow">→</button>
      </div>
    </section>
  );
};

export default Macrocategory;
