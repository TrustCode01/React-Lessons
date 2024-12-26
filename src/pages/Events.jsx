import PageHeader from '../components/PageHeader';
import EventComponent from '../components/EventsComponent';
import Footer from '../components/Footer'
import { Calendar, Clock, MapPin } from 'lucide-react';
import EventsBanner from '../assets/EventsBanner.jpg'

const events = [
  {
    date: "2024-03-25",
    title: "Easter Celebration Service",
    time: "10:00 AM - 12:00 PM",
    description: "Join us for a special Easter celebration service with worship, communion, and fellowship.",
    location: "Main Sanctuary"
  },
  {
    date: "2024-04-15",
    title: "Youth Conference 2024",
    time: "9:00 AM - 5:00 PM",
    description: "Annual youth conference focusing on spiritual growth, leadership, and community impact.",
    location: "Youth Center"
  },
  {
    date: "2024-05-01",
    title: "Women's Prayer Breakfast",
    time: "7:30 AM - 9:30 AM",
    description: "Monthly gathering for women to pray, share testimonies, and enjoy fellowship over breakfast.",
    location: "Fellowship Hall"
  },
  {
    date: "2024-05-20",
    title: "Family Fun Day",
    time: "11:00 AM - 4:00 PM",
    description: "A day of games, activities, food, and fellowship for the whole family.",
    location: "Church Grounds"
  }
];

export default function Events() {
  return (
    <div className="pt-16">
      <PageHeader 
        title="Upcoming Events" 
        image= {EventsBanner} 
      />

      <div className="container mx-auto px-4 py-16">
        <EventComponent/>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 bg-purple-100 md:w-48 flex items-center justify-center p-6">
                    <div className="text-center">
                      <Calendar className="w-8 h-8 text-purple-800 mx-auto mb-2" />
                      <div className="text-purple-800 font-semibold">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="text-purple-600">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-5 h-5 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}