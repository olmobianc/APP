import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

import { ReactComponent as AcousticGuitarIcon } from '../../utils/svgs/acoustic-guitar.svg';
import { ReactComponent as BasketballIcon } from '../../utils/svgs/basketball.svg';
import { ReactComponent as BicycleIcon } from '../../utils/svgs/bicycle.svg';
import { ReactComponent as BonsaiIcon } from '../../utils/svgs/bonsai.svg';
import { ReactComponent as CakeIcon } from '../../utils/svgs/cake.svg';
import { ReactComponent as Paintbrush } from '../../utils/svgs/paintbrush.svg';
import { ReactComponent as CocktailIcon } from '../../utils/svgs/cocktail.svg';
import { ReactComponent as CoffeeIcon } from '../../utils/svgs/coffee.svg';
import { ReactComponent as CricketIcon } from '../../utils/svgs/cricket.svg';
import { ReactComponent as Css3Icon } from '../../utils/svgs/css-3.svg';
import { ReactComponent as DiscIcon } from '../../utils/svgs/disc.svg';
import { ReactComponent as DrumsIcon } from '../../utils/svgs/drums.svg';
import { ReactComponent as DumbbellIcon } from '../../utils/svgs/dumbbell.svg';
import { ReactComponent as FisherIcon } from '../../utils/svgs/fisher.svg';
import { ReactComponent as FlagChinaIcon } from '../../utils/svgs/flag-china.svg';
import { ReactComponent as FlagEsIcon } from '../../utils/svgs/flag-es.svg';
import { ReactComponent as FlagGbIcon } from '../../utils/svgs/flag-gb.svg';
import { ReactComponent as FlagItIcon } from '../../utils/svgs/flag-it.svg';
import { ReactComponent as FlagJpIcon } from '../../utils/svgs/flag-jp.svg';
import { ReactComponent as FlagKrIcon } from '../../utils/svgs/flag-kr.svg';
import { ReactComponent as RunningIcon } from '../../utils/svgs/running-shoe.svg';
import { ReactComponent as FlagPtIcon } from '../../utils/svgs/flag-pt.svg';
import { ReactComponent as FolkMandolinIcon } from '../../utils/svgs/folk-mandolin.svg';
import { ReactComponent as FootballIcon } from '../../utils/svgs/football.svg';
import { ReactComponent as FruitIcon } from '../../utils/svgs/fruit.svg';
import { ReactComponent as GolfIcon } from '../../utils/svgs/golf.svg';
import { ReactComponent as Html5Icon } from '../../utils/svgs/html-5.svg';
import { ReactComponent as JavaIcon } from '../../utils/svgs/java.svg';
import { ReactComponent as YogaIcon } from '../../utils/svgs/yoga.svg';
import { ReactComponent as JavascriptIcon } from '../../utils/svgs/javascript.svg';
import { ReactComponent as JazzIcon } from '../../utils/svgs/jazz.svg';
import { ReactComponent as NoodleHouseIcon } from '../../utils/svgs/noodle-house.svg';
import { ReactComponent as OrigamiIcon } from '../../utils/svgs/origami.svg';
import { ReactComponent as PianoIcon } from '../../utils/svgs/piano.svg';
import { ReactComponent as PingPongIcon } from '../../utils/svgs/ping-pong.svg';
import { ReactComponent as PokerIcon } from '../../utils/svgs/poker.svg';
import { ReactComponent as PotteryIcon } from '../../utils/svgs/pottery.svg';
import { ReactComponent as PythonIcon } from '../../utils/svgs/python.svg';
import { ReactComponent as RockAndRollIcon } from '../../utils/svgs/rock-and-roll.svg';
import { ReactComponent as ShuttlecockIcon } from '../../utils/svgs/shuttlecock.svg';
import { ReactComponent as SnorkelIcon } from '../../utils/svgs/snorkel.svg';
import { ReactComponent as SurfIcon } from '../../utils/svgs/surf.svg';
import { ReactComponent as SwimmingIcon } from '../../utils/svgs/swimming.svg';
import { ReactComponent as TennisIcon } from '../../utils/svgs/tennis.svg';
import { ReactComponent as VioloncelloIcon } from '../../utils/svgs/violoncello.svg';
import { ReactComponent as VolleyballIcon } from '../../utils/svgs/volleyball.svg';
import { ReactComponent as SkateboardIcon } from '../../utils/svgs/skate.svg';
import { ReactComponent as PilatesIcon } from '../../utils/svgs/pilates.svg';
import { ReactComponent as HikingIcon } from '../../utils/svgs/hiking.svg';
import { ReactComponent as FishingIcon } from '../../utils/svgs/fishing.svg';
import { ReactComponent as ClimbingIcon } from '../../utils/svgs/climbing.svg';
import { ReactComponent as KayakIcon } from '../../utils/svgs/canoening.svg';
import { ReactComponent as BadmingtonIcon } from '../../utils/svgs/badmington.svg';

