'use client';

import { useState } from 'react';
import { FaCalendarAlt, FaUser, FaTooth, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Appointment Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">Book an Appointment</h1>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Schedule your next dental visit with us. We'll confirm your appointment via email or phone within 24 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Appointment Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {submitted ? (
                <div className="bg-teal-100 border border-teal-400 text-teal-700 px-4 py-8 rounded-lg text-center">
                  <h2 className="text-2xl font-bold mb-4">Appointment Request Received!</h2>
                  <p className="mb-4">Thank you for scheduling with us. We will contact you shortly to confirm your appointment.</p>
                  <p className="font-medium">We look forward to seeing you at our clinic.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule Your Visit</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="flex text-gray-700 mb-2 items-center">
                        <FaUser className="mr-2 text-teal-600" /> Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="flex text-gray-700 mb-2 items-center">
                        <FaPhone className="mr-2 text-teal-600" /> Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your phone number"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="flex text-gray-700 mb-2 items-center">
                        <FaEnvelope className="mr-2 text-teal-600" /> Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your email address"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="flex text-gray-700 mb-2 items-center">
                        <FaTooth className="mr-2 text-teal-600" /> Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                      <label htmlFor="date" className="flex text-gray-700 mb-2 items-center">
                        <FaCalendarAlt className="mr-2 text-teal-600" /> Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="flex text-gray-700 mb-2 items-center">
                        <FaClock className="mr-2 text-teal-600" /> Preferred Time
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Any specific concerns or requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full"
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
                    className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg w-full text-center transition duration-300"
                  >
                    📅 Book on WhatsApp
                  </a>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointment Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Before Your Visit</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Arrive 15 minutes early for your first appointment</li>
                    <li>Bring your insurance information</li>
                    <li>Have a list of current medications ready</li>
                    <li>Wear comfortable clothing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What to Expect</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Complete medical history review</li>
                    <li>Oral examination and consultation</li>
                    <li>Digital X-rays if necessary</li>
                    <li>Detailed treatment plan discussion</li>
                    <li>Professional cleaning for regular checkups</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">Cancellation Policy</h3>
                  <p className="text-gray-600">
                    Please provide at least 24 hours notice for appointment cancellations to avoid fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold mb-4">Need Immediate Care?</h2>
              <p className="mb-4">For dental emergencies, please call our office directly:</p>
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
