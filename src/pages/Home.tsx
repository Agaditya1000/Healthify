import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Stethoscope, Clock, Shield, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
            alt="Hospital Background"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Experience world-class healthcare with compassionate service and cutting-edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/appointments"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Healthify
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-blue-600" />}
              title="24/7 Care"
              description="Round-the-clock medical services for your peace of mind"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-blue-600" />}
              title="Expert Doctors"
              description="Experienced healthcare professionals dedicated to your well-being"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Safe & Secure"
              description="State-of-the-art facilities with the highest safety standards"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Calendar className="w-6 h-6" />}
              title="Online Booking"
              description="Schedule appointments easily through our online platform"
            />
            <ServiceCard
              icon={<Stethoscope className="w-6 h-6" />}
              title="Consultations"
              description="Expert medical consultations with our specialists"
            />
            <ServiceCard
              icon={<Award className="w-6 h-6" />}
              title="Quality Care"
              description="Premium healthcare services with a personal touch"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <div className="text-blue-600 dark:text-blue-400">{icon}</div>
        </div>
        <h3 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}