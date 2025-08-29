import React, { useState, useEffect } from 'react';

const Sample = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('🙏 Thank you for your message! We will get back to you soon.');
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 font-sans text-gray-800 overflow-x-hidden">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
          --primary-gold: #D4AF37;
          --deep-burgundy: #8B1538;
          --rich-saffron: #FF8C42;
          --sacred-orange: #FF6B35;
          --temple-red: #C41E3A;
          --divine-cream: #FFF8F0;
          --shadow-glow: 0 20px 60px rgba(196, 30, 58, 0.15);
          --shadow-divine: 0 8px 32px rgba(255, 107, 53, 0.2);
        }

        .font-display { font-family: 'Playfair Display', serif; }
        .font-body { font-family: 'Inter', sans-serif; }

        .divine-gradient {
          background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 25%, #D4AF37 75%, #C41E3A 100%);
        }

        .hero-bg {
          background: 
            radial-gradient(circle at 20% 30%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(196, 30, 58, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, rgba(139, 21, 56, 0.95) 0%, rgba(255, 107, 53, 0.85) 100%);
        }

        .glass-morphism {
          background: rgba(255, 248, 240, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .glass-scrolled {
          background: rgba(255, 248, 240, 0.95);
          backdrop-filter: blur(25px);
          box-shadow: var(--shadow-divine);
        }

        .card-divine {
          background: linear-gradient(145deg, #ffffff 0%, #fff8f0 100%);
          border: 1px solid rgba(255, 107, 53, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(255, 107, 53, 0.1);
        }

        .input-divine {
          background: linear-gradient(145deg, #ffffff 0%, #fefcfa 100%);
          border: 2px solid rgba(255, 107, 53, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .input-divine:focus {
          border-color: #FF6B35;
          box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1), 0 8px 25px rgba(255, 107, 53, 0.15);
          transform: translateY(-1px);
        }

        .btn-divine {
          background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #D4AF37 100%);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-divine:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 107, 53, 0.4);
        }

        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 107, 53, 0.6); }
        }

        .decorative-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      {/* Enhanced Top Bar */}
      <div className="divine-gradient text-white py-3 text-sm relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 border border-white/10 rounded-full -top-48 -left-48 animate-float"></div>
          <div className="absolute w-64 h-64 border border-white/10 rounded-full -top-32 -right-32 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="font-display text-white font-semibold tracking-wide text-center">
            <span className="text-yellow-200">🕉️</span> "Sabka Malik Ek" - One God for All <span className="text-yellow-200">🕉️</span>
          </div>
          <div className="flex gap-6 md:gap-8 items-center">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-white/90 hover:text-yellow-200 transition-all duration-300 hover:scale-105">
              <span className="text-lg">📞</span>
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <a href="mailto:info@saibabatemple.org" className="flex items-center gap-2 text-white/90 hover:text-yellow-200 transition-all duration-300 hover:scale-105">
              <span className="text-lg">✉️</span>
              <span className="font-medium">info@saibabatemple.org</span>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-scrolled' : 'glass-morphism'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center text-decoration-none group">
            <div className="w-14 h-14 divine-gradient rounded-2xl flex items-center justify-center mr-4 text-white text-2xl transition-all duration-400 group-hover:scale-110 group-hover:rotate-12 animate-pulse-glow">
              <span>🕉️</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-temple-red mb-1 tracking-tight font-display">
                Shree Sai Baba Temple
              </h1>
              <p className="text-sm md:text-base text-gray-600 font-body tracking-wide">
                🌺 Malkajgiri, Telangana 🌺
              </p>
            </div>
          </a>
          
          <nav>
            <ul className="flex list-none gap-8 md:gap-12 m-0">
              {[
                {name: 'Home', icon: '🏠'}, 
                {name: 'About', icon: '🕉️'}, 
                {name: 'Services', icon: '🙏'}, 
                {name: 'Events', icon: '🎉'}, 
                {name: 'Contact', icon: '📧'}
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href="#" 
                    className={`text-gray-700 no-underline font-medium text-base py-3 px-2 relative transition-all duration-400 font-body hover:text-temple-red group ${item.name === 'Contact' ? 'text-temple-red' : ''}`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-1 divine-gradient rounded-full transition-all duration-400 ${item.name === 'Contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="min-h-screen hero-bg flex items-center justify-center text-center text-white relative overflow-hidden decorative-pattern">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 border-2 border-white/10 rounded-full top-1/4 right-1/4 animate-float"></div>
          <div className="absolute w-64 h-64 border border-orange-300/20 rounded-full bottom-1/4 left-1/4 animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full top-3/4 right-1/3 animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className={`max-w-4xl px-6 md:px-12 z-10 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="mb-8">
            <span className="text-6xl md:text-8xl animate-float">🙏</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent leading-tight font-display">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-orange-200 font-body mb-8 max-w-2xl mx-auto leading-relaxed">
            🌸 We're here to serve and guide you on your divine spiritual journey 🌸
          </p>
          <div className="flex justify-center">
            <div className="px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white font-medium">
              ✨ Sacred Space for All Devotees ✨
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative">
        <div className="absolute inset-0 decorative-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            
            {/* Enhanced Contact Form */}
            <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <div className="mb-12">
                <h2 className="text-4xl md:text-6xl font-bold text-temple-red mb-6 font-display leading-tight">
                  Get In Touch
                </h2>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-body">
                  Share your thoughts, seek divine guidance, or inquire about our sacred services. 
                  <span className="text-orange-500 font-medium"> We're blessed to help you. 🕉️</span>
                </p>
              </div>
              
              <div className="card-divine p-8 md:p-10 rounded-3xl">
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gray-800 font-semibold mb-3 text-base font-body flex items-center gap-2">
                        <span>👤</span> Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full p-4 input-divine rounded-2xl text-base font-body outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-gray-800 font-semibold mb-3 text-base font-body flex items-center gap-2">
                        <span>📧</span> Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full p-4 input-divine rounded-2xl text-base font-body outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gray-800 font-semibold mb-3 text-base font-body flex items-center gap-2">
                        <span>📱</span> Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full p-4 input-divine rounded-2xl text-base font-body outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-gray-800 font-semibold mb-3 text-base font-body flex items-center gap-2">
                        <span>💭</span> Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="w-full p-4 input-divine rounded-2xl text-base font-body outline-none"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-gray-800 font-semibold mb-3 text-base font-body flex items-center gap-2">
                      <span>💌</span> Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your thoughts, questions, or how we can help you on your spiritual journey..."
                      className="w-full p-4 input-divine rounded-2xl text-base font-body outline-none min-h-36 resize-y"
                    />
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="btn-divine text-white py-5 px-10 border-none rounded-2xl text-lg font-semibold font-body cursor-pointer self-start flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Sending Your Message...
                      </>
                    ) : (
                      <>
                        <span>🕊️</span>
                        Send Divine Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Info */}
            <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <h2 className="text-4xl md:text-6xl font-bold text-temple-red mb-12 font-display leading-tight">
                Visit Our Temple
              </h2>
              
              <div className="flex flex-col gap-8">
                {[
                  {
                    icon: '🏛️',
                    title: 'Sacred Address',
                    content: 'Shree Sai Baba Temple\nMalkajgiri Main Road\nMalkajgiri, Telangana 500047\n🇮🇳 India',
                    gradient: 'from-red-500 to-orange-500'
                  },
                  {
                    icon: '📞',
                    title: 'Divine Connection',
                    content: (
                      <>
                        Temple Office: <a href="tel:+914012345678" className="text-orange-500 font-semibold hover:text-temple-red transition-colors">+91 40 1234 5678</a><br/>
                        Mobile/WhatsApp: <a href="tel:+919876543210" className="text-orange-500 font-semibold hover:text-temple-red transition-colors">+91 98765 43210</a>
                      </>
                    ),
                    gradient: 'from-orange-500 to-yellow-500'
                  },
                  {
                    icon: '💌',
                    title: 'Digital Blessings',
                    content: (
                      <>
                        General: <a href="mailto:info@saibabatemple.org" className="text-orange-500 font-semibold hover:text-temple-red transition-colors">info@saibabatemple.org</a><br/>
                        Events: <a href="mailto:events@saibabatemple.org" className="text-orange-500 font-semibold hover:text-temple-red transition-colors">events@saibabatemple.org</a><br/>
                        Donations: <a href="mailto:donations@saibabatemple.org" className="text-orange-500 font-semibold hover:text-temple-red transition-colors">donations@saibabatemple.org</a>
                      </>
                    ),
                    gradient: 'from-yellow-500 to-red-500'
                  },
                  {
                    icon: '⏰',
                    title: 'Sacred Timings',
                    content: '🌅 Morning Aarti: 6:00 AM\n🌆 Evening Aarti: 7:00 PM\n🕐 Daily Open: 5:30 AM - 9:00 PM\n🙏 Always Welcome',
                    gradient: 'from-purple-500 to-pink-500'
                  }
                ].map((card, index) => (
                  <div key={index} className="card-divine p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center text-white text-2xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
                        <span>{card.icon}</span>
                      </div>
                      <h3 className="text-2xl text-temple-red font-bold font-display">
                        {card.title}
                      </h3>
                    </div>
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line font-body text-lg ml-22">
                      {card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Temple Schedule */}
      <section className="bg-gradient-to-r from-temple-red to-orange-600 py-20 md:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 border border-white/10 rounded-full -top-48 -right-48 animate-float"></div>
          <div className="absolute w-64 h-64 border border-white/10 rounded-full -bottom-32 -left-32 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-display">
            Sacred Schedule
          </h2>
          <p className="text-xl text-orange-200 mb-16 font-body">
            🕉️ Divine moments await you every day 🕉️
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: '🌅 Daily Rituals',
                schedule: [
                  ['Morning Opening', '5:30 AM', '🌅'],
                  ['Mangal Aarti', '6:00 AM', '🙏'],
                  ['Bhajan & Kirtan', '8:00 AM', '🎵'],
                  ['Afternoon Rest', '12:00 - 4:00 PM', '😴'],
                  ['Evening Aarti', '7:00 PM', '🕯️'],
                  ['Night Closing', '9:00 PM', '🌙']
                ]
              },
              {
                title: '✨ Special Occasions',
                schedule: [
                  ['Thursday Special', '5:30 AM - 10:00 PM', '🌟'],
                  ['Festival Days', '5:30 AM - 11:00 PM', '🎉'],
                  ['Ram Navami', 'All Day Celebration', '🎊'],
                  ['Guru Purnima', 'Extended Hours', '🌕'],
                  ['Diwali', 'Special Programs', '🪔'],
                  ['New Year', 'Midnight Blessings', '🎆']
                ]
              }
            ].map((section, sectionIndex) => (
              <div key={sectionIndex} className="card-divine text-gray-800 p-8 rounded-3xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-temple-red mb-8 font-display">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.schedule.map(([event, time, emoji], index) => (
                    <div key={index} className="flex justify-between items-center py-3 px-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200/50 hover:scale-105 transition-transform duration-300">
                      <span className="flex items-center gap-3 text-gray-700 font-medium font-body">
                        <span className="text-xl">{emoji}</span>
                        {event}
                      </span>
                      <span className="text-orange-600 font-bold font-body">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-temple-red to-orange-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 decorative-pattern opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-12 text-center">
          
          <div className="flex justify-center items-center gap-6 mb-12 flex-col md:flex-row">
            <div className="flex items-center">
              <div className="w-16 h-16 divine-gradient rounded-2xl flex items-center justify-center mr-4 text-3xl animate-pulse-glow">
                <span>🕉️</span>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold font-display text-yellow-200">
                  Shree Sai Baba Temple
                </h3>
                <p className="text-orange-300 font-body">Divine Blessings Since 1975</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            {[
              { icon: '📘', url: '#', label: 'Facebook', color: 'from-blue-500 to-blue-600' },
              { icon: '📷', url: '#', label: 'Instagram', color: 'from-pink-500 to-purple-600' },
              { icon: '🎥', url: '#', label: 'YouTube', color: 'from-red-500 to-red-600' },
              { icon: '🐦', url: '#', label: 'Twitter', color: 'from-blue-400 to-blue-500' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                title={social.label}
                className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white text-xl no-underline transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-lg`}
              >
                <span>{social.icon}</span>
              </a>
            ))}
          </div>
          
          <div className="border-t border-white/20 pt-8 text-orange-200 font-body">
            <p className="text-lg">
              © 2024 Shree Sai Baba Temple, Malkajgiri. All rights reserved.
            </p>
            <p className="text-sm mt-2 text-yellow-300">
              ✨ Developed with divine devotion and blessed love ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sample;