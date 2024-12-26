import { Heart, Users, Book, Baby, Users2, UserPlus, Gem, Building2, HandHeart, Brain, Briefcase, Home as HomeIcon } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import Showcase from '../components/Showcase'
import ServicesCard from '../components/ServicesCard'
import Footer from '../components/Footer'
import Features from '../components/Features'
import FAQList from '../components/FAQ';
import Typewriter from '../components/Typewriter';

const services = [
  {
    title: "Evangelism",
    description: "Spreading the gospel through community outreach and missions",
    icon: <Heart />
  },
  {
    title: "Main Service",
    description: "Sunday worship services filled with praise and powerful messages",
    icon: <Users />
  },
  {
    title: "Couples Teachings",
    description: "Building stronger marriages through biblical principles",
    icon: <Users2 />
  },
  {
    title: "Men's Fellowship",
    description: "Empowering men to be spiritual leaders",
    icon: <UserPlus />
  },
  {
    title: "Single Parents",
    description: "Support and guidance for single parent families",
    icon: <Heart />
  },
  {
    title: "Women Teachings",
    description: "Empowering women through faith and fellowship",
    icon: <Gem />
  },
  {
    title: "Youth Services",
    description: "Dynamic programs for young people to grow in faith",
    icon: <Users />
  },
  {
    title: "Children's Ministry",
    description: "Nurturing young hearts in Christ's love",
    icon: <Baby />
  },
  {
    title: "Community Ministry",
    description: "Serving and impacting our local community",
    icon: <Building2 />
  },
  {
    title: "Life Coaching",
    description: "Personal growth through spiritual guidance",
    icon: <Brain />
  },
  {
    title: "Business Inspirations",
    description: "Integrating faith and business principles",
    icon: <Briefcase />
  },
  {
    title: "Family Union",
    description: "Strengthening family bonds through Christ",
    icon: <HomeIcon />
  }
];

export default function Home() {
  const sentences = [ "Hello, welcome to our website!", "We are glad to have you here.", "Explore our features and services.", "Contact us for more information." ];
  
  return (
    <div>
      <HeroSlider />
      <Features />
      
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our wide range of ministries designed to support your spiritual journey
            and help you grow in faith.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>
      <FAQList />
      <Footer />
    </div>
  );
}