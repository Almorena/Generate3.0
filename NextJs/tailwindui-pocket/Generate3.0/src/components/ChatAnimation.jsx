'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import step01 from '../images/steps/step01.png';
import step02 from '../images/steps/step02.png';
import step03 from '../images/steps/step03.png';
import step04 from '../images/steps/step04.png';
import step05 from '../images/steps/step05.png';
import step06 from '../images/steps/step06.png';
import trends from '../images/trends.png'; // Importa l'immagine finale

const ChatAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const [image, setImage] = useState(step01);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(1);
  const [showTrendsImage, setShowTrendsImage] = useState(false); // Stato per l'immagine trends
  const [startStepSequence, setStartStepSequence] = useState(false); // Stato per avviare la sequenza delle immagini
  const [currentStep, setCurrentStep] = useState(0); // Stato per gestire il ciclo delle immagini
  const [fadeIn, setFadeIn] = useState(true); // Stato per gestire il fade in delle immagini
  const [fadeOut, setFadeOut] = useState(false); // Stato per gestire il fade out delle immagini
  const [typing, setTyping] = useState(true);
  const [fadeOutContent, setFadeOutContent] = useState(false); // Stato per il fade out di tutto il contenuto

  const texts = [
    "What’s trending in beauty? ",
    "In 2024, the beauty industry is experiencing an exciting transformation driven by innovation, personalization, and simplicity. Here are some of the standout trends reshaping the landscape:"
  ];

  const steps = [step03, step04, step05, step06]; // Array delle immagini per la sequenza

  const typingSpeeds = [30, 10]; // Velocità di digitazione per ciascun testo
  const fontSizes = ['text-2xl', 'text-xl']; // Dimensione del font per ciascun testo

  // Definizione delle coordinate per ogni immagine (modifica queste per controllare la posizione)
  const stepPositions = [
    { top: '50px', left: '50px' },  // Coordinate per step03
    { top: '50px', left: '50px' },  // Coordinate per step04
    { top: '50px', left: '50px' },  // Coordinate per step05
    { top: '50px', left: '50px' }   // Coordinate per step06
  ];

  const textPositions = [
    { top: '336px', left: '66px' },  // Coordinate per il primo testo
    { top: '120px', left: '90px', paddingRight: '80px' }  // Coordinate e padding per il secondo testo
  ];

  useEffect(() => {
    if (animationPhase <= texts.length) { 
      let index = 0;

      const intervalId = setInterval(() => {
        if (index < texts[animationPhase - 1]?.length) {
          setDisplayText(texts[animationPhase - 1].slice(0, index + 1) + '|'); // Aggiungi il cursore
          index += 1;
        } else {
          clearInterval(intervalId);
          setTyping(false); // Fine della digitazione
          if (animationPhase === 1) {
            setTimeout(() => {
              setIsFadingOut(true);
            }, 500); // Ritardo prima di iniziare il fade out
          } else if (animationPhase === 2) {
            setTimeout(() => {
              setShowTrendsImage(true); // Mostra l'immagine trends dopo un piccolo ritardo
            }, 500);
          }
        }
      }, typingSpeeds[animationPhase - 1]);

      return () => clearInterval(intervalId);
    }
  }, [animationPhase]);

  useEffect(() => {
    if (isFadingOut) {
      setTimeout(() => {
        if (animationPhase === 1) {
          setImage(step02);
          setDisplayText(''); // Resetta il testo
          setAnimationPhase(2);
          setIsFadingOut(false);
          setTyping(true);
        }
      }, 500); // Durata del fade out
    }
  }, [isFadingOut]);

  useEffect(() => {
    if (showTrendsImage && !fadeOutContent) {
      setTimeout(() => {
        setFadeOutContent(true); // Avvia il fade out di tutto il contenuto (testo, step02, e trends)
      }, 2000); // Tempo di permanenza dell'immagine trends prima del fade out
    }
  }, [showTrendsImage]);

  useEffect(() => {
    if (fadeOutContent) {
      setTimeout(() => {
        setShowTrendsImage(false);
        setCurrentStep(0); // Inizia con step03
        setFadeIn(true); // Avvia il fade in di step03
        setStartStepSequence(true); // Avvia la sequenza delle immagini dopo trends
      }, 500); // Durata del fade out di tutto il contenuto
    }
  }, [fadeOutContent]);

  useEffect(() => {
    if (startStepSequence && currentStep < steps.length) {
      if (fadeIn) {
        const fadeOutTimeout = setTimeout(() => {
          setFadeIn(false);
          setFadeOut(true);
        }, 2000); // Durata di visualizzazione dell'immagine corrente prima del fade out

        return () => clearTimeout(fadeOutTimeout);
      }

      if (fadeOut) {
        const fadeInTimeout = setTimeout(() => {
          if (currentStep < steps.length - 1) {
            setCurrentStep((prevStep) => prevStep + 1); // Passa alla prossima immagine
          } else {
            // Reset dell'animazione
            setFadeOutContent(false);
            setStartStepSequence(false);
            setCurrentStep(0);
            setAnimationPhase(1);
            setImage(step01); // Ricomincia da step01
            setTyping(true);
            setDisplayText('');
          }
          setFadeIn(true);
          setFadeOut(false);
        }, 1000); // Tempo per completare il fade out e avviare il fade in della prossima immagine

        return () => clearTimeout(fadeInTimeout);
      }
    }
  }, [fadeIn, fadeOut, currentStep, startStepSequence]);

  useEffect(() => {
    if (!typing && displayText.endsWith('|')) {
      // Rimuovi il cursore alla fine della digitazione
      setDisplayText(displayText.slice(0, -1));
    }
  }, [typing, displayText]);

  return (
    <div className="relative flex flex-col rounded-2xl shadow-lg w-[600px] h-[600px] overflow-hidden p-4 bg-white">
      <div className={`relative w-full h-full transition-opacity duration-1000 ${fadeOutContent ? 'opacity-0' : 'opacity-100'}`}>
        <Image 
          src={image}
          alt="Background Image"
          layout="fill"
          objectFit="cover" // Riempi tutto il contenitore
        />
      </div>
      <div 
        className={`absolute z-10 ${animationPhase === 1 ? 'text-purple-800' : 'text-gray-600'} ${fontSizes[animationPhase - 1]} font-bold tracking-tight whitespace-pre-wrap transition-opacity duration-1000 ${fadeOutContent ? 'opacity-0' : 'opacity-100'}`}
        style={{
          ...textPositions[animationPhase - 1], // Usa le coordinate e il padding definite per ciascun testo
          paddingRight: animationPhase === 2 ? textPositions[1].paddingRight : '0px', // Applica il padding a destra solo al secondo testo
        }}
      >
        {displayText}
      </div>
      {showTrendsImage && (
        <div
          className={`absolute transition-opacity duration-1000 opacity-100 animate-fade-in`}
          style={{ top: '340px', left: '70px' }} // Controllo completo delle coordinate dell'immagine
        >
          <Image 
            src={trends}
            alt="Trends Image"
            width={500}
            height={200}
            objectFit="contain"
          />
        </div>
      )}
      {startStepSequence && currentStep >= 0 && (
        <div className="absolute w-full h-full transition-opacity duration-1000" style={stepPositions[currentStep]}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ${fadeIn && currentStep === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image 
                src={step}
                alt={`Step ${index + 3}`}
                layout="intrinsic"
                objectFit="contain"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatAnimation;
