import React from 'react';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import AboutBanner from '../assets/aboutbanner.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const values = [
  {
    title: "Passionate Evangelism",
    description: "We zealously share the good news of Jesus Christ with all people, driven by a deep love for the lost and a desire to see lives transformed. “How, then, can they call on the one they have not believed in? And how can they believe in the one of whom they have not heard? And how can they hear without someone preaching to them?” (Romans 10:14)"
  },
  {
    title: "Service and Compassion",
    description: "We are dedicated to serving others with the love and compassion of Christ, meeting both spiritual and practical needs within our communities. “Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms.” (1 Peter 4:10)"
  },
  {
    title: "Dedicated Discipleship",
    description: "We prioritize equipping and mentoring believers to grow in their faith, empowering them to disciple others and serve the Lord effectively. “Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.” (Matthew 28:19)"
  },
  {
    title: "Biblical Teaching",
    description: "We uphold the authority of Scripture, teaching and applying God’s Word faithfully to guide our lives and decisions. “All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.” (2 Timothy 3:16)."
  },
  {
    title: "Prayer and Dependence on God",
    description: "We rely on prayer and the guidance of the Holy Spirit in all we do, seeking God’s will and direction for our lives and ministry. “Devote yourselves to prayer, being watchful and thankful.” (Colossians 4:2)."
  },
  {
    title: "Integrity and Accountability",
    description: "We strive to live with integrity, being accountable to God and one another in our personal and corporate conduct. “Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.” (Colossians 3:23)."
  }
];

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.3 }
    }
  };

  return (
    <div className="pt-16">
      <PageHeader title="About Us" image={AboutBanner} />

      <div className="container mx-auto px-4 py-16">
        <div className="w-[80vw] mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Origins</h2>
          <p className="text-gray-600 mb-8">
            Glad Tidings Fellowship was birthed in 1982 through the divine vision given to Pastor Richmond Chiundiza while he was fervently serving at Christian Life Center in Harare and with Campus Crusade for Christ in Zimbabwe. Our journey began at Highfield Secondary School in Harare, where a passionate group of believers gathered for Sunday services, igniting a flame for the gospel.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-center">Our Story as Tariro Assembly</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={container}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 mb-4">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
