import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're here to answer any questions you may have about our services or to schedule an appointment.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-teal-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
                    <p className="text-gray-600">
                      Dental surgery clinic, 4L-Ghazali Road, Asghar Hospital basement, Samanabad, Lahore.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-teal-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
                    <p className="text-gray-600">0321-4591889</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-teal-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email Address</h3>
                    <p className="text-gray-600">raozafar26@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-100 p-3 rounded-full mr-4">
                    <FaClock className="text-teal-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 5:00 PM - 11:00 PM</p>
                    <p className="text-gray-600">Saturday: 5:00 PM - 11:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>

                {/* ✅ Formspree Integrated Form */}
                <form 
                  action="https://formspree.io/f/xeorlpld" 
                  method="POST" 
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map and Image */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/map.PNG" 
                  alt="Dental Clinic Location" 
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Emergency Services</h2>
              <p className="mb-4">
                Need immediate dental care? Our emergency services are available during business hours. 
                For after-hours emergencies, please call our emergency line:
              </p>
              <div className="text-2xl font-bold bg-white/20 p-4 rounded-lg text-center">
                0321-4591889
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
