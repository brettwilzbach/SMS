import React, { useState } from 'react';
import { 
  Hammer, 
  Wrench, 
  Zap, 
  Check,
  Mail,
  MapPin,
  Users,
  Calendar
} from 'lucide-react';
import Navbar from './Navbar';

const TradesmenPartners: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    experience: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here - in a real app, this would send data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    "Competitive compensation for your expertise",
    "Flexible teaching schedule (evenings and weekends)",
    "Build your network and client base",
    "Share your passion for the trade",
    "Make a difference in your community"
  ];

  const requirements = [
    "Minimum 5 years of professional experience",
    "Teaching or mentoring experience preferred",
    "Excellent communication skills",
    "Patience and enthusiasm for teaching beginners"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tradesmen Partners Wanted
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Share your expertise. Build the next generation of handy men. Get paid for your knowledge.
            </p>
            <button 
              onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for skilled tradespeople who are passionate about sharing their knowledge and helping others learn practical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Wrench className="w-8 h-8 text-blue-800 mr-3" />
                Benefits for Partners
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-8 h-8 text-blue-800 mr-3" />
                What We're Looking For
              </h3>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Workshop Series */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Workshop Series
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're seeking experts in these areas to lead engaging, hands-on workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-100">
              <Hammer className="w-12 h-12 text-blue-800 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                The Wall Whisperer
              </h3>
              <p className="text-gray-600">
                Stud finding, anchor types, basic wall mounting, and hanging various items securely.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-100">
              <Wrench className="w-12 h-12 text-blue-800 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                The Pipe Tamer
              </h3>
              <p className="text-gray-600">
                Fixing toilets, addressing leaks, finding shutoff valves, and basic plumbing repairs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-100">
              <Zap className="w-12 h-12 text-blue-800 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                The Wire Wrangler
              </h3>
              <p className="text-gray-600">
                Swapping light fixtures, electrical basics, safety, and simple electrical troubleshooting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Compensation */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Schedule & Location</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Calendar className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Workshop Schedule</h3>
                    <p className="text-blue-200">Sundays at 5:00 PM</p>
                    <p className="text-blue-200">1 hour instruction + 30 min social</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Location</h3>
                    <p className="text-blue-200">Milton, MA</p>
                    <p className="text-blue-200">Workshop space provided</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
              <div className="bg-blue-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Tradesmen Opportunities</h3>
                <p className="text-xl text-white mb-4">
                  We offer rates that will make it worth your while.
                </p>
                <p className="text-lg text-blue-200 mb-6">
                  Contact us to discuss compensation details and how you can join our team of skilled instructors.
                </p>
                <button 
                  onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apply to Partner With Us
            </h2>
            <p className="text-xl text-gray-600">
              Share your expertise and help build a community of capable men.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
                <p className="text-gray-600">
                  Thank you for your interest. We'll review your information and contact you within 3-5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="specialty" className="block text-gray-700 font-medium mb-2">Trade Specialty</label>
                    <select
                      id="specialty"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your specialty</option>
                      <option value="carpentry">Carpentry</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="drywall">Drywall/Painting</option>
                      <option value="general">General Contractor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Years of Experience</label>
                  <input
                    type="number"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    min="0"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Tell us about yourself and your teaching experience</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Hammer className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold">SMS - Soft Men Skills</span>
              </div>
              <p className="text-gray-400">
                BREAK OUT YOUR STUD FINDER. Master the skills you never learned.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Milton, MA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@softmenskills.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#application" className="hover:text-white transition-colors">Apply Now</a></li>
                <li><a href="/" className="hover:text-white transition-colors">About SMS</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Workshop Schedule</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Soft Men Skills. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TradesmenPartners;
