import Image from 'next/image';
import { FaUserMd, FaAward, FaHandHoldingHeart } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">About Our Dental Clinic</h1>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        {/* Clinic Story */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2">
            <Image 
              src="/dr.png" 
              alt="Dental Clinic Interior" 
              width={300}
              height={200}
              className="rounded-lg shadow-lg w-full h-150 object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Established in 2010, Dental Surgery Clinic has been serving the community with exceptional dental care for nearly two decades. Our mission is to provide comprehensive, compassionate, and high-quality dental services in a comfortable and welcoming environment.
            </p>
            <p className="text-gray-600 mb-4">
              We believe that oral health is an integral part of overall health and wellbeing. Our team is dedicated to helping patients achieve and maintain optimal oral health through preventive care, education, and state-of-the-art treatments.
            </p>
            <p className="text-gray-600">
              Our clinic combines advanced technology with a personal touch, ensuring that each patient receives individualized care that meets their unique dental needs and concerns.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaUserMd className="text-4xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Excellence</h3>
              <p className="text-gray-600">We maintain the highest standards of dental care and continuously update our skills and technology.</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaHandHoldingHeart className="text-4xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Compassion</h3>
              <p className="text-gray-600">We treat each patient with kindness, respect, and understanding of their individual needs.</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FaAward className="text-4xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Integrity</h3>
              <p className="text-gray-600">We maintain transparency and honesty in all our interactions with patients and colleagues.</p>
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/dr1.png" 
                alt="Dr.Zafar" 
                width={400}
                height={800}
                className="w-full h-150 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr.Zafar</h3>
                <p className="text-teal-600 font-medium">Oral Surgeon</p>
                <p className="text-gray-600 mt-2">Dr. Zafar is an expert in complex dental procedures and oral surgery with 15 years of experience.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/images/dr4.png" 
                alt="Dr.farhat" 
                width={400}
                height={300}
                className="w-full h-150 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr.Farhat</h3>
                <p className="text-teal-600 font-medium">General Dentist</p>
                <p className="text-gray-600 mt-2">Dr. Farhat With over 12 years of experience, specializes in restorative and cosmetic dentistry..</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/images/dr3.jpg" 
                alt="Dr.seema" 
                width={400}
                height={300}
                className="w-full h-150 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Dr. Seema</h3>
                <p className="text-teal-600 font-medium">Pediatric Dentist</p>
                <p className="text-gray-600 mt-2">Specializing in children's dental care, Dr.Seema creates a comfortable environment for young patients.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Features */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Clinic?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
              <p>We use the latest dental technology for accurate diagnosis and efficient treatments.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p>Our team of specialists has decades of combined experience in dental care.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Comfortable Environment</h3>
              <p>We prioritize patient comfort with a calming atmosphere and gentle approach.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}