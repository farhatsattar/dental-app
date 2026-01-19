import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dental-primary to-dental-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-dental-secondary">
            Have questions or want to schedule an appointment? Reach out to us anytime.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="lg:w-1/2">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-dental-primary/10 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-dental-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
                    <p className="text-dental-text-light">
                      Dental Surgery Clinic<br />
                      3L-Ghazali Road, Asghar Hospital basement<br />
                      Samanabad, Lahore
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-dental-primary/10 p-3 rounded-lg mr-4">
                    <FaPhone className="text-dental-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Number</h3>
                    <p className="text-dental-text-light">0321-4591889</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-dental-primary/10 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-dental-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Address</h3>
                    <p className="text-dental-text-light">raozafar26@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-dental-primary/10 p-3 rounded-lg mr-4">
                    <FaClock className="text-dental-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Working Hours</h3>
                    <p className="text-dental-text-light">Monday - Friday: 5:00 PM - 11:00 PM</p>
                    <p className="text-dental-text-light">Saturday: 5:00 PM - 11:00 PM</p>
                    <p className="text-dental-text-light">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-dental-border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-dental-primary/10 p-3 rounded-lg text-dental-primary hover:bg-dental-primary hover:text-white transition-colors">
                    <FaFacebook className="text-lg" />
                  </a>
                  <a href="#" className="bg-dental-primary/10 p-3 rounded-lg text-dental-primary hover:bg-dental-primary hover:text-white transition-colors">
                    <FaTwitter className="text-lg" />
                  </a>
                  <a href="#" className="bg-dental-primary/10 p-3 rounded-lg text-dental-primary hover:bg-dental-primary hover:text-white transition-colors">
                    <FaInstagram className="text-lg" />
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-8 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

              {/* Formspree Integrated Form */}
              <form
                action="https://formspree.io/f/xeorlpld"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-dental-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-dental-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-primary transition-colors"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-dental-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-primary transition-colors"
                    placeholder="Subject of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-dental-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-primary transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full py-3 font-semibold text-lg hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map and Emergency Info */}
          <div className="lg:w-1/2">
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/map.PNG"
                  alt="Dental Clinic Location"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-dental-primary to-dental-accent text-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Emergency Services</h2>
              <p className="mb-4 opacity-90">
                Need immediate dental care? Our emergency services are available during business hours.
                For after-hours emergencies, please call our emergency line:
              </p>
              <div className="text-3xl font-bold bg-white/20 p-6 rounded-xl text-center mb-4">
                0321-4591889
              </div>
              <p className="text-center opacity-80">
                Available 24/7 for dental emergencies
              </p>
            </div>

            <div className="card p-8 mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Appointment</h2>
              <p className="text-dental-text-light mb-6">
                Prefer to book an appointment directly? Give us a call or use our online booking system.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:03214591889"
                  className="btn btn-primary w-full py-3 font-semibold flex items-center justify-center space-x-2"
                >
                  <FaPhone className="text-white" />
                  <span>Call Now</span>
                </a>
                <a
                  href="/appointment"
                  className="btn btn-outline w-full py-3 font-semibold border-dental-primary text-dental-primary hover:bg-dental-primary hover:text-white"
                >
                  Online Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
