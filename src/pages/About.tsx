import React from 'react';
import { Shield, Heart, Users, Award, Stethoscope, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Mission Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
            alt="Medical Team"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              To provide exceptional healthcare with compassion and innovation,
              ensuring every patient receives personalized care and treatment of the highest quality .
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&q=80"
                alt="Hospital History"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Founded in 1995
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Established with a vision to revolutionize healthcare delivery,
                  Healthify began as a small clinic and has grown into a
                  state-of-the-art medical facility.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Growth & Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Over the years, we've continuously evolved, incorporating
                  cutting-edge technology and expanding our services to meet the
                  growing needs of our community.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Today's Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Now recognized as a leading healthcare provider, we continue to
                  set new standards in patient care and medical excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <LeaderCard key={leader.name} {...leader} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Healthify
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Advanced Technology"
              description="State-of-the-art medical equipment and innovative treatments"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="24/7 Emergency Care"
              description="Round-the-clock emergency services with rapid response times"
            />
            <FeatureCard
              icon={<Heart className="w-8 h-8" />}
              title="Patient-First Approach"
              description="Personalized care plans tailored to individual needs"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Expert Team"
              description="Highly qualified healthcare professionals with extensive experience"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8" />}
              title="Accredited Excellence"
              description="Recognized for maintaining highest healthcare standards"
            />
            <FeatureCard
              icon={<Stethoscope className="w-8 h-8" />}
              title="Comprehensive Care"
              description="Wide range of medical services under one roof"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const leaders = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    description: "Leading our medical excellence initiatives with over 20 years of experience in healthcare management."
  },
  {
    name: "Dr. Michael Chen",
    role: "Head of Surgery",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    description: "Pioneering innovative surgical techniques and leading our surgical department since 2010."
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Director of Patient Care",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
    description: "Ensuring exceptional patient experience and maintaining highest standards of care quality."
  }
];

function LeaderCard({ name, role, image, description }: {
  name: string;
  role: string;
  image: string;
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <h4 className="text-blue-600 dark:text-blue-400 font-medium mb-3">
          {role}
        </h4>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
          <div className="text-blue-600 dark:text-blue-400">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}