import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';

// Sports
import { ReactComponent as BasketballIcon } from '../../utils/svgs/basketball.svg';
import { ReactComponent as BicycleIcon } from '../../utils/svgs/bicycle.svg';
import { ReactComponent as CricketIcon } from '../../utils/svgs/cricket.svg';
import { ReactComponent as FootballIcon } from '../../utils/svgs/football.svg';
import { ReactComponent as GolfIcon } from '../../utils/svgs/golf.svg';
import { ReactComponent as RunningIcon } from '../../utils/svgs/running-shoe.svg';
import { ReactComponent as PingPongIcon } from '../../utils/svgs/ping-pong.svg';
import { ReactComponent as TennisIcon } from '../../utils/svgs/tennis.svg';
import { ReactComponent as VolleyballIcon } from '../../utils/svgs/volleyball.svg';
import { ReactComponent as YogaIcon } from '../../utils/svgs/yoga.svg';
import { ReactComponent as DumbbellIcon } from '../../utils/svgs/dumbell.svg';
import { ReactComponent as SkateboardIcon } from '../../utils/svgs/skate.svg';
import { ReactComponent as SnorkelIcon } from '../../utils/svgs/snorkel.svg';
import { ReactComponent as SurfIcon } from '../../utils/svgs/surf.svg';
import { ReactComponent as SwimmingIcon } from '../../utils/svgs/swimming.svg';
import { ReactComponent as PilatesIcon } from '../../utils/svgs/pilates.svg';
import { ReactComponent as HikingIcon } from '../../utils/svgs/hiking.svg';
import { ReactComponent as FishingIcon } from '../../utils/svgs/fishing.svg';
import { ReactComponent as ClimbingIcon } from '../../utils/svgs/climbing.svg';
import { ReactComponent as KayakIcon } from '../../utils/svgs/canoening.svg';
import { ReactComponent as BadmingtonIcon } from '../../utils/svgs/badmington.svg';

// Languages
import { ReactComponent as FlagChinaIcon } from '../../utils/svgs/flag-china.svg';
import { ReactComponent as FlagEsIcon } from '../../utils/svgs/flag-es.svg';
import { ReactComponent as FlagGbIcon } from '../../utils/svgs/flag-gb.svg';
import { ReactComponent as FlagItIcon } from '../../utils/svgs/flag-it.svg';
import { ReactComponent as FlagJpIcon } from '../../utils/svgs/flag-jp.svg';
import { ReactComponent as FlagKrIcon } from '../../utils/svgs/flag-kr.svg';
import { ReactComponent as FlagPtIcon } from '../../utils/svgs/flag-pt.svg';

// Arts and Crafts
import { ReactComponent as Paintbrush } from '../../utils/svgs/paintbrush.svg';
import { ReactComponent as PotteryIcon } from '../../utils/svgs/pottery.svg';
import { ReactComponent as OrigamiIcon } from '../../utils/svgs/origami.svg';
import { ReactComponent as PhotographyIcon } from '../../utils/svgs/photography.svg';
import { ReactComponent as KnittingIcon } from '../../utils/svgs/knitting.svg';
import { ReactComponent as BonsaiIcon } from '../../utils/svgs/bonsai.svg';

// Music
import { ReactComponent as AcousticGuitarIcon } from '../../utils/svgs/acoustic-guitar.svg';
import { ReactComponent as FolkMandolinIcon } from '../../utils/svgs/folk-mandolin.svg';
import { ReactComponent as PianoIcon } from '../../utils/svgs/piano.svg';
import { ReactComponent as DjIcon } from '../../utils/svgs/dj.svg';
import { ReactComponent as ViolinIcon } from '../../utils/svgs/violin.svg';
import { ReactComponent as JazzIcon } from '../../utils/svgs/jazz.svg';
import { ReactComponent as DrumsIcon } from '../../utils/svgs/drums.svg';
import { ReactComponent as RockAndRollIcon } from '../../utils/svgs/rock-and-roll.svg';

