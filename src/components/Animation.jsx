import React from 'react';
import { motion, transform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Animation = () => {
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
    hidden: { opacity: 0, x:60},
    visible: { opacity: 1,x:0,  transition: { duration: 3 } }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
    >
      <h1>Animate on Scroll</h1>
      <p>This content will fade in when it comes into view.</p>
    </motion.div>
  );
};

export default Animation;
