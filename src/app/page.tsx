import Image from "next/image";
import Link from "next/link";
import Script from "next/script"; // 👈 yeh import zaroor karo
import { FaTooth, FaHeartbeat, FaUserMd, FaCalendarCheck, FaStar, FaShieldAlt, FaUserNurse } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiDiamondTrophy } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { IoIosClock } from "react-icons/io";
import { GrShieldSecurity } from "react-icons/gr";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        {/* Exact JPG Background Image as saved in directory */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/image3.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Text container with clear outline */}
        <div className="container mx-auto px-2 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-3xl border-2 border-black/50 rounded-xl p-8 bg-black/5 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Premium <span className="text-dental-primary">Dental Care</span> for Your Family
              </h1>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
                Experience world-class dental treatments with our expert team using advanced technology in a comfortable, caring environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/appointment"
                  className="btn btn-primary  px-8 py-4 text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-outline px-8 py-4 text-lg font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
<section className="py-5 bg-gray-800 border border-black-500 rounded-xl">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">

      {/* Happy Patients */}
      <div className="flex items-center justify-center">
        <div className="text-center">
          <FaPeopleGroup className="mx-auto text-5xl text-dental-primary mb-2" />
          <div className="text-3xl font-bold text-dental-primary">
            5000+
          </div>
          <div className="text-sm text-dental-text-light">
            Happy Patients
          </div>
        </div>
      </div>

      {/* Years Experience */}
      <div className="flex items-center justify-center">
        <div className="text-center">
          <GiDiamondTrophy className="mx-auto text-5xl text-dental-primary mb-2" />
          <div className="text-3xl font-bold text-dental-primary">
            15+
          </div>
          <div className="text-sm text-dental-text-light">
            Years Experience
          </div>
        </div>
      </div>

      {/* Expert Doctors */}
      <div className="flex items-center justify-center">
        <div className="text-center">
          <FaUserDoctor className="mx-auto text-5xl text-dental-primary mb-2" />
          <div className="text-3xl font-bold text-dental-primary">
            25+
          </div>
          <div className="text-sm text-dental-text-light">
            Expert Doctors
          </div>
        </div>
      </div>

      {/* Emergency Care */}
      <div className="flex items-center justify-center">
        <div className="text-center">
          <IoIosClock className="mx-auto text-5xl text-dental-primary mb-2" />
          <div className="text-3xl font-bold text-dental-primary">
            24/7
          </div>
          <div className="text-sm text-dental-text-light">
            Emergency Care
          </div>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* Services Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="section-header">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-subtitle text-black">
              Comprehensive dental care tailored to meet your individual needs with the latest technology and techniques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative group overflow-hidden rounded-xl shadow-sm border border-dental-border hover:shadow-xl transition-all duration-300">
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                  backgroundImage: "url('/images/image6.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-black mb-3 drop-shadow-lg">General Dentistry</h3>
                <p className="text-black mb-4 drop-shadow-md">
                  Comprehensive dental care including cleanings, fillings, and preventive treatments.
                </p>
                <Link href="/appointment" className="text-black font-medium hover:text-dental-primary-dark flex items-center drop-shadow-md">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-sm border border-dental-border hover:shadow-xl transition-all duration-300">
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                  backgroundImage: "url('/images/image7.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-black mb-3 drop-shadow-lg">Cosmetic Dentistry</h3>
                <p className="text-black mb-4 drop-shadow-md">
                  Transform your smile with veneers, crowns, and professional whitening treatments.
                </p>
                <Link href="/appointment" className="text-black font-medium hover:text-dental-primary-dark flex items-center drop-shadow-md">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-sm border border-dental-border hover:shadow-xl transition-all duration-300">
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                  backgroundImage: "url('/images/image9.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-black mb-3 drop-shadow-lg">Dental Implants</h3>
                <p className="text-black mb-4 drop-shadow-md">
                  Restorative dental implants for missing teeth with long-lasting results.
                </p>
                <Link href="/appointment" className="text-black font-medium hover:text-dental-primary-dark flex items-center drop-shadow-md">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-sm border border-dental-border hover:shadow-xl transition-all duration-300">
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                  backgroundImage: "url('/images/image10.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-black mb-3 drop-shadow-lg">Orthodontics</h3>
                <p className="text-black mb-4 drop-shadow-md">
                  Braces and aligners to straighten teeth and correct bite issues.
                </p>
                <Link href="/appointment" className="text-black font-medium hover:text-dental-primary-dark flex items-center drop-shadow-md">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-purple-200">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/images/dr2.jpg"
                alt="Dental Clinic Interior"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="section-title text-left">Why Choose Our Dental Clinic</h2>
              <p className="text-black mb-8 text-lg">
                We combine advanced dental technology with compassionate care to provide exceptional treatment experiences for our patients.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-dental-primary/10 p-3 rounded-lg mr-4">
                    <FaStar className="text-blue text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Professionals</h3>
                    <p className="text-black">Our team consists of highly qualified dentists with years of experience.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-dental-primary/10 p-3 rounded-lg mr-4">
                    <FaShieldAlt className="text-blue text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Technology</h3>
                    <p className="text-black">State-of-the-art equipment for precise diagnosis and treatment.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-dental-primary/10 p-3 rounded-lg mr-4">
                    <FaUserNurse className="text-blue text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Patient-Centered Care</h3>
                    <p className="text-black">Personalized treatment plans tailored to your unique needs.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="btn btn-primary mt-8 px-6 py-3 font-semibold"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-dental-primary to-dental-accent text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Healthier Smile?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-dental-secondary">
            Schedule your appointment today and take the first step towards optimal oral health.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/appointment"
              className="btn btn-primary border bg-white text-dental-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Book Your Appointment
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary border border-white text-dental-primary hover:bg-white hover:text-dental-primary px-8 py-4 text-lg font-semibold"
            >
              Call Us Now
            </Link>
          </div>
        </div>
      </section>

      {/* 👇 Yeh script bilkul page ke end me hai */}
      <Script src="/js/dental_chatbot_integration.js" strategy="afterInteractive" />
    </div>
  );
}
