import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SubCategory = () => {
  const location = useLocation();
  const { image } = location.state || {}; // Retrieve the image name from state
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      if (image) {
        try {
          // Dynamically import the image based on the name
          const img = await import(`../../utils/svgs/sports-and-fitness/${image}.svg`);
          setImageSrc(img.default); // Set the imported image source
        } catch (error) {
          console.error('Error loading image:', error);
          setImageSrc(null); // Handle error
        }
      }
    };

    loadImage();
  }, [image]); // Use image as a dependency

  return (
    <div>
      <h1>Subcategory: {image}</h1>
      <div className="hero-banner">
        {imageSrc ? <img src={imageSrc} alt={image} /> : <p>Loading image...</p>} {/* Render the image */}
      </div>
    </div>
  );
};

export default SubCategory;