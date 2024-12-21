import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Macrocategory = ({ title, icon, description, categories }) => {
  return (
    <section className="macrocategory">
      <div className="macrocategory--container">
        <div className="macrocategory-header">
          <div> 
            <h2 className="macrocategory-heading">{title}</h2>
            <FontAwesomeIcon icon={icon} className="input-icon macrocategory-heading__icon" />
          </div>
          {description && <p className="macrocategory-description">{description}</p>}
        </div>
        <button className="macrocategory-button">Find People</button>
      </div>
    
      <div className="macrocategory-carousel">
        <button className="carousel-arrow left-arrow">←</button>
        <div className="carousel-track">
          {categories.map((category, index) => (
            <div key={index} className="carousel-card">
              <span className="card-icon">{category.icon}</span>
              <p className="card-label">{category.name}</p>
            </div>
          ))}
        </div>
        <button className="carousel-arrow right-arrow">→</button>
      </div>
    </section>
  );
};

export default Macrocategory;
