'use client';

import Image from 'next/image';
import { Music, Users, Sparkles, Calendar, Mail, Phone, Share2, MessageCircle, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <nav className="w-full bg-[#E93F0A] shadow-lg">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/white-logo.png" 
                alt="Isle Dance Logo" 
                width={300} 
                height={100}
                className="object-contain"
              />
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="/" className="text-white/90 hover:text-white transition-colors font-medium">Homepage</a>
              <a href="/workshops" className="text-white/90 hover:text-white transition-colors font-medium">Our Workshops</a>
              <a href="/shop" className="text-white/90 hover:text-white transition-colors font-medium">Our Shop</a>
              <a href="/contact" className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">Contact Us</a>
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
                <a href="/" className="text-white/90 hover:text-white transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Homepage</a>
                <a href="/workshops" className="text-white/90 hover:text-white transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Our Workshops</a>
                <a href="/shop" className="text-white/90 hover:text-white transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Our Shop</a>
                <a href="/contact" className="text-white/90 hover:text-white transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/people-dancing.jpg" 
            alt="People Dancing" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-[1300px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#E93F0A] text-white px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Isle of Man's Dance Community</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Move. Connect.<br />
            <span className="text-[#E93F0A]">Celebrate Together.</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-10 drop-shadow-lg">
            A vibrant, community-driven dance brand bringing people together through energetic events, creativity, and shared experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#events" 
              className="bg-[#E93F0A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d13809] transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Events
            </a>
            <a 
              href="/contact" 
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#E93F0A] rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Dance Events</h3>
              <p className="text-gray-600">
                High-energy dance events that bring the community together for unforgettable nights of music and movement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Community Connection</h3>
              <p className="text-gray-600">
                Building meaningful connections through shared experiences, togetherness, and the joy of dance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#E93F0A] rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Creative Expression</h3>
              <p className="text-gray-600">
                Themed nights, fancy dress, duos, and creative experiences that let you express yourself freely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Upcoming <span className="text-[#E93F0A]">Workshops</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join us for high-energy dance experiences that turn events into shared social celebrations.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-2xl border border-gray-700">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-[#E93F0A] rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-3">Cheerdance Workshops with Bethany Rushby</h3>
                <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#E93F0A]" />
                    <span>19th July 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#E93F0A]" />
                    <span>The Roundhouse Sports Hall</span>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 p-4 rounded-lg border border-gray-700">
                    <div className="text-[#E93F0A] font-semibold mb-1">Ages 9 & Under</div>
                    <div className="text-gray-300">8:30am - 9:15am</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-gray-700">
                    <div className="text-[#E93F0A] font-semibold mb-1">Ages 10 & Over</div>
                    <div className="text-gray-300">9:30am - 10:15am</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Join Bethany Rushby for an energetic cheerdance workshop! Learn exciting routines, improve your technique, and have fun with fellow dancers in a supportive environment.
                </p>
                <a 
                  href="/workshops" 
                  className="inline-block bg-[#E93F0A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d13809] transition-all transform hover:scale-105"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Join the <span className="text-[#E93F0A]">Movement</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Isle Dance is more than events—it's a growing local dance movement creating spaces where people express themselves, connect, and celebrate together.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
              <h2 className="text-4xl font-bold text-[#E93F0A] mb-2">Fun</h2>
              <p className="text-gray-600 whitespace-nowrap">& Inclusive</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h2 className="text-4xl font-bold text-black mb-2">Youthful</h2>
              <p className="text-gray-600 whitespace-nowrap">& Energetic</p>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
              <h2 className="text-4xl font-bold text-[#E93F0A] mb-2">Social</h2>
              <p className="text-gray-600">First</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h2 className="text-4xl font-bold text-black mb-2">Interactive</h2>
              <p className="text-gray-600">Experiences</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Get In <span className="text-[#E93F0A]">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ready to join the Isle Dance community? We'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a 
              href="mailto:info@isledance.im" 
              className="flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E93F0A] hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-[#E93F0A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-black mb-1">Email Us</div>
                <div className="text-gray-600">info@isledance.im</div>
              </div>
            </a>

            <a 
              href="https://wa.me/447624311022" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-200 hover:border-[#E93F0A] hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-[#E93F0A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-black mb-1">WhatsApp Us</div>
                <div className="text-gray-600">+44 7624 311022</div>
              </div>
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center">
            <p className="text-gray-600 mb-6">Follow us on social media for updates and event announcements</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61556144159393" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#E93F0A] rounded-full flex items-center justify-center hover:bg-[#d13809] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/isle.dance" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#E93F0A] rounded-full flex items-center justify-center hover:bg-[#d13809] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@isle.dance" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#E93F0A] rounded-full flex items-center justify-center hover:bg-[#d13809] transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid md:grid-cols-4 gap-8 items-start">
            <div className="text-center">
              <div className="flex justify-center items-center mb-4">
                <Image 
                  src="/white-logo.png" 
                  alt="Isle Dance Logo" 
                  width={300} 
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Bringing movement, music, and community together in a joyful space where dancers of all ages can grow, connect, and shine.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-white font-bold mb-4 text-lg">Policies</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/policies/Health-and-Safety-Policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
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
                  <a href="/policies/Privacy-Policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/Risk-Assessment-Policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Risk Assessment Policy
                  </a>
                </li>
                <li>
                  <a href="/policies/Safe-Guarding.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Safeguarding Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-white font-bold mb-4 text-lg">Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/workshops" className="hover:text-white transition-colors">
                    Workshops
                  </a>
                </li>
                <li>
                  <a href="/shop" className="hover:text-white transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex justify-center gap-3">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61556144159393" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#E93F0A] rounded-full flex items-center justify-center hover:bg-[#d13809] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/isle.dance" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#E93F0A] rounded-full flex items-center justify-center hover:bg-[#d13809] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@isle.dance" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#E93F0A] rounded-full flex items-center justify-center hover:bg-[#d13809] transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
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
          
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Isle Dance. All rights reserved.</p>
            <Image 
              src="/powered-by-lynks.png" 
              alt="Powered by Lynks" 
              width={175} 
              height={58}
              className="object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