import Macrocategory from '../../components/MacroCategory.jsx';


const Categories = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Access the current URL
    
const sportsCategories = {
    colorClass: "blue",
    items: [
      { name: "Tennis", icon: <TennisIcon />, image: 'tennis' },
      { name: "Surf", icon: <SurfIcon />, image: 'surf' },
      { name: "Golf", icon: <GolfIcon />, image: 'golf' },
      { name: "Fitness", icon: <DumbbellIcon />, image: 'fitness' },
      { name: "Yoga", icon: <YogaIcon />, image: 'yoga' },
      { name: "Running", icon: <RunningIcon />, image: 'running' },
      { name: "Soccer", icon: <FootballIcon />, image: 'soccer' },
      { name: "Basketball", icon: <BasketballIcon />, image: 'basketball' },
      { name: "Ping Pong", icon: <PingPongIcon />, image: 'table-tennis' },
      { name: "Ciclying", icon: <BicycleIcon />, image: 'bicycle' },
      { name: "Cricket", icon: <CricketIcon />, image: 'cricket' },
      { name: "Volleyball", icon: <VolleyballIcon />, image: 'volleyball' },
      { name: "Skateboard", icon: <SkateboardIcon />, image: 'skate' },
      { name: "Pilates", icon: <PilatesIcon />, image: 'pilates' },
      { name: "Hiking", icon: <HikingIcon />, image: 'hiking' },
      { name: "Fishing", icon: <FishingIcon />, image: 'fishing' },
      { name: "Climbing", icon: <ClimbingIcon />, image: 'climbing' },
      { name: "Kayak", icon: <KayakIcon />, image: 'canoening' },
      { name: "Badminton", icon: <BadmingtonIcon />, image: 'badminton' },
      
    ],
};

const languageCategories = {
    colorClass: "red",
    items: [
      { name: "English", icon: <FlagGbIcon /> },
      { name: "Japanese", icon: <FlagJpIcon /> },
      { name: "Korean", icon: <FlagKrIcon /> },
      { name: "Italian", icon: <FlagItIcon /> },
      { name: "Chinese", icon: <FlagChinaIcon /> },
      { name: "Spanish", icon: <FlagEsIcon /> },
      { name: "Portuguese", icon: <FlagPtIcon /> },
    ],
};

const artsCategories = {
    colorClass: "yellow",
    items: [
      { name: "Painting", icon: <Paintbrush /> },
      { name: "Pottery", icon: <PotteryIcon /> },
      { name: "Origami", icon: <OrigamiIcon /> },
      { name: "Bonsai", icon: <BonsaiIcon /> },
    ],
};

const musicCategories = {
    colorClass: "orange",
    items: [
      { name: "Acoustic Guitar", icon: <AcousticGuitarIcon /> },
      { name: "Eletric Guitar", icon: <RockAndRollIcon /> },
      { name: "Piano", icon: <PianoIcon /> },
      { name: "Drums", icon: <DrumsIcon /> },
      { name: "Saxophone", icon: <JazzIcon /> },
      { name: "Violoncello", icon: <VioloncelloIcon /> },
      { name: "Folk Mandolin", icon: <FolkMandolinIcon /> },
    ],
};

