import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaintBrush, 
  faLaptopCode, 
  faGuitar, 
  faUtensils, 
  faDumbbell, 
  faLanguage,
  faCamera,
  faChalkboardTeacher,
  faSailboat,
  faLeaf
} from '@fortawesome/free-solid-svg-icons';
import '../styles/components/TopCategories.scss';

const categories = [
  { name: 'Languages', icon: faLanguage },
  { name: 'Arts and Crafts', icon: faPaintBrush },
  { name: 'Music', icon: faGuitar },
  { name: 'Cooking', icon: faUtensils },
  { name: 'Fitness', icon: faDumbbell },
  { name: 'Technology', icon: faLaptopCode },
  { name: 'Photography', icon: faCamera },
  { name: 'Academic Tutoring', icon: faChalkboardTeacher },
  { name: 'Sailing', icon: faSailboat },
  { name: 'Gardening', icon: faLeaf }
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
