import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../utils/icons.js';
import '../styles/components/TopCategories.scss';

const categories = [
  { name: 'Languages', icon: icons.language },
  { name: 'Arts and Crafts', icon: icons.paintBrush },
  { name: 'Music', icon: icons.guitar },
  { name: 'Cooking', icon: icons.utensils },
  { name: 'Fitness', icon: icons.dumbbell },
  { name: 'Technology', icon: icons.laptopCode },
  { name: 'Photography', icon: icons.camera },
  { name: 'Academic Tutoring', icon: icons.chalkboardTeacher },
  { name: 'Sailing', icon: icons.sailboat },
  { name: 'Gardening', icon: icons.leaf }
];

const TopCategories = () => {
  return (
    <section className="top-categories">
      <h2 className="top-categories__heading">Explore by categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <FontAwesomeIcon icon={category.icon} className="category-icon" />
            <h3 className="category-name">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
