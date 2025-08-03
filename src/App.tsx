import React, { useState } from 'react';
import { 
  Hammer, 
  Wrench, 
  Zap, 
  Check, 
  Mail, 
  MapPin, 
  Calendar, 
  Users, 
  Settings, 
  Shield, 
  PaintBucket 
} from 'lucide-react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';

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
    "Wait until the boys at the office see that I have acquired tangible, real life skills, and that I can do hard things"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navbar />

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
                src="/tool-time-hero.jpg" 
                alt="Tool Time with Tim Taylor and Al Borland"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
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

      {/* Why I Started SMS - Founder Video */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why I Started SMS
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Hi, I'm Brett Wilzbach, a Milton resident and founder of Saturday Morning Skills. 
                I created SMS after noticing how many of us (myself included) were missing basic 
                home repair knowledge that our dads or grandfathers once had.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This isn't a franchise or national chain - it's a local community of Milton guys 
                learning together in a judgment-free zone. Watch my quick story below.
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src="/HideyHo.jpg" 
                  alt="Brett Wilzbach" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-800" 
                />
                <div>
                  <p className="font-semibold">Brett Wilzbach</p>
                  <p className="text-sm text-gray-600">Founder, SMS Milton</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-gray-100 rounded-lg shadow-lg aspect-video flex items-center justify-center relative overflow-hidden">
                {/* Replace this with your actual video embed code when ready */}
                <div className="absolute inset-0 flex items-center justify-center bg-blue-900/10">
                  <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-center text-gray-500 absolute bottom-4 left-0 right-0">
                  Upload your video here to share your SMS story
                </p>
              </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="rounded-lg shadow-lg h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=500" 
                alt="Male construction workers with hard hats and tools"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg shadow-lg h-64 overflow-hidden">
              <img 
                src="/DadsofMilton.jpg" 
                alt="Dads of Milton group"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg shadow-lg h-64 overflow-hidden bg-gray-100">
              <img 
                src="/Dad-A-Base.jpg" 
                alt="Dad-A-Base toolkit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Simple Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg border-2 border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Drop-in Session</h3>
              <div className="text-4xl font-bold text-orange-500 mb-4">$150</div>
              <p className="text-gray-300">Pay as you go</p>
            </div>
            <div className="bg-orange-600 p-8 rounded-lg border-2 border-orange-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Best Value
              </div>
              <h3 className="text-2xl font-bold mb-4">Fall Session</h3>
              <div className="text-4xl font-bold mb-4">$750</div>
              <p className="text-orange-100">Best value for all workshops</p>
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
            Get notified when we launch our next workshop series
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
          </form>
          
          <div className="mt-12">
            <img 
              src="/HideyHo.jpg" 
              alt="Wilson from Home Improvement peeking over the fence saying Hidey Ho"
              className="mx-auto rounded-lg shadow-lg max-w-full max-h-96 object-contain"
            />
          </div>
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
                <li><a href="/tradesmen-partners" className="hover:text-white transition-colors">Tradesmen partners wanted</a></li>
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