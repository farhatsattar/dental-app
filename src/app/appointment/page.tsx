'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaUser, FaTooth, FaClock, FaEnvelope, FaPhone, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment request:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dental-primary to-dental-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book an Appointment</h1>
          <p className="text-xl max-w-3xl mx-auto text-dental-secondary">
            Schedule your next dental visit with us. We'll confirm your appointment via email or phone within 24 hours.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Appointment Form */}
          <div className="lg:w-2/3">
            <div className="card p-8">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-8 rounded-xl text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <FaCheck className="text-green-600 text-xl" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Appointment Request Received!</h2>
                  <p className="mb-4 text-green-700">Thank you for scheduling with us. We will contact you shortly to confirm your appointment.</p>
                  <p className="font-medium text-green-700">We look forward to seeing you at our clinic.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Schedule Your Visit</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-3 font-medium flex items-center">
                        <FaUser className="mr-2 text-dental-primary" /> Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-dental-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-primary transition-colors"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-3 font-medium flex items-center">
                        <FaPhone className="mr-2 text-dental-primary" /> Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-dental-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-primary transition-colors"
                        placeholder="Your phone number"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-3 font-medium flex items-center">
                        <FaEnvelope className="mr-2 text-dental-primary" /> Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-dental-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-primary transition-colors"
                        placeholder="Your email address"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-gray-700 mb-3 font-medium flex items-center">
                        <FaTooth className="mr-2 text-dental-primary" /> Service Required *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-dental-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-primary transition-colors"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="general">General Dentistry</option>
                        <option value="cleaning">Dental Cleaning</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="implant">Dental Implants</option>
                        <option value="orthodontics">Orthodontics</option>
                        <option value="emergency">Emergency Treatment</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-gray-700 mb-3 font-medium flex items-center">
                        <FaCalendarAlt className="mr-2 text-dental-primary" /> Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-dental-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-primary transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-gray-700 mb-3 font-medium flex items-center">
                        <FaClock className="mr-2 text-dental-primary" /> Preferred Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-dental-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-primary transition-colors"
                        required
                      >
                        <option value="">Select a time</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-gray-700 mb-3 font-medium">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-dental-border rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-primary transition-colors resize-none"
                      placeholder="Any specific concerns or requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-full py-4 text-lg font-semibold hover:shadow-lg transition-all duration-300 mb-4"
                  >
                    Request Appointment
                  </button>

                  {/* WhatsApp Appointment Button */}
                  <a
                    href={`https://wa.me/923214591889?text=Hello%20Doctor!%20I%20want%20to%20book%20a%20dental%20appointment.%20Here%20are%20my%20details:%0A%0AName:%20${encodeURIComponent(
                      formData.name
                    )}%0APhone:%20${encodeURIComponent(formData.phone)}%0AEmail:%20${encodeURIComponent(
                      formData.email
                    )}%0AService:%20${encodeURIComponent(formData.service)}%0ADate:%20${encodeURIComponent(
                      formData.date
                    )}%0ATime:%20${encodeURIComponent(
                      formData.time
                    )}%0A%0AThank%20you!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-full py-4 text-lg font-semibold flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <FaPhone className="text-white" />
                    <span>Book on WhatsApp</span>
                  </a>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Appointment Information</h2>

              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                    <FaCheck className="mr-2" /> Before Your Visit
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Arrive 15 minutes early for your first appointment
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Bring your insurance information
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Have a list of current medications ready
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Wear comfortable clothing
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                    <FaCheck className="mr-2" /> What to Expect
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Complete medical history review
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Oral examination and consultation
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Digital X-rays if necessary
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Detailed treatment plan discussion
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      Professional cleaning for regular checkups
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                    <FaExclamationTriangle className="mr-2" /> Cancellation Policy
                  </h3>
                  <p className="text-yellow-700">
                    Please provide at least 24 hours notice for appointment cancellations to avoid fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-dental-primary to-dental-accent text-white rounded-xl shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Need Immediate Care?</h2>
              <p className="mb-4 opacity-90">For dental emergencies, please call our office directly:</p>
              <div className="text-3xl font-bold bg-white/20 p-6 rounded-xl text-center mb-4">
                0321-4591889
              </div>
              <p className="text-center opacity-80">
                Available 24/7 for dental emergencies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
