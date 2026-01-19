import Image from 'next/image';
import { FaUserMd, FaAward, FaHandHoldingHeart, FaTooth, FaSmile, FaUserNurse } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dental-primary to-dental-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Dental Clinic</h1>
          <p className="text-xl max-w-3xl mx-auto text-dental-secondary">
            Providing exceptional dental care with compassion and cutting-edge technology for over a decade
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Clinic Story */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-dental-primary rounded-full opacity-10"></div>
              <Image
                src="/dr.png"
                alt="Dental Clinic Interior"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover z-10 border-4 border-white"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-black mb-6 text-lg leading-relaxed">
              Established in 2010, Dental Surgery Clinic has been serving the community with exceptional dental care for over a decade. Our mission is to provide comprehensive, compassionate, and high-quality dental services in a comfortable and welcoming environment.
            </p>
            <p className="text-black mb-6 text-lg leading-relaxed">
              We believe that oral health is an integral part of overall health and wellbeing. Our team is dedicated to helping patients achieve and maintain optimal oral health through preventive care, education, and state-of-the-art treatments.
            </p>
            <p className="text-black text-lg leading-relaxed">
              Our clinic combines advanced technology with a personal touch, ensuring that each patient receives individualized care that meets their unique dental needs and concerns.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our commitment to excellence in dental care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group text-center hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="bg-dental-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-primary group-hover:text-white transition-all duration-300">
                  <FaUserMd className="text-2xl text-dental-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-black">
                  We maintain the highest standards of dental care and continuously update our skills and technology.
                </p>
              </div>
            </div>

            <div className="card group text-center hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="bg-dental-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-primary group-hover:text-white transition-all duration-300">
                  <FaHandHoldingHeart className="text-2xl text-dental-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compassion</h3>
                <p className="text-black">
                  We treat each patient with kindness, respect, and understanding of their individual needs.
                </p>
              </div>
            </div>

            <div className="card group text-center hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="bg-dental-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-primary group-hover:text-white transition-all duration-300">
                  <FaAward className="text-2xl text-dental-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
                <p className="text-black">
                  We maintain transparency and honesty in all our interactions with patients and colleagues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Expert Team</h2>
            <p className="section-subtitle">
              Experienced professionals dedicated to your oral health and well-being
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group hover:shadow-xl transition-all duration-300">
              <div className="overflow-hidden">
                <Image
                  src="/dr1.png"
                  alt="Dr. Zafar"
                  width={400}
                  height={300}
                  className="w-full h-95 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Zafar</h3>
                  <p className="text-dental-primary font-semibold mb-3">Oral Surgeon</p>
                  <p className="text-black">
                    Dr. Zafar is an expert in complex dental procedures and oral surgery with 15 years of experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="card group hover:shadow-xl transition-all duration-300">
              <div className="overflow-hidden">
                <Image
                  src="/images/image5.jpg"
                  alt="Dr. seema"
                  width={400}
                  height={300}
                  className="w-full h-90 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Seema</h3>
                  <p className="text-dental-primary font-semibold mb-3">General Dentist</p>
                  <p className="text-black">
                    Dr. Seema with over 12 years of experience, specializes in restorative and cosmetic dentistry.
                  </p>
                </div>
              </div>
            </div>

            <div className="card group hover:shadow-xl transition-all duration-300">
              <div className="overflow-hidden">
                <Image
                  src="/images/dr3.jpg"
                  alt="Dr. fariya"
                  width={400}
                  height={300}
                  className="w-full h-90 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. fariya</h3>
                  <p className="text-dental-primary font-semibold mb-3">Pediatric Dentist</p>
                  <p className="text-black">
                    Specializing in children's dental care, Dr. fariya creates a comfortable environment for young patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Features */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Our Clinic?</h2>
            <p className="section-subtitle">
              Experience the difference that sets us apart from other dental practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="bg-dental-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-primary group-hover:text-white transition-all duration-300">
                <FaTooth className="text-2xl text-dental-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Technology</h3>
              <p className="text-black">
                We use the latest dental technology for accurate diagnosis and efficient treatments.
              </p>
            </div>

            <div className="card p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="bg-dental-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-primary group-hover:text-white transition-all duration-300">
                <FaUserNurse className="text-2xl text-dental-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Experienced Team</h3>
              <p className="text-black">
                Our team of specialists has decades of combined experience in dental care.
              </p>
            </div>

            <div className="card p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="bg-dental-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dental-primary group-hover:text-white transition-all duration-300">
                <FaSmile className="text-2xl text-dental-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comfortable Environment</h3>
              <p className="text-black">
                We prioritize patient comfort with a calming atmosphere and gentle approach.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}