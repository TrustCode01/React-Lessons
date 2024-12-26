import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactBanner from '../assets/contactBanner.jpg'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-16">
      <PageHeader 
        title="Contact Us" 
        image={ContactBanner}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Please fill out the form below and we'll
                get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-purple-900 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Church Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-purple-800 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">Glad Tidings Tariro Assembly<br />Hopley Waterfalls Harare</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-purple-800 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">0776118494</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-purple-800 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">gladtidingstariro@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-purple-800 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Service Times</h3>
                    <div>
                      <p className=""><strong>Main Service</strong><br /> Sundays Time: 8:00AM -11:00AM</p>
                      <p className=""><strong>Women Ministry</strong><br /> Tuesdays Time: 10:00AM -11:30AM</p>
                      <p className=""><strong>Home Groups</strong><br />Wednesday Time: 6:00PM -7:00PM</p>
                      <p className=""><strong>Mid Week Service</strong><br />Thursdays Time: 7:00PM - 7:30PM</p>
                      <p className=""><strong>Youth Service</strong><br /> Sunday Time: 12:00PM -1:00PM</p>
                      <p className=""><strong>Children's Ministry</strong><br /> Sunday Time: 8:00AM -9:00AM</p>

                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Join Us This Sunday</h3>
                <p className="text-gray-600">
                  We'd love to have you join us for worship. Our services are filled with
                  inspiring music, relevant teaching, and a welcoming community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}