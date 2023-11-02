import React, { useEffect, useState } from 'react';
import './intro.css';

const Intro = () => {
  
  const phrases = ["Programador Web", "Diseñador de UI/UX", "Apasionado por la tecnología"];  // Pendiente actualizar lista.
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const delayTime = 1000; // Tiempo de espera entre frases (1 segundo)
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const typeChar = () => {
      const currentPhrase = phrases[phraseIndex];
      if (charIndex < currentPhrase.length && !isDeleting) {
        setDisplayText((prevText) => prevText + currentPhrase[charIndex]);
        setCharIndex(charIndex + 1);
      } else if (charIndex > 0 && isDeleting) {
        setDisplayText((prevText) => prevText.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => {
          setIsDeleting(true);
        }, delayTime);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setCharIndex(0);
      }
    };

    const typingInterval = setInterval(typeChar, 50);

    // Controla el parpadeo del cursor                                     NO FUNCIONAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    const cursorBlinkInterval = setInterval(() => {
      setCursorVisible((prevCursorVisible) => !prevCursorVisible);
    }, 500); // Cambia la velocidad de parpadeo según tus preferencias

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorBlinkInterval);
    };
  }, [charIndex, isDeleting, phraseIndex, delayTime]);

  return (
    <section className="landing">
      <div className="intro-container">
        <div className="intro-content">
          <div className="intro-image">
            <img
              src="https://cdn.discordapp.com/attachments/1014520153251270736/1168318803457884302/foto_perfil.jpg?ex=655154ad&is=653edfad&hm=cbc06a5f97507574ca1a3f6020e8fc3c23a6615377d02a179d8258893f393536&"
              alt="Imagen de perfil"
              style={{
                borderRadius: '50%',
                width: '300px',
                height: '300px',
                boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)', // Agrega una sombra
                border: '0.5px solid #105a98', // Borde azul oscuro
              }}
            />
          </div>
          <h1 className="intro-text">
            <p>Hola, me llamo <strong className="middle-blue-font">Matías Benoni</strong></p>
            <p>
              y soy un{" "}
              <span className="element">{displayText}</span>
              <span className={cursorVisible ? "cursor" : "cursor-hidden"}>|</span>    {/* porque no parpadea la barraaaaa, no entiendooooooo */}
            </p>
            <p>actualmente vivo en <strong className="middle-blue-font">Santiago, Chile.</strong></p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro;
