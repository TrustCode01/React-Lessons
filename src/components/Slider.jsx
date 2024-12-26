import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxiYWJ5fGVufDB8MHx8fDE3MTI5ODgzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1566004100631-35d015d6a491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxiYWJ5fGVufDB8MHx8fDE3MTI5ODgzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8YmFieXxlbnwwfDB8fHwxNzEyOTg4MzE5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1588410670460-cdab54625253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxiYWJ5fGVufDB8MHx8fDE3MTI5ODgzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxiYWJ5fGVufDB8MHx8fDE3MTI5ODgzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1491013516836-7db643ee125a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxiYWJ5fGVufDB8MHx8fDE3MTI5ODgzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1505679208891-9ab12ee61dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8YmFieXxlbnwwfDB8fHwxNzEyOTg4MzE5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1583086762675-5a88bcc72548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxiYWJ5fGVufDB8MHx8fDE3MTI5ODgzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080"
];

const HeroSlider = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden bg-purple-300">
      <div className="relative lg:w-[290px] lg:h-[290px] md:w-[220px] md:h-[220px] sm:w-[180px] sm:h-[180px] w-[100px] h-[100px] [transform-style:preserve-3d] animate-[rotate_30s_linear_infinite]">
        {images.map((src, index) => (
          <span key={index} style={{ '--i': index + 1 }} className="span-style">
            <img src={src} alt={`img - ${index + 1}`} className="img-style" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
