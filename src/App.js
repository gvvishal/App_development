import React, { useState } from 'react';
import Header from './Components/Header';
import CarouselComponent from './Components/Carousel';
import Connection from './Components/Connection';
import Recharge from './Components/Recharge';
import PlanSelection from './Components/PlanSelection';
import Footer from './Components/Footer';
import Add from './Components/Add';
const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <Header onNavClick={handleNavClick} />
      <CarouselComponent />
      <Add/>
      {currentSection === 'home' && <Connection />}
      {currentSection === 'recharge' && <Recharge />}
      {currentSection === 'plans' && <PlanSelection />}
      <Footer />
    </div>
  );
};

export default App;