// Cooking
import { ReactComponent as FruitIcon } from '../../utils/svgs/fruit.svg';
import { ReactComponent as CakeIcon } from '../../utils/svgs/cake.svg';
import { ReactComponent as CocktailIcon } from '../../utils/svgs/cocktail.svg';
import { ReactComponent as CoffeeIcon } from '../../utils/svgs/coffee.svg';
import { ReactComponent as NoodleHouseIcon } from '../../utils/svgs/noodle-house.svg';

// Coding
import { ReactComponent as WebIcon } from '../../utils/svgs/web.svg';
import { ReactComponent as AppIcon } from '../../utils/svgs/app.svg';
import { ReactComponent as AiIcon } from '../../utils/svgs/ai.svg';
import { ReactComponent as GamingIcon } from '../../utils/svgs/gaming.svg';
import { ReactComponent as BlockchainIcon } from '../../utils/svgs/blockchain.svg';

// On the Table
import { ReactComponent as ChessIcon } from '../../utils/svgs/chess.svg';
import { ReactComponent as PokerIcon } from '../../utils/svgs/poker.svg';
import { ReactComponent as BoardGamesIcon } from '../../utils/svgs/board-game.svg';
import { ReactComponent as DungeonsAndDragonsIcon } from '../../utils/svgs/dungeon-and-dragon.svg';

// Let's Talk
import { ReactComponent as AstronomyIcon } from '../../utils/svgs/astronomy.svg';
import { ReactComponent as EconomicsIcon } from '../../utils/svgs/economics.svg';
import { ReactComponent as PoliticsIcon } from '../../utils/svgs/politics.svg';
import { ReactComponent as WorldHistoryIcon } from '../../utils/svgs/history.svg';
import { ReactComponent as ComparativeReligionsIcon } from '../../utils/svgs/religions.svg';
import { ReactComponent as BitcoinIcon } from '../../utils/svgs/bitcoin.svg';
import { ReactComponent as MentalHealthIcon } from '../../utils/svgs/mental-health.svg';
import { ReactComponent as FilmAnalysisIcon } from '../../utils/svgs/film.svg';
import { ReactComponent as BookClubsIcon } from '../../utils/svgs/book.svg';
import { ReactComponent as PhilosophyIcon } from '../../utils/svgs/philosophy.svg';
import { ReactComponent as TravelStoriesIcon } from '../../utils/svgs/travel.svg';
import { ReactComponent as RelationshipsIcon } from '../../utils/svgs/relationships.svg';

import Macrocategory from '../../components/MacroCategory.jsx';


const Categories = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Access the current URL
    
