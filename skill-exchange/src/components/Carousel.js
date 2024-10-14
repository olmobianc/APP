import React from 'react';

const carouselItems = [
  {
    id: 1,
    title: "Love the Problem",
    description: "Breakthrough innovation happens when we spend time deeply understanding a problem, not jumping to solutions."
  },
  {
    id: 2,
    title: "Keep it Simple",
    description: "We prioritize elegant solutions that align with our biggest goals – both as an organization and within teams. We say 'no' to a lot so we can do the few things that matter most."
  },
  {
    id: 3,
    title: "Decide with Principles",
    description: "We are highly thoughtful and intentional with every decision at Hinge. Decisions are driven by principles, not arbitrary personal judgment."
  },
  {
    id: 4,
    title: "Tend to Trust",
    description: "At Hinge, we tend to trust each other; we also put in the work to nurture and rebuild trust through transparency and open collaboration. When trust is missing, we speak up."
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>❮</button>
      <div className="carousel-content">
        <h2>{carouselItems[currentIndex].title}</h2>
        <p>{carouselItems[currentIndex].description}</p>
      </div>
      <button className="carousel-button next" onClick={handleNext}>❯</button>
    </div>
  );
};

export default Carousel;
