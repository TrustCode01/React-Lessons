import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial';
import Banner from '../assets/services.jpg'
import Evangelize from '../assets/evangelize.jpg'
import Couple from '../assets/couple.jpg'
import ForMen from '../assets/men_fellowship.jpg'
import Women from '../assets/women.jpg'
import Youths from '../assets/youths.jpg'
import Parent from '../assets/single_parent.jpg'
import Children from '../assets/children.jpg'
import Life from '../assets/life.jpg'
import Community from '../assets/community.jpg'
import Business from '../assets/business.jpg'
import Service from '../assets/service.jpg'
import Counselling from '../assets/counselling.jpg'
import {motion} from 'framer-motion'

const services = [
    {   id: 'main',
        title: "Main Service",
        description: "Our main service is a time for the entire congregation to come together in worship, prayer, and the study of God's Word. It's a moment to recharge spiritually and connect with fellow believers. (Hebrews 10:25).",
        image: Service
      },
  {
    id: 'evangelism',
    title: "Evangelism",
    description: `Our evangelism ministry spreads the Gospel through community outreach, street ministry, and digital platforms. We train and equip believers to share their faith effectively. "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age" (Matthew 28:19-20).`,
    image: Evangelize
  },
  
  {
    id: 'couples',
    title: "Couples Teachings",
    description: "The Couples Ministry is dedicated to strengthening marriages through biblical teaching, counseling, and fellowship. Couples are encouraged to build a Christ-centered relationship that reflects God's love. Therefore what God has joined together, let no one separate (Mark 10:9).",
    image: Couple
  },
  {
    id: 'men-fellowship',
    title: "Men's Fellowship",
    description: "The Men's Ministry focuses on building strong, godly men who lead their families and communities with integrity and faith. Through fellowship, Bible study, and service projects, men are equipped to grow in their walk with Christ.<em> Be on your guard; stand firm in the faith; be courageous; be strong. (1 Corinthians 16:13) </em>.",
    image: ForMen
  },
  {
    id: 'women-fellowship',
    title: "Women Ministry",
    description: "Our Women's Ministry provides a supportive environment for women to grow in their faith, build meaningful relationships, and serve others. Through Bible studies, retreats, and community outreach, women are empowered to live out their God-given purpose.",
    image: Women
  },
  {
    id: 'single-parents',
    title: "Single Parents Ministry",
    description: "This ministry offers support and encouragement to single parents, helping them navigate the challenges of raising children alone. Through practical assistance, spiritual guidance, and community, single parents find hope and strength. A father to the fatherless, a defender of widows, is God in his holy dwelling.(Psalm 68:5).",
    image: Parent 
  },
  {
    id: 'youths',
    title: "Youth Ministry",
    description: "Our Youth Ministry engages young people with dynamic worship, relevant teaching, and fun activities. It aims to help them develop a personal relationship with Jesus and grow into mature, committed Christians. Don’t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity (1 Timothy 4:12)",
    image: Youths
  },
 
  {
    id: 'children',
    title: "Children's Ministry",
    description: "The Children Ministry provides a safe and nurturing environment where kids can learn about God's love through Bible stories, songs, and interactive activities. It's a place where faith is fun and foundational. Jesus said, 'Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.' (Matthew 19:14).",
    image: Children
  },
  {
    id: 'life-coaching',
    title: "Life Coaching",
    description: "Our Life Coaching ministry offers personalized guidance to help individuals achieve their God-given potential. Through one-on-one sessions, participants receive support in areas such as career, relationships, and spiritual growth.Plans fail for lack of counsel, but with many advisers they succeed(Proverbs 15:22).",
    image: Life
  },
  {
    id: 'counselling',
    title: "Counselling",
    description: "Our Life Coaching ministry offers personalized guidance to help individuals achieve their God-given potential. Through one-on-one sessions, participants receive support in areas such as career, relationships, and spiritual growth.Plans fail for lack of counsel, but with many advisers they succeed(Proverbs 15:22).",
    image: Counselling
  },
  {
    id: 'community',
    title: "Community Service",
    description: "This ministry is dedicated to serving the needs of our local community through various outreach programs. Whether it's feeding the hungry, clothing the needy, or providing shelter, we strive to be the hands and feet of Jesus. Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me. (Matthew 25:40).",
    image: Community
  },
  {
    id: 'business',
    title: "Business and Skills inspirations",
    description: "This ministry supports entrepreneurs and professionals by providing resources, training, and networking opportunities. It encourages the use of God-given talents to build successful businesses that honor Him. Do you see someone skilled in their work? They will serve before kings; they will not serve before officials of low rank.(Proverbs 22:29)",
    image: Business
  }
];

export default function Services() {
  
  return (
    <div className="pt-16">
      <PageHeader 
        title="Our Services" 
        image= {Banner}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ministries That Transform Lives</h2>
          <p className="text-gray-600">
            Discover our comprehensive range of ministries designed to support your spiritual
            journey and help you grow in faith. Each ministry is led by dedicated leaders
            who are passionate about serving God and our community.
          </p>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>

      <Testimonial />
      
      <Footer />
    </div>
  );
}