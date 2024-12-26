import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, stagger, transform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



export default function ServiceCard({ title, description, id, image }) {
  const controls = useAnimation();
    const [ref, inView] = useInView();
  
    React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }, [controls, inView]);
  
    const fadeIn = {
      hidden: {scale:-0.2, y:50, opacity:0},
      visible: { 
        scale: 1, 
        y:0, 
        opacity: 1, 
        transition: { duration: 1.5,delay:0.5, stagger:0.5} }
    };
  return (
    <motion.div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={fadeIn}
    >
      <div className="w-full rounded-lg flex text-purple-800 mb-4">
        <img src={image} alt={title} className="card-img sm:max-w-[100%] md:w-full" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={`/ministries#${id}`}>
        <button className="flex items-center text-purple-800 hover:text-purple-900 transition-colors">
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </Link>
    </motion.div>
  );
}
