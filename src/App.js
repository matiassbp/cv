// App.js
import React, { useState, useRef } from 'react';
import useScrollY from './useScrollY'; // Importa el Custom Hook
import Intro from './components/intro';
import Contact from './components/contact';
import WorkExperience from './components/workExperience';
import Skills from './components/skills';
import InfoAcademy from './components/infoAcademy';
import Description from './components/description';
import './style.css'; // Importa el archivo de estilos personalizados


const App = () => {
  const [scrollPause, setScrollPause] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(1000);
  const [scroll, setScroll] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const app = useRef(null);
  const scrollY = useScrollY();

  const style = {
    transform: `translateY(-${scroll}vh)`,
    transition: `${animationDuration}ms ease-out`,
  };

  const handleWheel = (e) => {
    if (!scrollPause) {
      setScrollPause(true);

      const scrollDistance = scrollY(e, app, currentPage, setCurrentPage);
      setScroll(scrollDistance);

      setTimeout(() => {
        setScrollPause(false);
      }, animationDuration);
    }
  };

  return (
    <div style={style} ref={app} onWheel={handleWheel} className="app">
      <Intro currentPage={currentPage} />
      <Description currentPage={currentPage} duration={animationDuration} />
      <InfoAcademy currentPage={currentPage} duration={animationDuration} />
      <WorkExperience currentPage={currentPage} duration={animationDuration} />
      <Skills currentPage={currentPage} duration={animationDuration} />
      <Contact currentPage={currentPage} duration={animationDuration} />

    </div>
  );
};

export default App;