const sportsCategories = {
    colorClass: "blue",
    items: [
      { name: "Tennis", icon: <TennisIcon />, skill: 'tennis', category: 'sports-and-fitness' },
      { name: "Surf", icon: <SurfIcon />, skill: 'surf', category: 'sports-and-fitness' },
      { name: "Golf", icon: <GolfIcon />, skill: 'golf', category: 'sports-and-fitness' },
      { name: "Fitness", icon: <DumbbellIcon />, skill: 'fitness', category: 'sports-and-fitness' },
      { name: "Yoga", icon: <YogaIcon />, skill: 'yoga', category: 'sports-and-fitness' },
      { name: "Running", icon: <RunningIcon />, skill: 'running', category: 'sports-and-fitness' },
      { name: "Soccer", icon: <FootballIcon />, skill: 'soccer', category: 'sports-and-fitness' },
      { name: "Basketball", icon: <BasketballIcon />, skill: 'basketball', category: 'sports-and-fitness' },
      { name: "Ping Pong", icon: <PingPongIcon />, skill: 'table-tennis', category: 'sports-and-fitness' },
      { name: "Ciclying", icon: <BicycleIcon />, skill: 'bicycle', category: 'sports-and-fitness' },
      { name: "Cricket", icon: <CricketIcon />, skill: 'cricket', category: 'sports-and-fitness' },
      { name: "Volleyball", icon: <VolleyballIcon />, skill: 'volleyball', category: 'sports-and-fitness' },
      { name: "Snorkeling", icon: <SnorkelIcon />, skill: 'snorkeling', category: 'sports-and-fitness' },
      { name: "Swimming", icon: <SwimmingIcon />, skill: 'swimming', category: 'sports-and-fitness' },
      { name: "Skateboard", icon: <SkateboardIcon />, skill: 'skate', category: 'sports-and-fitness' },
      { name: "Pilates", icon: <PilatesIcon />, skill: 'pilates', category: 'sports-and-fitness' },
      { name: "Hiking", icon: <HikingIcon />, skill: 'hiking', category: 'sports-and-fitness' },
      { name: "Fishing", icon: <FishingIcon />, skill: 'fishing', category: 'sports-and-fitness' },
      { name: "Climbing", icon: <ClimbingIcon />, skill: 'climbing', category: 'sports-and-fitness' },
      { name: "Kayak", icon: <KayakIcon />, skill: 'kayak', category: 'sports-and-fitness' },
      { name: "Badminton", icon: <BadmingtonIcon />, skill: 'badminton', category: 'sports-and-fitness' }
    ],
};

const languageCategories = {
    colorClass: "red",
    items: [
      { name: "English", icon: <FlagGbIcon />, skill: 'english', category: 'languages' },
      { name: "Japanese", icon: <FlagJpIcon />, skill: 'japanese', category: 'languages' },
      { name: "Korean", icon: <FlagKrIcon />, skill: 'korean', category: 'languages' },
      { name: "Italian", icon: <FlagItIcon />, skill: 'italian', category: 'languages' },
      { name: "Chinese", icon: <FlagChinaIcon />, skill: 'chinese', category: 'languages' },
      { name: "Spanish", icon: <FlagEsIcon />, skill: 'spanish', category: 'languages' },
      { name: "Portuguese", icon: <FlagPtIcon />, skill: 'portuguese', category: 'languages' },
    ],
};

const artsCategories = {
    colorClass: "yellow",
    items: [
      { name: "Painting", icon: <Paintbrush />, skill: 'painting', category: 'arts-and-crafts' },
      { name: "Pottery", icon: <PotteryIcon />, skill: 'pottery', category: 'arts-and-crafts' },
      { name: "Origami", icon: <OrigamiIcon />, skill: 'origami', category: 'arts-and-crafts' },
      { name: "Photography", icon: <PhotographyIcon />, skill: 'photography', category: 'arts-and-crafts' },
      { name: "Knitting", icon: <KnittingIcon />, skill: 'knitting', category: 'arts-and-crafts' },
      { name: "Gardering", icon: <BonsaiIcon />, skill: 'gardering', category: 'arts-and-crafts' },
    ],
};

const musicCategories = {
    colorClass: "orange",
    items: [
      { name: "Acoustic Guitar", icon: <AcousticGuitarIcon />, skill: 'acoustic-guitar', category: 'music' },
      { name: "Eletric Guitar", icon: <RockAndRollIcon />, skill: 'eletric-guitar', category: 'music' },
      { name: "Piano", icon: <PianoIcon />, skill: 'piano', category: 'music' },
      { name: "Dj", icon: <DjIcon />, skill: 'dj', category: 'music' },
      { name: "Drums", icon: <DrumsIcon />, skill: 'drums', category: 'music' },
      { name: "Saxophone", icon: <JazzIcon />, skill: 'sax', category: 'music' },
      { name: "Violin", icon: <ViolinIcon />, skill: 'violin', category: 'music' },
      { name: "Folk Mandolin", icon: <FolkMandolinIcon />, skill: 'folk-mandolin', category: 'music' },
    ],
};