const cookingCategories = {
    colorClass: "green",
    items: [

      { name: "Cooking", icon: <NoodleHouseIcon /> },
      { name: "Baking", icon: <CakeIcon /> },
      { name: "Cocktail making", icon: <CocktailIcon /> },
      { name: "Latte Art", icon: <CoffeeIcon /> },
      { name: "Vegeterian", icon: <FruitIcon /> },
    ],
};

const codingCategories = {
    colorClass: "purple",
    items: [
      { name: "HTML", icon: <Html5Icon /> },   
      { name: "CSS", icon: <Css3Icon /> },   
      { name: "Javascript", icon: <JavascriptIcon /> },   
      { name: "Python", icon: <PythonIcon /> },
      { name: "Java", icon: <JavaIcon /> },
    ],
};

const leisureCategories = {
    colorClass: "pink",
    items: [
      { name: "Poker", icon: <PokerIcon /> },
      { name: "Disc", icon: <DiscIcon /> },
      { name: "Shuttlecock", icon: <ShuttlecockIcon /> },
      { name: "Snorkel", icon: <SnorkelIcon /> },
      { name: "Swimming", icon: <SwimmingIcon /> },
      { name: "Fishing", icon: <FisherIcon /> },
    ],
};


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        // Handle logout logic here
        console.log('User logged out');
    };

    return (
        <div className="home logged-in categories-page">
            <header className="header">
                <div className='left'>
                    <div className="logo">Marcopolo</div>
                    <nav className="nav">
                        <FontAwesomeIcon icon={icons.house} className="input-icon" />
                        <Link 
                            to="/home" 
                            className={`nav-link ${location.pathname === '/home' ? 'nav-link--active' : ''}`}
                        >
                            Home
                        </Link>
                        <FontAwesomeIcon icon={icons.compass} className="input-icon" />
                        <Link 
                            to="/categories" 
                            className={`nav-link ${location.pathname === '/categories' ? 'nav-link--active' : ''}`}
                        >
                            Categories
                        </Link>
                    </nav>
                </div>
                
                <div className='right'>
                    <div className="premium">
                        <Link to="/premium" className="premium-link">Go Premium</Link>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={icons.bars} className="input-icon" />
                    </div>
                </div>
            </header>

            {menuOpen && (
                <div className="dropdown-menu">
                    <Link to="/account" className="dropdown-item">Account</Link>
                    <div className="dropdown-item" onClick={handleLogout}>Log Out</div>
                </div>
            )}

            <main className="main-content categories">
                <Macrocategory 
                    title="Sports and Fitness" 
                    icon={icons.dumbbell} 
                    categories={sportsCategories} 
                    description="Stay active and explore various sports and fitness activities." 
                />
                <Macrocategory 
                    title="Languages" 
                    icon={icons.language} 
                    categories={languageCategories} 
                    description="Learn new languages and expand your communication skills." 
                />

                <Macrocategory 
                    title="Arts and Crafts" 
                    icon={icons.paintBrush} 
                    categories={artsCategories} 
                    description="Unleash your creativity with arts and crafts activities." 
                />

                <Macrocategory 
                    title="Music" 
                    icon={icons.guitar} 
                    categories={musicCategories} 
                    description="Dive into the world of music and discover your inner musician." 
                />

                <Macrocategory 
                    title="Cooking and Baking" 
                    icon={icons.utensils} 
                    categories={cookingCategories} 
                    description="Master the art of cooking and baking with these activities." 
                />

                <Macrocategory 
                    title="Coding" 
                    icon={icons.laptopCode} 
                    categories={codingCategories} 
                    description="Explore coding languages and improve your programming skills." 
                />
            </main>
        </div>
    );
};

export default Categories; 