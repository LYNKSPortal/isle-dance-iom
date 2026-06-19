'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Send, ArrowLeft, Menu, X, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
              <Link href="/workshops" className="text-white/90 hover:text-white transition-colors font-medium">Our Workshops</Link>
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
                <Link href="/workshops" className="text-white/90 hover:text-white transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Our Workshops</Link>
                <Link href="/shop" className="text-white/90 hover:text-white transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Our Shop</Link>
                <Link href="/contact" className="text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
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
              <Mail className="w-4 h-4" />
              <span className="text-sm font-semibold">Get In Touch</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6">
              Contact <span className="text-[#E93F0A]">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our events, workshops, or want to get involved? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                  <div className="w-12 h-12 bg-[#E93F0A] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Email</h3>
                    <a 
                      href="mailto:info@isledance.im" 
                      className="text-gray-600 hover:text-[#E93F0A] transition-colors"
                    >
                      info@isledance.im
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-[#E93F0A] rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">WhatsApp</h3>
                    <a 
                      href="https://wa.me/447624311022" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#E93F0A] transition-colors"
                    >
                      +44 7624 311022
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Message us anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                  <div className="w-12 h-12 bg-[#E93F0A] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Location</h3>
                    <p className="text-gray-600">Isle of Man</p>
                    <p className="text-sm text-gray-500 mt-1">Serving the local dance community</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Response Time</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="text-sm text-gray-500 mt-1">Weekend inquiries answered on Monday</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100">
                <h3 className="font-bold text-black mb-3">Follow Us</h3>
                <p className="text-gray-600 mb-4">Stay updated with our latest events and news on social media</p>
                <div className="flex gap-3">
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

            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800 font-semibold">✓ Message sent successfully!</p>
                  <p className="text-green-700 text-sm mt-1">We'll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-800 font-semibold">✗ Failed to send message</p>
                  <p className="text-red-700 text-sm mt-1">Please try again or email us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E93F0A] text-white py-4 rounded-full font-semibold hover:bg-[#d13809] transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We'll get back to you as soon as possible, usually within 24 hours.
                </p>
              </form>
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
