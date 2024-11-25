import React from "react";

const Macrocategory = ({ title, categories }) => {
  return (
    <section className="macrocategory">
      <div className="macrocategory-header">
        <h2 className="macrocategory-heading">{title}</h2>
        <p className="macrocategory-description">
          Connect with people sharing the same passion for different activities.
        </p>
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
