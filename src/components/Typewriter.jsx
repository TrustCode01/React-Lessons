import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, speed = 1000, deleteSpeed = 50, delay = 2000 }) => {
  const [displayedTexts, setDisplayedTexts] = useState(['', '', '', '']);
  const [index, setIndex] = useState(0);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (sentenceIndex < texts.length) {
      if (!isDeleting && index < texts[sentenceIndex].length) {
        const timeout = setTimeout(() => {
          const newDisplayedTexts = [...displayedTexts];
          newDisplayedTexts[sentenceIndex] += texts[sentenceIndex][index];
          setDisplayedTexts(newDisplayedTexts);
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else if (!isDeleting && index === texts[sentenceIndex].length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && index > 0) {
        const timeout = setTimeout(() => {
          const newDisplayedTexts = [...displayedTexts];
          newDisplayedTexts[sentenceIndex] = texts[sentenceIndex].substring(0, index - 1);
          setDisplayedTexts(newDisplayedTexts);
          setIndex(index - 1);
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setSentenceIndex((sentenceIndex + 1) % texts.length);
      }
    }
  }, [index, sentenceIndex, texts, speed, deleteSpeed, delay, isDeleting, displayedTexts]);

  return (
    <div className="typewriter">
      {displayedTexts.map((text, i) => (
        <p className='text-xl sm:text-base font-bold text-white mt-4' key={i}>{text}</p>
      ))}
    </div>
  );
};

export default Typewriter;


{/*
  const sentences = [ "Hello, welcome to our website!", "We are glad to have you here.", "Explore our features and services.", "Contact us for more information." ];
  
  <Typewriter texts={sentences} speed={100} />
  */}
