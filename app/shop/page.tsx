'use client';

import Image from 'next/image';
import { ShoppingBag, ArrowLeft, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Shop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    size: '',
    color: '',
    fullName: '',
    email: '',
    phone: '',
    questions: ''
  });

  const [tshirtFormData, setTshirtFormData] = useState({
    size: '',
    color: '',
    fullName: '',
    email: '',
    phone: '',
    questions: ''
  });

  const [bottleFormData, setBottleFormData] = useState({
    size: '750ml',
    fullName: '',
    email: '',
    phone: '',
    questions: ''
  });

  const [currentHoodieImage, setCurrentHoodieImage] = useState(0);
  const hoodieImages = [
    '/shop/hoodie/hoodie-01.jpg',
    '/shop/hoodie/hoodie-02.jpg',
    '/shop/hoodie/hoodie-03.jpg',
    '/shop/hoodie/hoodie-04.jpg',
    '/shop/hoodie/hoodie-05.jpg',
    '/shop/hoodie/hoodie-06.jpg',
    '/shop/hoodie/hoodie-07.jpg'
  ];

  const nextHoodieImage = () => {
    setCurrentHoodieImage((prev) => (prev + 1) % hoodieImages.length);
  };

  const prevHoodieImage = () => {
    setCurrentHoodieImage((prev) => (prev - 1 + hoodieImages.length) % hoodieImages.length);
  };

  const [currentTshirtImage, setCurrentTshirtImage] = useState(0);
  const tshirtImages = [
    '/shop/tshirt/tshirt-01.jpg',
    '/shop/tshirt/tshirt-02.jpg',
    '/shop/tshirt/tshirt-03.jpg',
    '/shop/tshirt/tshirt-04.jpg',
    '/shop/tshirt/tshirt-05.jpg',
    '/shop/tshirt/tshirt-06.jpg',
    '/shop/tshirt/tshirt-07.jpg',
    '/shop/tshirt/tshirt-08.jpg'
  ];

  const nextTshirtImage = () => {
    setCurrentTshirtImage((prev) => (prev + 1) % tshirtImages.length);
  };

  const prevTshirtImage = () => {
    setCurrentTshirtImage((prev) => (prev - 1 + tshirtImages.length) % tshirtImages.length);
  };

  const [currentBottleImage, setCurrentBottleImage] = useState(0);
  const bottleImages = [
    '/shop/water-bottle/waterbottle-01.jpg'
  ];

  const nextBottleImage = () => {
    setCurrentBottleImage((prev) => (prev + 1) % bottleImages.length);
  };

  const prevBottleImage = () => {
    setCurrentBottleImage((prev) => (prev - 1 + bottleImages.length) % bottleImages.length);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Hoodie order submitted:', formData);
    
    // Determine payment link based on size
    let paymentLink = '';
    if (formData.size === 'kids-3-4' || formData.size === 'kids-5-6' || formData.size === 'kids-7-8' || 
        formData.size === 'kids-9-11' || formData.size === 'kids-12-14') {
      paymentLink = 'https://pay.sumup.com/b2c/Q83T3QTY'; // £32.00
    } else if (formData.size === 'xs' || formData.size === 'small' || formData.size === 'medium' || 
               formData.size === 'large' || formData.size === 'xl' || formData.size === '2xl' || formData.size === '3xl') {
      paymentLink = 'https://pay.sumup.com/b2c/QFD5ZFID'; // £40.00
    }
    
    if (paymentLink) {
      try {
        await fetch('/api/shop', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            productType: 'Isle Dance Hoodie'
          }),
        });
      } catch (error) {
        console.error('Error sending order email:', error);
      }
      
      window.location.href = paymentLink;
    } else {
      alert('Please select a size.');
    }
  };

  const handleTshirtChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTshirtFormData({
      ...tshirtFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleTshirtSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('T-shirt order submitted:', tshirtFormData);
    
    // Determine payment link based on size
    let paymentLink = '';
    if (tshirtFormData.size === 'kids-3-4' || tshirtFormData.size === 'kids-5-6' || tshirtFormData.size === 'kids-7-8' || 
        tshirtFormData.size === 'kids-9-11' || tshirtFormData.size === 'kids-12-14') {
      paymentLink = 'https://pay.sumup.com/b2c/QLIAJNLL'; // Kids £20.00
    } else if (tshirtFormData.size === 'xs' || tshirtFormData.size === 'small' || tshirtFormData.size === 'medium' || 
               tshirtFormData.size === 'large' || tshirtFormData.size === 'xl' || tshirtFormData.size === '2xl') {
      paymentLink = 'https://pay.sumup.com/b2c/QFGV174L'; // Adult £25.00
    }
    
    if (paymentLink) {
      try {
        await fetch('/api/shop', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...tshirtFormData,
            productType: 'Isle Dance T-Shirt'
          }),
        });
      } catch (error) {
        console.error('Error sending order email:', error);
      }
      
      window.location.href = paymentLink;
    } else {
      alert('Please select a size.');
    }
  };

  const handleBottleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBottleFormData({
      ...bottleFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleBottleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Water bottle order submitted:', bottleFormData);
    
    try {
      await fetch('/api/shop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...bottleFormData,
          productType: 'Isle Dance Water Bottle'
        }),
      });
    } catch (error) {
      console.error('Error sending order email:', error);
    }
    
    // Water bottle is always £10.00
    const paymentLink = 'https://pay.sumup.com/b2c/Q74IZ57W';
    window.location.href = paymentLink;
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
              <Link href="/shop" className="text-white transition-colors font-medium border-b-2 border-white">Our Shop</Link>
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
                <Link href="/shop" className="text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Our Shop</Link>
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
              <ShoppingBag className="w-4 h-4" />
              <span className="text-sm font-semibold">Official Merchandise</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6">
              Isle Dance <span className="text-[#E93F0A]">Shop</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Show your support for the Isle Dance community with our exclusive merchandise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-xl overflow-hidden bg-gray-100 md:sticky md:top-8 md:self-start">
                <div className="relative aspect-square">
                  <Image
                    src={hoodieImages[currentHoodieImage]}
                    alt={`Hoodie ${currentHoodieImage + 1}`}
                    fill
                    className="object-cover"
                    priority={currentHoodieImage === 0}
                  />
                </div>
                
                <button
                  onClick={prevHoodieImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextHoodieImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {hoodieImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentHoodieImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentHoodieImage 
                          ? 'bg-white w-8' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-4">Isle Dance Hoodie</h2>
                <p className="text-2xl font-bold text-[#E93F0A] mb-6">£32.00 - £40.00</p>
            
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 mb-4">
                Stay warm and stylish with our Isle Dance Hoodie, perfect for rehearsals, competitions, and everyday wear. Made from high quality, comfortable fabric, each hoodie is produced with care to ensure a great fit and long-lasting finish.
              </p>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-black mb-3">Important Order Information:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Please note that all items are made to order; we'll confirm once your order is ready for collection.</li>
                  <li>• All orders must be collected from <strong>15 Westbourne Drive, Douglas, IM1 4AY, Isle of Man</strong>.</li>
                  <li>• Payment is to be made by SumUp. Please use your full name as the payment reference.</li>
                  <li>• Orders will only be processed once payment has been received and confirmed.</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Hoodie Sizes: <span className="text-red-600">*</span>
                </label>
                <select
                  name="size"
                  required
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                >
                  <option value="">Select a size...</option>
                  <option value="kids-3-4">Kids 3–4 (26") £32.00</option>
                  <option value="kids-5-6">Kids 5–6 (28") £32.00</option>
                  <option value="kids-7-8">Kids 7–8 (30") £32.00</option>
                  <option value="kids-9-11">Kids 9–11 (32") £32.00</option>
                  <option value="kids-12-14">Kids 12–14 (34") £32.00</option>
                  <option value="xs">XS (34") £40.00</option>
                  <option value="small">Small (36") £40.00</option>
                  <option value="medium">Medium (40") £40.00</option>
                  <option value="large">Large (44") £40.00</option>
                  <option value="xl">XL (48") £40.00</option>
                  <option value="2xl">2XL (52") £40.00</option>
                  <option value="3xl">3XL (56") £40.00</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Hoodie Colours: <span className="text-red-600">*</span>
                </label>
                <select
                  name="color"
                  required
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                >
                  <option value="">Select a colour...</option>
                  <option value="red-white">Red & White Hoodie</option>
                  <option value="yellow-red">Yellow & Red Hoodie</option>
                  <option value="white-gold">White & Gold Hoodie</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Full Name: <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Email Address: <span className="text-red-600">*</span>
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
                  Phone Number: <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                  placeholder="07624 000000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Any Questions?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  If you have a specific question, you're more than welcome to put it here or leave this area empty.
                </p>
                <textarea
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                  placeholder="Optional - any questions or special requests?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E93F0A] text-white py-4 rounded-full font-semibold hover:bg-[#d13809] transition-all transform hover:scale-105"
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
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-xl overflow-hidden bg-gray-100 md:sticky md:top-8 md:self-start">
                <div className="relative aspect-square">
                  <Image
                    src={tshirtImages[currentTshirtImage]}
                    alt={`T-shirt ${currentTshirtImage + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <button
                  onClick={prevTshirtImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextTshirtImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {tshirtImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTshirtImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentTshirtImage 
                          ? 'bg-white w-8' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-4">Isle Dance T-Shirt</h2>
                <p className="text-2xl font-bold text-[#E93F0A] mb-6">£20.00 - £25.00</p>
            
                <div className="prose max-w-none mb-8">
              <p className="text-gray-700 mb-4">
                Stay comfortable and stylish with our Isle Dance T-Shirt, perfect for rehearsals, competitions, and everyday wear. Made from high quality, breathable fabric, each T-shirt is produced with care to ensure a great fit and long lasting comfort.
              </p>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-black mb-3">Important Order Information:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Please note that all items are made to order; we'll confirm once your order is ready for collection.</li>
                  <li>• All orders must be collected from <strong>15 Westbourne Drive, Douglas, IM1 4AY, Isle of Man</strong>.</li>
                  <li>• Payment is to be made by bank transfer after checkout. Please use your full name as the payment reference.</li>
                  <li>• Orders will only be processed once payment has been received and confirmed.</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleTshirtSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  T-shirt Sizes: <span className="text-red-600">*</span>
                </label>
                <select
                  name="size"
                  required
                  value={tshirtFormData.size}
                  onChange={handleTshirtChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                >
                  <option value="">Select a size...</option>
                  <option value="kids-3-4">Kids 3–4 (28") £20.00</option>
                  <option value="kids-5-6">Kids 5–6 (30") £20.00</option>
                  <option value="kids-7-8">Kids 7–8 (32") £20.00</option>
                  <option value="kids-9-11">Kids 9–11 (34") £20.00</option>
                  <option value="kids-12-14">Kids 12–14 (36") £20.00</option>
                  <option value="xs">XS (34–36") £25.00</option>
                  <option value="small">Small (36–38") £25.00</option>
                  <option value="medium">Medium (38–40") £25.00</option>
                  <option value="large">Large (41–42") £25.00</option>
                  <option value="xl">XL (43–44") £25.00</option>
                  <option value="2xl">2XL (45–47") £25.00</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  T-shirt Colours: <span className="text-red-600">*</span>
                </label>
                <select
                  name="color"
                  required
                  value={tshirtFormData.color}
                  onChange={handleTshirtChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                >
                  <option value="">Select a colour...</option>
                  <option value="red-white">Red & White T-shirt</option>
                  <option value="yellow-red">Yellow & Red T-shirt</option>
                  <option value="white-gold">White & Gold T-shirt</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Full Name: <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={tshirtFormData.fullName}
                  onChange={handleTshirtChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Email Address: <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={tshirtFormData.email}
                  onChange={handleTshirtChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Phone Number: <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={tshirtFormData.phone}
                  onChange={handleTshirtChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                  placeholder="07624 000000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Any Questions?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  If you have a specific question, you're more than welcome to put it here or leave this area empty.
                </p>
                <textarea
                  name="questions"
                  value={tshirtFormData.questions}
                  onChange={handleTshirtChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                  placeholder="Optional - any questions or special requests?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E93F0A] text-white py-4 rounded-full font-semibold hover:bg-[#d13809] transition-all transform hover:scale-105"
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
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-xl overflow-hidden bg-gray-100 md:sticky md:top-8 md:self-start">
                <div className="relative aspect-square">
                  <Image
                    src={bottleImages[currentBottleImage]}
                    alt={`Water Bottle ${currentBottleImage + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <button
                  onClick={prevBottleImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextBottleImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {bottleImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentBottleImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentBottleImage 
                          ? 'bg-white w-8' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-4">Isle Dance Water Bottle</h2>
            <p className="text-2xl font-bold text-[#E93F0A] mb-6">£10.00</p>
            
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 mb-4">
                750ml capacity. Made from BPA free plastic. Not dishwasher safe. Includes a single colour print on the front of the bottle.
              </p>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-black mb-3">Important Order Information:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Please note that all items are made to order; we'll confirm once your order is ready for collection.</li>
                  <li>• All orders must be collected from <strong>15 Westbourne Drive, Douglas, IM1 4AY, Isle of Man</strong>.</li>
                  <li>• Payment is to be made by bank transfer after checkout. Please use your full name as the payment reference.</li>
                  <li>• Orders will only be processed once payment has been received and confirmed.</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleBottleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Size
                </label>
                <select
                  name="size"
                  required
                  value={bottleFormData.size}
                  onChange={handleBottleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                >
                  <option value="750ml">750ML Bottle £10.00</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Full Name: <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={bottleFormData.fullName}
                  onChange={handleBottleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Email Address: <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={bottleFormData.email}
                  onChange={handleBottleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Phone Number: <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={bottleFormData.phone}
                  onChange={handleBottleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                  placeholder="07624 000000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Any Questions?
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  If you have a specific question, you're more than welcome to put it here or leave this area empty.
                </p>
                <textarea
                  name="questions"
                  value={bottleFormData.questions}
                  onChange={handleBottleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E93F0A]"
                  placeholder="Optional - any questions or special requests?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E93F0A] text-white py-4 rounded-full font-semibold hover:bg-[#d13809] transition-all transform hover:scale-105"
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
