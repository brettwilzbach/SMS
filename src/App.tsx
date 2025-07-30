import React, { useState } from 'react';
import SEO from './components/SEO';
import { 
  Hammer, 
  Wrench, 
  Zap, 
  Settings, 
  Shield, 
  PaintBucket,
  Check,
  Mail,
  Phone,
  MapPin,
  Users,
  Calendar,
  DollarSign,
  Award
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const modules = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "The Wall Whisperer",
      description: "Stud finding, anchor types, basic wall mounting"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "The Pipe Tamer", 
      description: "Fixing toilets, leaks, and finding shutoff valves"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "The Wire Wrangler",
      description: "Swapping fixtures and electrical basics"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "The Tool Guy",
      description: "Starter tools, safe drill use, avoiding stripped screws"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "The Fix-It Pro",
      description: "Easy home fixes and contractor red flag tips"
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: "Patch & Polish",
      description: "Drywall repair, caulking, and quick paint jobs"
    }
  ];

  const benefits = [
    "StudFinder Toolbelt with all tools included",
    "Real skills taught by real pros", 
    "No judgment, no pressure",
    "Beers after every session"
  ];

  const reasons = [
    "In one episode of Saved by the Bell, Zach fixes a woman's car and I sat there in awe",
    "That Don Draper scene when he fixed the sink was a pivotal moment for me",
    "I want to look and act like Bob Vila",
    "I want to put some hair on my chest"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Hammer className="w-8 h-8 text-blue-800" />
              <span className="text-2xl font-bold text-gray-900">SMS - Soft Men Skills</span>
            </div>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                BREAK OUT YOUR STUD FINDER
              </h1>
              <p className="text-lg mb-8 text-gray-300 leading-relaxed">
                Six-week hands-on workshop series for guys who never learned to hang a shelf — until now.
              </p>
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors inline-flex items-center space-x-2"
              >
                <span>Join the Waitlist</span>
              </button>
              <p className="text-sm mt-4 text-gray-400 italic">
                *Tim "The Tool Man" Taylor–approved grunts optional.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Construction crew working together on building project"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">$500</div>
                <div className="text-sm">Full Series</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Stop Outsourcing Everything
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            Somewhere along the way, we got really good at spreadsheets, but never figured out how to tame a dripping faucet. SMS is for men who are finally ready to stop outsourcing the basics and maybe stop their wife from shaking her head and texting the mom chain for handyman help. It's six weeks of tools, hands-on fixing, and beating your chest and howling at the moon.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
            No judgment, just progress (and beers).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-12 h-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">10-12 Participants</h3>
              <p className="text-gray-600">Small groups for personalized attention</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Calendar className="w-12 h-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sundays 5PM</h3>
              <p className="text-gray-600">1 hour + optional 30min beer hang</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="w-12 h-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Milton, MA</h3>
              <p className="text-gray-600">Garage, workshop, or backyard setting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wall Warrior Series */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wall Warrior Series
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six weeks of hands-on learning that will transform you from helpless to handy. 
              Each session builds on the last, giving you real skills you'll use for life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-100 hover:border-blue-300 transition-colors">
                <div className="text-blue-800 mb-4">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Week {index + 1}: {module.title}
                </h3>
                <p className="text-gray-600">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What You Get</h2>
            <p className="text-xl text-blue-200">
              Everything you need is included. Just show up, suit up, and get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">StudFinder Toolbelt</h3>
              <p className="text-blue-200 text-center mb-6">
                Hand-selected kit containing all the tools needed for each week's project. 
                No guesswork. No trips to the hardware store.
              </p>
              <div className="bg-orange-600 text-white text-center py-3 rounded-lg font-semibold">
                Included with enrollment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why It Works</h2>
            <p className="text-xl text-gray-600">
              We get it. You're not alone in feeling this way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                <div className="w-2 h-16 bg-orange-600 rounded-full flex-shrink-0"></div>
                <p className="text-lg text-gray-700 italic">"{reason}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Tribe */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join the Tribe</h2>
            <p className="text-xl text-gray-600">
              Real guys learning real skills in a judgment-free environment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <img 
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=500" 
              alt="Male construction workers with hard hats and tools"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=500" 
              alt="Men working on home repair project with power tools"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=500" 
              alt="Skilled tradesmen working together on construction site"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Simple Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg border-2 border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Per Class</h3>
              <div className="text-4xl font-bold text-orange-500 mb-4">$100</div>
              <p className="text-gray-300">Pay as you go</p>
            </div>
            <div className="bg-orange-600 p-8 rounded-lg border-2 border-orange-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Best Value
              </div>
              <h3 className="text-2xl font-bold mb-4">Full Series</h3>
              <div className="text-4xl font-bold mb-4">$500</div>
              <p className="text-orange-100">Save $100 + get toolbelt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Signup */}
      <section id="waitlist" className="py-20 bg-blue-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Want In?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get notified when we launch + receive a free tool guide
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:bg-green-500"
              >
                {isSubmitted ? 'Signed Up!' : 'Join Waitlist'}
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Free "Top 10 Tools Every Guy Should Own" guide sent immediately
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <h3 className="text-lg font-semibold mb-4">Opportunities</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Tradesmen partners wanted</li>
                <li>Corporate team building</li>
                <li>Gift cards available</li>
                <li>Media partnerships welcome</li>
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
}

export default App;