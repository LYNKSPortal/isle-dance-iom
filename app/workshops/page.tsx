'use client';

import Image from 'next/image';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Workshops() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    dancerName: '',
    dancerAge: '',
    danceSchool: '',
    medicalConditions: '',
    parentName: '',
    parentNumber: '',
    parentEmail: '',
    canSignOut: ''
  });

  const [selectedSession, setSelectedSession] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await fetch('/api/workshop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          workshop: 'Cheerdance Workshop - Ages 9 & Under'
        }),
      });
    } catch (error) {
      console.error('Error sending registration email:', error);
    }
    
    window.location.href = 'https://pay.sumup.com/b2c/QH1LJSR3';
  };

  const handleSubmit2 = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await fetch('/api/workshop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          workshop: 'Cheerdance Workshop - Ages 10 & Over'
        }),
      });
    } catch (error) {
      console.error('Error sending registration email:', error);
    }
    
    window.location.href = 'https://pay.sumup.com/b2c/Q6YJJDJK';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="w-full bg-[#E93F0A] shadow-lg">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/white-logo.png" 
                alt="Isle Dance Logo" 
                width={300} 
                height={100}
                className="object-contain"
              />
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link href="/" className="text-white/90 hover:text-white transition-colors font-medium">Homepage</Link>
              <Link href="/workshops" className="text-white transition-colors font-medium border-b-2 border-white">Our Workshops</Link>
              <Link href="/shop" className="text-white/90 hover:text-white transition-colors font-medium">Our Shop</Link>
              <Link href="/contact" className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">Contact Us</Link>
            </div>
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-white/90 hover:text-white transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Homepage</Link>
                <Link href="/workshops" className="text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Our Workshops</Link>
                <Link href="/shop" className="text-white/90 hover:text-white transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Our Shop</Link>
                <Link href="/contact" className="text-white/90 hover:text-white transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-50 to-white">
        <div className="max-w-[1300px] mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#E93F0A] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E93F0A]/10 text-[#E93F0A] px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Learn & Grow</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6">
              Dance <span className="text-[#E93F0A]">Workshops</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our expert-led workshops and take your dance skills to the next level.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 overflow-hidden shadow-lg mb-8">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/people-dancing.jpg"
                alt="Cheerdance Workshop"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="inline-block bg-[#E93F0A] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Upcoming Workshop
                  </div>
                  <h2 className="text-4xl font-bold text-black mb-4">
                    Cheerdance Workshop
                  </h2>
                  <p className="text-xl text-gray-700 mb-2">
                    with <span className="font-bold text-[#E93F0A]">Bethany Rushby</span>
                  </p>
                  <p className="text-lg font-semibold text-black mb-6">Ages 9 & Under</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#E93F0A] mt-1" />
                      <div>
                        <div className="font-semibold text-black">Date</div>
                        <div className="text-gray-600">19th July 2026</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#E93F0A] mt-1" />
                      <div>
                        <div className="font-semibold text-black">Time</div>
                        <div className="text-gray-600">8:30am - 9:15am</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#E93F0A] mt-1" />
                      <div>
                        <div className="font-semibold text-black">Location</div>
                        <div className="text-gray-600">The Roundhouse Sports Hall</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-orange-200">
                    <h3 className="font-bold text-black mb-2">What to Expect</h3>
                    <p className="text-gray-600">
                      Join Bethany Rushby for an energetic cheerdance workshop! Learn exciting routines, improve your technique, and have fun with fellow dancers in a supportive environment.
                    </p>
                  </div>
                </div>

                <div className="md:w-96 bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-2xl font-bold text-black mb-4">Register Now</h3>
                  
                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                      <div className="text-4xl mb-4">✓</div>
                      <h4 className="text-xl font-bold text-green-800 mb-2">Registration Received!</h4>
                      <p className="text-green-700">
                        Thank you for registering. We'll be in touch soon with more details.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-black mb-1">
                          Dancer's Name *
                        </label>
                        <input
                          type="text"
                          name="dancerName"
                          required
                          value={formData.dancerName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                          placeholder="Enter dancer's full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-black mb-1">
                          Dancer's Age *
                        </label>
                        <input
                          type="number"
                          name="dancerAge"
                          required
                          value={formData.dancerAge}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                          placeholder="Enter age"
                          min="1"
                          max="99"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-black mb-1">
                          Current Dance School
                        </label>
                        <input
                          type="text"
                          name="danceSchool"
                          value={formData.danceSchool}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                          placeholder="Which dance school do they attend?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-black mb-1">
                          Medical Conditions
                        </label>
                        <textarea
                          name="medicalConditions"
                          value={formData.medicalConditions}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                          placeholder="Any medical conditions we should be aware of?"
                        />
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold text-black mb-3">Parent/Guardian Details</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-semibold text-black mb-1">
                              Name *
                            </label>
                            <input
                              type="text"
                              name="parentName"
                              required
                              value={formData.parentName}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                              placeholder="Parent/Guardian name"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-black mb-1">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              name="parentNumber"
                              required
                              value={formData.parentNumber}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                              placeholder="Contact number"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-black mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="parentEmail"
                              required
                              value={formData.parentEmail}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                              placeholder="Email address"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">
                          Can the dancer sign out without a parent/guardian? *
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="canSignOut"
                              value="yes"
                              required
                              checked={formData.canSignOut === 'yes'}
                              onChange={handleChange}
                              className="w-4 h-4 text-[#E93F0A]"
                            />
                            <span className="text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="canSignOut"
                              value="no"
                              required
                              checked={formData.canSignOut === 'no'}
                              onChange={handleChange}
                              className="w-4 h-4 text-[#E93F0A]"
                            />
                            <span className="text-gray-700">No</span>
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#E93F0A] text-white py-3 rounded-full font-semibold hover:bg-[#d13809] transition-all transform hover:scale-105"
                      >
                        Continue to Payment
                      </button>
                      
                      <div className="flex justify-center mt-4">
                        <Image 
                          src="/sumup-logo.svg" 
                          alt="SumUp" 
                          width={125} 
                          height={40}
                          className="opacity-60"
                        />
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 overflow-hidden shadow-lg">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/people-dancing.jpg"
                alt="Cheerdance Workshop"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="inline-block bg-[#E93F0A] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Upcoming Workshop
                  </div>
                  <h2 className="text-4xl font-bold text-black mb-4">
                    Cheerdance Workshop
                  </h2>
                  <p className="text-xl text-gray-700 mb-2">
                    with <span className="font-bold text-[#E93F0A]">Bethany Rushby</span>
                  </p>
                  <p className="text-lg font-semibold text-black mb-6">Ages 10 & Over</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#E93F0A] mt-1" />
                      <div>
                        <div className="font-semibold text-black">Date</div>
                        <div className="text-gray-600">19th July 2026</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#E93F0A] mt-1" />
                      <div>
                        <div className="font-semibold text-black">Time</div>
                        <div className="text-gray-600">9:30am - 10:15am</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#E93F0A] mt-1" />
                      <div>
                        <div className="font-semibold text-black">Location</div>
                        <div className="text-gray-600">The Roundhouse Sports Hall</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-orange-200">
                    <h3 className="font-bold text-black mb-2">What to Expect</h3>
                    <p className="text-gray-600">
                      Join Bethany Rushby for an energetic cheerdance workshop! Learn exciting routines, improve your technique, and have fun with fellow dancers in a supportive environment.
                    </p>
                  </div>
                </div>

                <div className="md:w-96 bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-2xl font-bold text-black mb-4">Register Now</h3>
                  
                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                      <div className="text-4xl mb-4">✓</div>
                      <h4 className="text-xl font-bold text-green-800 mb-2">Registration Received!</h4>
                      <p className="text-green-700">
                        Thank you for registering. We'll be in touch soon with more details.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit2} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-black mb-1">
                          Dancer's Name *
                        </label>
                        <input
                          type="text"
                          name="dancerName"
                          required
                          value={formData.dancerName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                          placeholder="Enter dancer's full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-black mb-1">
                          Dancer's Age *
                        </label>
                        <input
                          type="number"
                          name="dancerAge"
                          required
                          value={formData.dancerAge}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                          placeholder="Enter age"
                          min="1"
                          max="99"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-black mb-1">
                          Current Dance School
                        </label>
                        <input
                          type="text"
                          name="danceSchool"
                          value={formData.danceSchool}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                          placeholder="Which dance school do they attend?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-black mb-1">
                          Medical Conditions
                        </label>
                        <textarea
                          name="medicalConditions"
                          value={formData.medicalConditions}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                          placeholder="Any medical conditions we should be aware of?"
                        />
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold text-black mb-3">Parent/Guardian Details</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-semibold text-black mb-1">
                              Name *
                            </label>
                            <input
                              type="text"
                              name="parentName"
                              required
                              value={formData.parentName}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                              placeholder="Parent/Guardian name"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-black mb-1">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              name="parentNumber"
                              required
                              value={formData.parentNumber}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                              placeholder="Contact number"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-black mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="parentEmail"
                              required
                              value={formData.parentEmail}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                              placeholder="Email address"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">
                          Can the dancer sign out without a parent/guardian? *
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="canSignOut"
                              value="yes"
                              required
                              checked={formData.canSignOut === 'yes'}
                              onChange={handleChange}
                              className="w-4 h-4 text-[#E93F0A]"
                            />
                            <span className="text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="canSignOut"
                              value="no"
                              required
                              checked={formData.canSignOut === 'no'}
                              onChange={handleChange}
                              className="w-4 h-4 text-[#E93F0A]"
                            />
                            <span className="text-gray-700">No</span>
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#E93F0A] text-white py-3 rounded-full font-semibold hover:bg-[#d13809] transition-all transform hover:scale-105"
                      >
                        Continue to Payment
                      </button>
                      
                      <div className="flex justify-center mt-4">
                        <Image 
                          src="/sumup-logo.svg" 
                          alt="SumUp" 
                          width={125} 
                          height={40}
                          className="opacity-60"
                        />
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid md:grid-cols-4 gap-8 items-start">
            <div className="text-center">
              <Link href="/" className="flex justify-center items-center mb-4">
                <Image 
                  src="/white-logo.png" 
                  alt="Isle Dance Logo" 
                  width={300} 
                  height={100}
                  className="object-contain"
                />
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                Bringing movement, music, and community together in a joyful space where dancers of all ages can grow, connect, and shine.
              </p>
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Isle Dance. All rights reserved.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-white font-bold mb-4 text-lg">Policies</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/policies/General%20Information%20JULY%202026.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    General Information
                  </a>
                </li>
                <li>
                  <a href="/policies/Health%20and%20Safety%20Policy%20JULY%202026.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Health and Safety Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/Isle-Dance-Lyrical.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Isle Dance Lyrical
                  </a>
                </li>
                <li>
                  <a href="/policies/Isle-Dance-Workshop-Policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Workshop Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/PRIVACY%20POLICY%20JULY%202026.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/Risk%20Assessment%20Policy%20JULY%202026.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Risk Assessment Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/Rules%20and%20Regulations%20JULY%202026.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Rules and Regulations
                  </a>
                </li>
                <li>
                  <a href="/policies/Safeguarding%20JULY%202026.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Safeguarding Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-white font-bold mb-4 text-lg">Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/workshops" className="hover:text-white transition-colors">
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-white transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-white font-bold mb-4 text-lg">Location</h3>
              <div className="w-full h-48 rounded-lg overflow-hidden mb-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.8!2d-4.4797!3d54.1497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDA4JzU5LjAiTiA0wrAyOCc0Ny4wIlc!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Isle Dance Location"
                />
              </div>
              <p className="text-gray-400 text-sm">The Roundhouse Sports Hall</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
