import React, { useState, useEffect } from 'react';

const SaiBabaTempleContact = () => {
  // Load FontAwesome
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-gray-800 overflow-x-hidden">
      {/* Custom CSS Variables and Styles */}
      <style jsx>{`
        :root {
          --primary-gold: #C9A961;
          --deep-burgundy: #722F37;
          --rich-cream: #FAF8F5;
          --elegant-gray: #2C2C2C;
          --soft-gray: #8B8B8B;
          --luxury-black: #1A1A1A;
          --accent-copper: #B08D57;
          --pearl-white: #FEFDFB;
          --sai-orange: #FF6B35;
          --sacred-saffron: #FF8C42;
          --shadow-soft: 0 8px 32px rgba(114, 47, 55, 0.08);
          --shadow-elegant: 0 16px 64px rgba(114, 47, 55, 0.12);
          --shadow-dramatic: 0 24px 96px rgba(114, 47, 55, 0.16);
        }

        .hero-gradient {
          background: linear-gradient(rgba(26, 26, 26, 0.6), rgba(114, 47, 55, 0.4)),
                      radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
                      #722F37;
        }

        .hero-title-gradient {
          background: linear-gradient(135deg, white 0%, #FF6B35 50%, white 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .luxury-gradient {
          background: linear-gradient(135deg, #FF6B35, #FF8C42);
        }

        .footer-gradient {
          background: linear-gradient(135deg, #1A1A1A 0%, #722F37 100%);
        }

        @keyframes floatElegant {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }

        .float-elegant {
          animation: floatElegant 6s ease-in-out infinite;
        }

        .glass-effect {
          background: rgba(250, 248, 245, 0.95);
          backdrop-filter: blur(20px);
        }

        .glass-effect-scrolled {
          background: rgba(250, 248, 245, 0.98);
          box-shadow: var(--shadow-elegant);
        }
      `}</style>

      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-900 to-gray-900 text-white py-2 text-sm text-center border-b border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="font-serif italic text-yellow-600 font-semibold tracking-wide">
            "Sabka Malik Ek" - One God for All
          </div>
          <div className="flex gap-4 md:gap-8 items-center">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-white/90 hover:text-yellow-600 transition-colors duration-300">
              <span className="text-xs">📞</span>
              +91 98765 43210
            </a>
            <a href="mailto:info@saibabatemple.org" className="flex items-center gap-2 text-white/90 hover:text-yellow-600 transition-colors duration-300">
              <span className="text-xs">✉️</span>
              info@saibabatemple.org
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-12 md:top-15 w-full z-50 transition-all duration-400 ${isScrolled ? 'top-0 glass-effect-scrolled' : 'glass-effect'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center text-decoration-none transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center mr-4 text-white text-2xl transition-all duration-300 hover:rotate-6 hover:scale-105">
              <span>🕉️</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-red-900 mb-1 tracking-tight font-serif">
                Shree Sai Baba Temple
              </h1>
              <p className="text-xs md:text-sm text-gray-500 font-normal tracking-wider uppercase">
                Malkajgiri, Telangana
              </p>
            </div>
          </a>
          
          <nav className="flex items-center">
            <ul className="flex list-none gap-6 md:gap-10 m-0">
              {['Home', 'About', 'Services', 'Events', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className={`text-gray-800 no-underline font-medium text-sm md:text-base py-3 relative transition-all duration-300 tracking-wide hover:text-red-900 ${item === 'Contact' ? 'text-red-900' : ''}`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-400 ${item === 'Contact' ? 'w-full' : 'w-0 hover:w-full'}`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Contact Hero Section */}
      <section className="h-80 md:h-96 hero-gradient flex items-center justify-center text-center text-white relative overflow-hidden mt-28 md:mt-32">
        <div className="absolute w-32 h-32 md:w-48 md:h-48 border-2 border-orange-500/10 rounded-full top-1/4 right-1/10 float-elegant"></div>
        <div className="max-w-3xl px-4 md:px-12 z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4 hero-title-gradient leading-tight tracking-tight font-serif">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-orange-500 font-serif italic tracking-wide">
            We're here to serve and guide you on your spiritual journey
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-6 tracking-tight font-serif">
                Get In Touch
              </h2>
              <p className="text-gray-500 text-lg mb-8 md:mb-10 leading-relaxed">
                Share your thoughts, seek guidance, or inquire about our services. We're here to help you on your spiritual journey.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-800 font-medium mb-2 text-base">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="p-4 border-2 border-orange-500/10 rounded-xl text-base outline-none transition-all duration-300 bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-800 font-medium mb-2 text-base">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="p-4 border-2 border-orange-500/10 rounded-xl text-base outline-none transition-all duration-300 bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-gray-800 font-medium mb-2 text-base">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="p-4 border-2 border-orange-500/10 rounded-xl text-base outline-none transition-all duration-300 bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-gray-800 font-medium mb-2 text-base">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="p-4 border-2 border-orange-500/10 rounded-xl text-base outline-none transition-all duration-300 bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-gray-800 font-medium mb-2 text-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your thoughts or questions..."
                    required
                    className="p-4 border-2 border-orange-500/10 rounded-xl text-base outline-none transition-all duration-300 bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 min-h-32 resize-y"
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="luxury-gradient text-white py-4 md:py-5 px-8 md:px-10 border-none rounded-full text-base md:text-lg font-semibold cursor-pointer transition-all duration-400 shadow-lg hover:-translate-y-1 hover:shadow-xl self-start flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>✈️</span>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-8 tracking-tight font-serif">
                Visit Us
              </h2>
              
              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: '📍',
                    title: 'Temple Address',
                    content: 'Shree Sai Baba Temple\nMalkajgiri Main Road\nMalkajgiri, Telangana 500047'
                  },
                  {
                    icon: '📞',
                    title: 'Phone Numbers',
                    content: (
                      <>
                        Temple Office: <a href="tel:+914012345678" className="text-orange-500 font-medium hover:underline">+91 40 1234 5678</a><br/>
                        Mobile: <a href="tel:+919876543210" className="text-orange-500 font-medium hover:underline">+91 98765 43210</a>
                      </>
                    )
                  },
                  {
                    icon: '✉️',
                    title: 'Email Contact',
                    content: (
                      <>
                        General Inquiries: <a href="mailto:info@saibabatemple.org" className="text-orange-500 font-medium hover:underline">info@saibabatemple.org</a><br/>
                        Events: <a href="mailto:events@saibabatemple.org" className="text-orange-500 font-medium hover:underline">events@saibabatemple.org</a>
                      </>
                    )
                  },
                  {
                    icon: '🕐',
                    title: 'Quick Hours',
                    content: 'Morning Aarti: 6:00 AM\nEvening Aarti: 7:00 PM\nOpen Daily: 5:30 AM - 9:00 PM'
                  }
                ].map((card, index) => (
                  <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-orange-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center text-white text-xl mr-4">
                        <span>{card.icon}</span>
                      </div>
                      <h3 className="text-xl text-red-900 font-semibold font-serif">
                        {card.title}
                      </h3>
                    </div>
                    <div className="text-gray-500 leading-relaxed whitespace-pre-line">
                      {card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temple Hours */}
      <section className="bg-stone-100 py-12 md:py-16 text-center">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-8 font-serif">
            Temple Timings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl text-red-900 mb-4 font-serif">
                Daily Schedule
              </h3>
              <div className="flex flex-col gap-2">
                {[
                  ['Morning Opening', '5:30 AM'],
                  ['Morning Aarti', '6:00 AM'],
                  ['Afternoon Break', '12:00 - 4:00 PM'],
                  ['Evening Aarti', '7:00 PM'],
                  ['Temple Closes', '9:00 PM']
                ].map(([time, schedule], index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-orange-500/10 last:border-b-0">
                    <span className="text-gray-500">{time}</span>
                    <span className="text-orange-500 font-medium">{schedule}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl text-red-900 mb-4 font-serif">
                Special Days
              </h3>
              <div className="flex flex-col gap-2">
                {[
                  ['Thursday Special', '5:30 AM - 10:00 PM'],
                  ['Festival Days', '5:30 AM - 11:00 PM'],
                  ['Ram Navami', 'All Day Open'],
                  ['Guru Purnima', 'All Day Open']
                ].map(([day, time], index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-orange-500/10 last:border-b-0">
                    <span className="text-gray-500">{day}</span>
                    <span className="text-orange-500 font-medium">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-gradient text-white py-8 md:py-12 text-center">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-8 flex-col md:flex-row">
            <div className="flex items-center">
              <div className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center mr-3 text-xl">
                <span>🕉️</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold font-serif">
                Shree Sai Baba Temple
              </h3>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: '📘', url: '#', label: 'Facebook' },
                { icon: '📷', url: '#', label: 'Instagram' },
                { icon: '🎥', url: '#', label: 'YouTube' },
                { icon: '🐦', url: '#', label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  title={social.label}
                  className="w-10 h-10 bg-white/5 border border-orange-500/20 rounded-lg flex items-center justify-center text-white/80 no-underline transition-all duration-300 hover:bg-orange-500 hover:text-white hover:-translate-y-1"
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-orange-500/20 pt-6 md:pt-8 text-white/70 text-sm">
            <p>&copy; 2024 Shree Sai Baba Temple, Malkajgiri. All rights reserved. | Developed with devotion</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SaiBabaTempleContact;