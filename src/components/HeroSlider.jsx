import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Banner from '../assets/banner.jpg'
import Banner2 from '../assets/banner2.jpg'
import Banner3 from '../assets/banner3.jpg'
import Banner4 from '../assets/banner4.jpg'
import Banner5 from '../assets/banner5.jpg'
import Banner6 from '../assets/banner6.jpg'
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: Banner,
    title: "Welcome to Tariro Assembly",
    description: "The Pillar of Hope"
  },
  {
    image: Banner2,
    title: "Join Us Now",
    description: "Experience the power of worship together"
  },
  {
    image: Banner3,
    title: "Growing in Faith",
    description: "Transforming lives through Christ's love"
  },
  {
    image: Banner4,
    title: "Making Desciples",
    description: "Preaching the gospel all around the world"
  },
  {
    image: Banner5,
    title: "Equiping the Saints ",
    description: "Grooming the belivers "
  },
  {
    image: Banner6,
    title: "Growing in Faith",
    description: "Transforming lives through Christ's love"
  }
];

export default function HeroSlider() {
  return (
    <div className="relative h-[70vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[70vh] mt-25">
              {/*<div 
                className="absolute inset-0 bg-cover  bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
              
                <div className="absolute inset-0 bg-black/50" />
              </div>*/}
              <div 
                className="absolute inset-0 top-25"
              >
              
               <picture>
                <source  media='min-width: 1400px' src={slide.image}/>
                <source  media='min-width: 1000px' src=''/>
                <source  media='min-width: 700px' src=''/>
                <source  media='min-width: 501px' src=''/>
                <source  media='max-width: 500px' src=''/>
                <img src={slide.image} alt="" className='w-full h-[70vh] max-w-[100%]'/>
               </picture>
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl animate-fade-in-delay">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}