const cookingCategories = {
    colorClass: "green",
    items: [

      { name: "Cooking", icon: <NoodleHouseIcon />, skill: 'cooking', category: 'cooking-and-baking' },
      { name: "Baking", icon: <CakeIcon />, skill: 'baking', category: 'cooking-and-baking' },
      { name: "Cocktail making", icon: <CocktailIcon />, skill: 'cocktail-making', category: 'cooking-and-baking' },
      { name: "Latte Art", icon: <CoffeeIcon />, skill: 'latte-art', category: 'cooking-and-baking' },
      { name: "Vegeterian", icon: <FruitIcon />, skill: 'vegeterian', category: 'cooking-and-baking' },
    ],
};

const codingCategories = {
    colorClass: "purple",
    items: [
      { name: "Web Development", icon: <WebIcon />, skill: 'web-development', category: 'coding' },
      { name: "Mobile App Development", icon: <AppIcon />, skill: 'app-development', category: 'coding' },
      { name: "Artificial Intelligence", icon: <AiIcon />, skill: 'artificial-intelligence', category: 'coding' },
      { name: "Gaming", icon: <GamingIcon />, skill: 'gaming', category: 'coding' },
      { name: "Blockchain", icon: <BlockchainIcon />, skill: 'blockchain', category: 'coding' }
    ],
};

const onTheTableCategories = {
    colorClass: "brown",
    items: [
      { name: "Chess", icon: <ChessIcon />, skill: 'chess', category: 'on-the-table' },
      { name: "Poker", icon: <PokerIcon />, skill: 'poker', category: 'on-the-table' },
      { name: "Board Games", icon: <BoardGamesIcon />, skill: 'board-games', category: 'on-the-table' },
      { name: "Dungeons & Dragons", icon: <DungeonsAndDragonsIcon />, skill: 'd&d', category: 'on-the-table' }
    ],
};

const letsTalkCategories = {
    colorClass: "black",
    items: [
      { name: "Astronomy", icon: <AstronomyIcon />, skill: 'astronomy', category: 'lets-talk' },
      { name: "Economics", icon: <EconomicsIcon />, skill: 'economics', category: 'lets-talk' },
      { name: "Politics", icon: <PoliticsIcon />, skill: 'politics', category: 'lets-talk' },
      { name: "World History", icon: <WorldHistoryIcon />, skill: 'world-history', category: 'lets-talk' },
      { name: "Comparative Religions", icon: <ComparativeReligionsIcon />, skill: 'comparative-religions', category: 'lets-talk' },
      { name: "Cryptocurrency", icon: <BitcoinIcon />, skill: 'cryptocurrency', category: 'lets-talk' },
      { name: "Mental Health", icon: <MentalHealthIcon />, skill: 'mental-health', category: 'lets-talk' },
      { name: "Film Analysis", icon: <FilmAnalysisIcon />, skill: 'film-analysis', category: 'lets-talk' },
      { name: "Book Clubs", icon: <BookClubsIcon />, skill: 'book-clubs', category: 'lets-talk' },
      { name: "Philosophy", icon: <PhilosophyIcon />, skill: 'philosophy', category: 'lets-talk' },
      { name: "Travel Stories", icon: <TravelStoriesIcon />, skill: 'travel-stories', category: 'lets-talk' },
      { name: "Relationships", icon: <RelationshipsIcon />, skill: 'relationships', category: 'lets-talk' },
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

                <Macrocategory 
                    title="On the Table" 
                    icon={icons.chess} 
                    categories={onTheTableCategories} 
                    description="Immerse yourself in the world of strategy, skill, and fun with classic and modern games." 
                />

                <Macrocategory 
                    title="Let's Talk!" 
                    icon={icons.userGroup} 
                    categories={letsTalkCategories} 
                    description="Join the conversation and share your thoughts, ideas, and stories about anything and everything." 
                />


            </main>
        </div>
    );
};

export default Categories; 