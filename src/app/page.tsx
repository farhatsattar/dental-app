import Image from "next/image";
import Link from "next/link";
import Script from "next/script"; // 👈 yeh import zaroor karo
import { FaTooth, FaHeartbeat, FaUserMd, FaCalendarCheck } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Dental Surgery Clinic</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Providing exceptional dental care with state-of-the-art technology and compassionate service
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/appointment"
              className="bg-white text-teal-700 hover:bg-teal-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300"
            >
              Book Appointment
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-green-200 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <FaTooth className="text-4xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                General Dentistry
              </h3>
              <p className="text-gray-600">
                Comprehensive dental care including cleanings, fillings, and preventive treatments.
              </p>
            </div>

            <div className="bg-green-200 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <FaHeartbeat className="text-4xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Teeth Whitening
              </h3>
              <p className="text-gray-600">
                Professional whitening treatments to brighten your smile.
              </p>
            </div>

            <div className="bg-green-200 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <FaUserMd className="text-4xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Dental Implants
              </h3>
              <p className="text-gray-600">
                Restorative dental implants for missing teeth.
              </p>
            </div>

            <div className="bg-green-200 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <FaCalendarCheck className="text-4xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Orthodontics
              </h3>
              <p className="text-gray-600">
                Braces and aligners to straighten teeth and correct bite issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <Image
                src="/images/dr2.jpg"
                alt="Dental Clinic"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-150 object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-teal-800">
                Exceptional Dental Care
              </h2>
              <p className="text-gray-700 mb-4">
                At Dental Surgery Clinic, we are committed to providing the highest quality dental care in a comfortable and welcoming environment.
              </p>
              <p className="text-gray-700 mb-6">
                We believe in treating each patient with respect and compassion, taking the time to understand your needs and concerns.
              </p>
              <Link
                href="/about"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Healthier Smile?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and take the first step towards optimal oral health.
          </p>
          <Link
            href="/appointment"
            className="bg-white text-teal-700 hover:bg-teal-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* 👇 Yeh script bilkul page ke end me hai */}
      <Script src="/js/dental_chatbot_integration.js" strategy="afterInteractive" />
    </div>
  );
}
