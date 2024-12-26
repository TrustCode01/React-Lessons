import React from 'react';
import { motion } from 'framer-motion';

const CardSlider = () => {
  const cards = [
    { id: 1, image: 'path/to/image1.jpg', text: 'Card 1' },
    { id: 2, image: 'path/to/image2.jpg', text: 'Card 2' },
    { id: 3, image: 'path/to/image3.jpg', text: 'Card 3' },
  ];

  return (
    <div className="relative w-full h-96 flex items-center justify-center perspective-1000">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute w-64 h-96 bg-white shadow-lg rounded-lg"
          style={{
            transform: `rotateY(${index * 120}deg) translateZ(300px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={card.image} alt={card.text} className="w-full h-2/3 object-cover rounded-t-lg" />
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold">{card.text}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardSlider;
