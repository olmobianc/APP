import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../utils/icons.js';

import tennisSvg from '../utils/svgs/sports-and-fitness/tennis.svg';
import golfSvg from '../utils/svgs/sports-and-fitness/golf.svg';
import basketballSvg from '../utils/svgs/sports-and-fitness/basketball.svg';
import surfingSvg from '../utils/svgs/sports-and-fitness/surf.svg';
import swimmingSvg from '../utils/svgs/sports-and-fitness/swimming.svg';
import yogaSvg from '../utils/svgs/sports-and-fitness/yoga.svg';

const categories = {
    "Sports and Fitness": {
        icon: icons.dumbbell,
        skills: [
            { name: "Tennis", image: tennisSvg },
            { name: "Golf", image: golfSvg },
            { name: "Basketball", image: basketballSvg },
            { name: "Surfing", image: surfingSvg },
            { name: "Swimming", image: swimmingSvg },
            { name: "Yoga", image: yogaSvg }
        ]
    },
    "Languages": {
        icon: icons.language,
        skills: [
            { name: "English", image: "/english.jpg" },
            { name: "Spanish", image: "/spanish.jpg" },
            { name: "French", image: "/french.jpg" },
            { name: "Italian", image: "/italian.jpg" },
            { name: "Japanese", image: "/japanese.jpg" },
            { name: "Mandarin", image: "/mandarin.jpg" }
        ]
    },
    "Arts and Crafts": {
        icon: icons.paintBrush,
        skills: [
            { name: "Painting", image: "/painting.jpg" },
            { name: "Sculpting", image: "/sculpting.jpg" },
            { name: "Knitting", image: "/knitting.jpg" },
            { name: "Photography", image: "/photography.jpg" },
            { name: "Drawing", image: "/drawing.jpg" }
        ]
    },
    "Music": {
        icon: icons.guitar,
        skills: [
            { name: "Guitar", image: "/guitar.jpg" },
            { name: "Piano", image: "/piano.jpg" },
            { name: "Singing", image: "/singing.jpg" },
            { name: "Drums", image: "/drums.jpg" },
            { name: "Violin", image: "/violin.jpg" }
        ]
    },
    "Cooking and Baking": {
        icon: icons.utensils,
        skills: [
            { name: "Baking Cakes", image: "/baking.jpg" },
            { name: "Cooking Pasta", image: "/pasta.jpg" },
            { name: "Sushi Making", image: "/sushi.jpg" },
            { name: "BBQ", image: "/bbq.jpg" },
            { name: "Pastry", image: "/pastry.jpg" }
        ]
    },
    "On the Table": {
        icon: icons.chess,
        skills: [
            { name: "Chess", image: "/chess.jpg" },
            { name: "Board Games", image: "/boardgames.jpg" },
            { name: "Card Games", image: "/cards.jpg" },
            { name: "Poker", image: "/poker.jpg" },
            { name: "Mahjong", image: "/mahjong.jpg" }
        ]
    }
};

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Sports and Fitness");
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleTabClick = (category) => {
        setActiveTab(category);
    };

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    useEffect(() => {
        // When activeTab changes, set the first skill of the new category as the default selected skill
        setSelectedSkill(categories[activeTab].skills[0]);
    }, [activeTab]);

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                {Object.keys(categories).map((category) => (
                    <button
                        key={category}
                        className={`tab-button ${activeTab === category ? 'active' : ''}`}
                        onClick={() => handleTabClick(category)}
                    >
                        <FontAwesomeIcon icon={categories[category].icon} />
                        {category}
                    </button>
                ))}
            </div>
            
            <div className="tab-content">
                <div className="skills-list">
                    <h3>{activeTab}</h3>
                    <ul>
                        {categories[activeTab].skills.map((skill) => (
                            <li
                                key={skill.name}
                                className={`skill-item ${selectedSkill?.name === skill.name ? 'active' : ''}`}
                                onClick={() => handleSkillClick(skill)}
                            >
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="skill-preview">
                    {selectedSkill ? (
                        <>
                            <img src={selectedSkill.image} alt={selectedSkill.name} />
                            <h3>{selectedSkill.name}</h3>
                        </>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
