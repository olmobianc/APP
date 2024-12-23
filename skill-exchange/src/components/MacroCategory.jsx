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
            <FontAwesomeIcon icon={icon} className={`input-icon macrocategory-heading__icon color--${colorClass}`} />
          </div>
          {description && <p className="macrocategory-description">{description}</p>}
        </div>
        <button className="macrocategory-button">Find People</button>
      </div>
    
      <div className="macrocategory-carousel">
        <button className="carousel-arrow left-arrow">←</button>
        <div className="carousel-track">
          {items.map((item, index) => {
            return (
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
                <span
                  className={`card-icon card-icon--${colorClass}`}
                >
                  {item.icon}
                </span>
                <p className="card-label">{item.name}</p>
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
