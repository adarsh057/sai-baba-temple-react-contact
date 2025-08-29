import { useState, useEffect } from 'react';

export default function SaiBabaTemple() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
      setShowScrollTop(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 200;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  const isVisible = (id) => visibleElements.has(id);

  return (
    <div className="font-inter text-gray-800 bg-neutral-50 overflow-x-hidden">
      <style>{`
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

        .luxury-spinner {
          width: 80px;
          height: 80px;
          border: 2px solid rgba(201, 169, 97, 0.2);
          border-top: 2px solid var(--primary-gold);
          border-radius: 50%;
          animation: luxurySpin 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          margin: 0 auto 1rem;
        }

        @keyframes luxurySpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .hero {
          background:
            linear-gradient(rgba(26, 26, 26, 0.4), rgba(114, 47, 55, 0.3)),
            radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="luxury-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="2" fill="%23FF6B35" opacity="0.1"/><circle cx="10" cy="10" r="1" fill="%23FF6B35" opacity="0.05"/><circle cx="50" cy="50" r="1" fill="%23FF6B35" opacity="0.05"/></pattern></defs><rect width="1200" height="800" fill="%23722F37"/><rect width="1200" height="800" fill="url(%23luxury-pattern)"/></svg>') center/cover;
        }

        .hero-ornament {
          animation: floatElegant 6s ease-in-out infinite;
        }

        @keyframes floatElegant {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
        .stagger-6 { transition-delay: 0.6s; }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--sai-orange), var(--sacred-saffron));
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover::before {
          width: 100%;
        }

        .footer-pattern {
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="footer-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="1" fill="%23FF6B35" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23footer-pattern)"/></svg>');
        }

        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }

        .gradient-text {
          background: linear-gradient(135deg, white 0%, var(--sai-orange) 50%, white 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .om-symbol {
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>

      {isLoading && (
        <div className="fixed inset-0 bg-gradient-to-br from-red-900 to-black flex items-center justify-center z-50 transition-all duration-700">
          <div className="text-center">
            <div className="luxury-spinner"></div>
            <div className="text-yellow-600 font-serif text-lg tracking-widest uppercase">Loading Divine Experience</div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-red-900 to-black text-white py-2 text-sm text-center border-b border-yellow-600">
        <div className="max-w-7xl mx-auto px-12 flex justify-between items-center flex-wrap">
          <div className="font-serif italic text-yellow-600 font-semibold tracking-wide">
            "Shraddha and Saburi — Faith & Patience"
          </div>
          <div className="flex gap-8 items-center">
            <a href="tel:+91-9876543210" className="flex items-center gap-2 text-white/90 no-underline hover:text-yellow-600 transition-colors duration-300">
              <i className="fas fa-phone"></i>
              +91-9876543210
            </a>
            <a href="mailto:info@saisababatemple.org" className="flex items-center gap-2 text-white/90 no-underline hover:text-yellow-600 transition-colors duration-300">
              <i className="fas fa-envelope"></i>
              info@saisababatemple.org
            </a>
          </div>
        </div>
      </div>

      <header className={`fixed ${isScrolled ? 'top-0' : 'top-15'} w-full bg-neutral-50/95 backdrop-blur-xl border-b border-yellow-600/10 z-50 transition-all duration-500 ${isScrolled ? 'shadow-2xl' : ''}`}>
        <div className="max-w-7xl mx-auto px-12 py-6 flex items-center justify-between">
          <a href="#" className="flex items-center no-underline transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 text-white text-2xl transition-all duration-300 hover:rotate-6 hover:scale-105 hover:shadow-lg">
              <i className="fas fa-om"></i>
            </div>
            <div>
              <h1 className="font-serif text-3xl font-bold text-red-900 mb-1 tracking-tight">Shree Sai Baba Temple</h1>
              <p className="text-sm text-gray-500 font-normal tracking-widest uppercase">Malkajgiri</p>
            </div>
          </a>

          <nav className="flex items-center gap-12">
            <ul className="hidden lg:flex list-none gap-10 m-0">
              <li className="relative group">
                <a 
                  href="#home" 
                  onClick={() => scrollToSection('home')}
                  className="nav-link text-gray-800 no-underline font-medium text-base py-3 relative transition-all duration-300 tracking-wide block hover:text-red-900"
                >
                  Home
                </a>
              </li>
              <li className="relative group">
                <a 
                  href="#about" 
                  onClick={() => scrollToSection('about')}
                  className="nav-link text-gray-800 no-underline font-medium text-base py-3 relative transition-all duration-300 tracking-wide block hover:text-red-900"
                >
                  About
                </a>
                <div className="absolute top-full left-0 bg-white min-w-70 shadow-2xl rounded-xl p-4 opacity-0 invisible transform -translate-y-3 transition-all duration-300 border border-yellow-600/10 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  <a href="#life" className="block py-3 px-6 text-gray-800 text-sm border-b border-yellow-600/5 transition-all duration-300 hover:bg-neutral-50 hover:text-red-900 hover:pl-8">Life & Teachings</a>
                  <a href="#philosophy" className="block py-3 px-6 text-gray-800 text-sm transition-all duration-300 hover:bg-neutral-50 hover:text-red-900 hover:pl-8">Philosophy</a>
                </div>
              </li>
              <li className="relative group">
                <a 
                  href="#temple" 
                  onClick={() => scrollToSection('temple')}
                  className="nav-link text-gray-800 no-underline font-medium text-base py-3 relative transition-all duration-300 tracking-wide block hover:text-red-900"
                >
                  Information
                </a>
                <div className="absolute top-full left-0 bg-white min-w-70 shadow-2xl rounded-xl p-4 opacity-0 invisible transform -translate-y-3 transition-all duration-300 border border-yellow-600/10 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  <a href="#history" className="block py-3 px-6 text-gray-800 text-sm border-b border-yellow-600/5 transition-all duration-300 hover:bg-neutral-50 hover:text-red-900 hover:pl-8">History & Architecture</a>
                  <a href="#darshan" className="block py-3 px-6 text-gray-800 text-sm border-b border-yellow-600/5 transition-all duration-300 hover:bg-neutral-50 hover:text-red-900 hover:pl-8">Darshan & Aarti Timings</a>
                  <a href="#facilities" className="block py-3 px-6 text-gray-800 text-sm transition-all duration-300 hover:bg-neutral-50 hover:text-red-900 hover:pl-8">Facilities</a>
                </div>
              </li>
              <li className="relative group">
                <a 
                  href="#services" 
                  onClick={() => scrollToSection('services')}
                  className="nav-link text-gray-800 no-underline font-medium text-base py-3 relative transition-all duration-300 tracking-wide block hover:text-red-900"
                >
                  Services
                </a>
                <div className="absolute top-full left-0 bg-white min-w-70 shadow-2xl rounded-xl p-4 opacity-0 invisible transform -translate-y-3 transition-all duration-300 border border-yellow-600/10 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  <a href="#daily-aarti" className="block py-3 px-6 text-gray-800 text-sm border-b border-yellow-600/5 transition-all duration-300 hover:bg-neutral-50 hover:text-red-900 hover:pl-8">Daily Aarti</a>
                  <a href="#special-pujas" className="block py-3 px-6 text-gray-800 text-sm border-b border-yellow-600/5 transition-all duration-300 hover:bg-neutral-50 hover:text-red-900 hover:pl-8">Special Pujas</a>
                  <a href="#annadan" className="block py-3 px-6 text-gray-800 text-sm transition-all duration-300 hover:bg-neutral-50 hover:text-red-900 hover:pl-8">Annadan Seva</a>
                </div>
              </li>
              <li>
                <a 
                  href="#events" 
                  onClick={() => scrollToSection('events')}
                  className="nav-link text-gray-800 no-underline font-medium text-base py-3 relative transition-all duration-300 tracking-wide block hover:text-red-900"
                >
                  Events
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => scrollToSection('contact')}
                  className="nav-link text-gray-800 no-underline font-medium text-base py-3 relative transition-all duration-300 tracking-wide block hover:text-red-900"
                >
                  Contact
                </a>
              </li>
            </ul>

            <a 
              href="#donate" 
              className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-4 px-8 border-none rounded-full font-semibold text-base no-underline inline-flex items-center gap-2 transition-all duration-500 shadow-lg tracking-wide hover:-translate-y-1 hover:shadow-xl hover:from-orange-600 hover:to-orange-500"
            >
              <i className="fas fa-heart"></i>
              Donate
            </a>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col cursor-pointer gap-1 bg-transparent border-none"
            >
              <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded-sm"></span>
              <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded-sm"></span>
              <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded-sm"></span>
            </button>
          </nav>
        </div>

        <div className={`lg:hidden fixed top-0 ${isMobileMenuOpen ? 'right-0' : '-right-full'} w-75 h-screen bg-neutral-50 shadow-2xl transition-all duration-500 z-50 pt-24 px-8 overflow-y-auto`}>
          <ul className="flex flex-col gap-4 list-none">
            <li><a href="#home" onClick={() => scrollToSection('home')} className="block text-lg py-4 border-b border-yellow-600/10 text-gray-800 no-underline hover:text-red-900 transition-colors duration-300">Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')} className="block text-lg py-4 border-b border-yellow-600/10 text-gray-800 no-underline hover:text-red-900 transition-colors duration-300">About Sai Baba</a></li>
            <li><a href="#temple" onClick={() => scrollToSection('temple')} className="block text-lg py-4 border-b border-yellow-600/10 text-gray-800 no-underline hover:text-red-900 transition-colors duration-300">Temple Information</a></li>
            <li><a href="#services" onClick={() => scrollToSection('services')} className="block text-lg py-4 border-b border-yellow-600/10 text-gray-800 no-underline hover:text-red-900 transition-colors duration-300">Services</a></li>
            <li><a href="#events" onClick={() => scrollToSection('events')} className="block text-lg py-4 border-b border-yellow-600/10 text-gray-800 no-underline hover:text-red-900 transition-colors duration-300">Events & Festivals</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')} className="block text-lg py-4 border-b border-yellow-600/10 text-gray-800 no-underline hover:text-red-900 transition-colors duration-300">Contact Us</a></li>
            <li>
              <a href="#donate" className="inline-flex items-center gap-2 bg-gradient-to-br from-orange-500 to-orange-600 text-white py-4 px-8 rounded-full font-semibold text-base no-underline transition-all duration-500 shadow-lg">
                <i className="fas fa-heart"></i>
                Donate
              </a>
            </li>
          </ul>
        </div>
      </header>

      <section className="hero h-screen flex items-center justify-center text-center text-white relative overflow-hidden mt-30" id="home">
        <div className="absolute w-75 h-75 border-2 border-orange-500/10 rounded-full top-1/5 right-1/10 hero-ornament">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-50 h-50 border border-orange-500/8 rounded-full"></div>
        </div>
        <div className="max-w-4xl px-12 z-10 fade-in-up">
          <div className="font-serif text-xl mb-2 text-orange-500 italic tracking-wide om-symbol">ॐ सांई राम ॐ</div>
          <h1 className="gradient-text font-serif text-7xl font-black mb-6 leading-tight tracking-tighter">Shree Sai Baba Temple</h1>
          <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto font-light">
            Welcome to the sacred abode of Shirdi Sai Baba in Malkajgiri, Telangana.
            Experience divine blessings, inner peace, and spiritual awakening in our
            magnificent temple dedicated to the beloved saint who taught us "Sabka Malik Ek".
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href="#services" 
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-5 px-12 border-none rounded-full text-lg font-semibold no-underline inline-flex items-center gap-3 transition-all duration-500 shadow-xl tracking-wide hover:-translate-y-1 hover:shadow-2xl"
            >
              <i className="fas fa-praying-hands"></i>
              Visit Temple
            </a>
            <a 
              href="#about" 
              onClick={() => scrollToSection('about')}
              className="bg-transparent text-white py-5 px-12 border-2 border-white/30 rounded-full text-lg font-semibold no-underline inline-flex items-center gap-3 transition-all duration-500 backdrop-blur-md tracking-wide hover:bg-white/10 hover:border-orange-500 hover:-translate-y-1"
            >
              <i className="fas fa-info-circle"></i>
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral-100 relative" id="about">
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-25 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-12">
          <div className={`text-center mb-20 reveal ${isVisible('about-header') ? 'visible' : ''}`} id="about-header">
            <div className="text-base text-orange-500 font-semibold tracking-widest uppercase mb-4">Life & Teachings</div>
            <h2 className="font-serif text-5xl font-bold text-red-900 mb-6 tracking-tight">Divine Blessings of Sai Baba</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              Shirdi Sai Baba taught us the universal principles of faith, patience, charity,
              and the oneness of all religions. His divine presence continues to bless devotees worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {[
              { icon: 'praying-hands', title: 'Shraddha - Faith', desc: 'Sai Baba emphasized unwavering faith in the divine. Through complete surrender and trust, devotees find peace and receive his endless blessings and protection.', delay: 'stagger-1' },
              { icon: 'clock', title: 'Saburi - Patience', desc: 'The virtue of patience was central to Baba\'s teachings. He taught that with patience and perseverance, all obstacles can be overcome and divine grace received.', delay: 'stagger-2' },
              { icon: 'hands-helping', title: 'Seva - Service', desc: 'Baba emphasized selfless service to humanity. Through our Annadan Seva and community service, we follow his path of serving all beings with love and compassion.', delay: 'stagger-3' },
              { icon: 'peace', title: 'Sarva Dharma Sama', desc: 'Sai Baba preached the equality of all religions. In our temple, devotees of all faiths find peace and experience the universal love that transcends all boundaries.', delay: 'stagger-4' },
              { icon: 'dove', title: 'Inner Peace', desc: 'Through meditation and devotion in Baba\'s presence, devotees find inner tranquility and spiritual awakening, experiencing the divine peace that surpasses all understanding.', delay: 'stagger-5' },
              { icon: 'heart', title: 'Unconditional Love', desc: 'Baba\'s love knows no bounds. He embraces all devotees regardless of their background, offering divine love, healing, and guidance to all who seek his blessings.', delay: 'stagger-6' }
            ].map((feature, index) => (
              <div key={index} className={`bg-white p-12 rounded-2xl shadow-lg transition-all duration-500 relative overflow-hidden border border-orange-500/10 group hover:-translate-y-2 hover:shadow-2xl reveal ${feature.delay} ${isVisible(`feature-${index}`) ? 'visible' : ''}`} id={`feature-${index}`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
                <div className="w-22 h-22 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-8 text-white text-4xl transition-all duration-400 shadow-lg group-hover:scale-105 group-hover:rotate-12">
                  <i className={`fas fa-${feature.icon}`}></i>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-red-900 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-red-900 to-black text-white relative overflow-hidden" id="services">
        <div className="absolute inset-0 footer-pattern"></div>
        <div className="max-w-7xl mx-auto px-12">
          <div className={`text-center mb-20 relative z-10 reveal ${isVisible('services-header') ? 'visible' : ''}`} id="services-header">
            <div className="text-base text-orange-500 font-semibold tracking-widest uppercase mb-4">Temple Services</div>
            <h2 className="font-serif text-5xl font-bold mb-6 tracking-tight">Sacred Offerings & Worship</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
              Join us in our daily worship services, special ceremonies, and community seva
              programs that bring us closer to Sai Baba's divine presence and teachings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 relative z-10">
            {[
              { icon: 'sun', title: 'Morning Aarti', desc: 'Begin your day with divine blessings through our Kakad Aarti at 5:00 AM, filling your heart with peace and spiritual energy for the day ahead.', delay: 'stagger-1' },
              { icon: 'clock', title: 'Madhyan Aarti', desc: 'Join the midday prayers at 12:00 PM, offering gratitude and seeking Baba\'s continued blessings for prosperity and well-being.', delay: 'stagger-2' },
              { icon: 'moon', title: 'Evening Aarti', desc: 'Participate in the soul-stirring Dhoop Aarti at 6:00 PM and Shej Aarti at 10:30 PM, concluding the day with divine grace and peace.', delay: 'stagger-3' },
              { icon: 'star', title: 'Thursday Special', desc: 'Experience the special Thursday evening Aarti at 7:00 PM, a particularly auspicious time for receiving Baba\'s abundant blessings.', delay: 'stagger-4' },
              { icon: 'gift', title: 'Special Pujas', desc: 'Participate in elaborate puja ceremonies for personal milestones, Abhishekam, and special occasions seeking Baba\'s divine intervention and blessings.', delay: 'stagger-5' },
              { icon: 'utensils', title: 'Annadan Seva', desc: 'Join our free meal service (Prasadalaya) for devotees, following Baba\'s teaching of feeding the hungry and serving humanity with love.', delay: 'stagger-6' }
            ].map((service, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-orange-500/20 text-center transition-all duration-400 cursor-pointer hover:bg-white/8 hover:-translate-y-2 hover:shadow-2xl reveal ${service.delay} ${isVisible(`service-${index}`) ? 'visible' : ''}`} id={`service-${index}`}>
                <i className={`fas fa-${service.icon} text-5xl text-orange-500 mb-6 block`}></i>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-white/80 leading-relaxed font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral-50 relative" id="temple">
        <div className="max-w-7xl mx-auto px-12">
          <div className={`text-center mb-20 reveal ${isVisible('temple-header') ? 'visible' : ''}`} id="temple-header">
            <div className="text-base text-orange-500 font-semibold tracking-widest uppercase mb-4">Temple Information</div>
            <h2 className="font-serif text-5xl font-bold text-red-900 mb-6 tracking-tight">Sacred Space & Timings</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              Plan your visit to our beautiful temple with complete information about timings,
              facilities, and guidelines for a peaceful darshan experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`reveal ${isVisible('temple-info') ? 'visible' : ''}`} id="temple-info">
              <div className="bg-white p-12 rounded-3xl shadow-2xl border border-orange-500/10">
                <h3 className="font-serif text-3xl font-bold text-red-900 mb-8">Darshan Timings</h3>
                <div className="space-y-6">
                  {[
                    { time: '5:00 AM', event: 'Kakad Aarti', desc: 'Morning prayers and temple opening' },
                    { time: '12:00 PM', event: 'Madhyan Aarti', desc: 'Midday worship service' },
                    { time: '6:00 PM', event: 'Dhoop Aarti', desc: 'Evening devotional service' },
                    { time: '7:00 PM', event: 'Thursday Special', desc: 'Special Thursday evening prayers' },
                    { time: '10:30 PM', event: 'Shej Aarti', desc: 'Final prayers before temple closure' }
                  ].map((timing, index) => (
                    <div key={index} className="flex items-center gap-6 p-6 bg-neutral-50 rounded-2xl border-l-4 border-orange-500">
                      <div className="text-2xl font-bold text-orange-500 min-w-28">{timing.time}</div>
                      <div>
                        <div className="font-semibold text-red-900 text-lg">{timing.event}</div>
                        <div className="text-gray-500 text-sm">{timing.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`reveal stagger-2 ${isVisible('temple-features') ? 'visible' : ''}`} id="temple-features">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-12 rounded-3xl text-white shadow-2xl">
                <h3 className="font-serif text-3xl font-bold mb-8">Temple Facilities</h3>
                <div className="space-y-6">
                  {[
                    { icon: 'wheelchair', feature: 'Wheelchair Accessible' },
                    { icon: 'car', feature: 'Free Parking Available' },
                    { icon: 'shoe-prints', feature: 'Shoe Storage Facility' },
                    { icon: 'water', feature: 'Pure Drinking Water' },
                    { icon: 'restroom', feature: 'Clean Restroom Facilities' },
                    { icon: 'baby', feature: 'Family-Friendly Environment' },
                    { icon: 'wifi', feature: 'Free WiFi for Devotees' },
                    { icon: 'camera', feature: 'Photography Guidelines Available' }
                  ].map((facility, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <i className={`fas fa-${facility.icon} text-xl text-white/90`}></i>
                      <span className="text-white/90 font-medium">{facility.feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative" id="events">
        <div className="max-w-7xl mx-auto px-12">
          <div className={`text-center mb-20 reveal ${isVisible('events-header') ? 'visible' : ''}`} id="events-header">
            <div className="text-base text-orange-500 font-semibold tracking-widest uppercase mb-4">Special Celebrations</div>
            <h2 className="font-serif text-5xl font-bold text-red-900 mb-6 tracking-tight">Festivals & Events</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              Join us in celebrating the most auspicious occasions dedicated to Sai Baba
              and experience the divine joy of community worship and devotion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Guru Purnima',
                date: 'July 2025',
                desc: 'The most sacred festival honoring Sai Baba as our divine Guru. Special abhishekam, bhajan programs, and community feast.',
                image: '🌕',
                highlight: true
              },
              {
                title: 'Ram Navami',
                date: 'April 2025',
                desc: 'Celebration of Lord Rama\'s birth with special pujas, kirtan, and devotional programs throughout the day.',
                image: '🙏',
                highlight: false
              },
              {
                title: 'Vijayadashami',
                date: 'October 2025',
                desc: 'Victory of good over evil celebrated with special ceremonies and the annual Bhandara feast for all devotees.',
                image: '🎊',
                highlight: false
              },
              {
                title: 'Makar Sankranti',
                date: 'January 2025',
                desc: 'Harvest festival celebrated with traditional prayers, kite flying, and distribution of special prasadam to devotees.',
                image: '🪁',
                highlight: false
              }
            ].map((event, index) => (
              <div key={index} className={`${event.highlight ? 'md:col-span-2' : ''} bg-gradient-to-br ${event.highlight ? 'from-orange-500 to-orange-600 text-white' : 'from-neutral-100 to-white'} p-12 rounded-3xl shadow-xl border ${event.highlight ? 'border-orange-600' : 'border-orange-500/10'} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl reveal stagger-${index + 1} ${isVisible(`event-${index}`) ? 'visible' : ''}`} id={`event-${index}`}>
                <div className="text-6xl mb-6">{event.image}</div>
                <h3 className={`font-serif text-3xl font-bold mb-4 ${event.highlight ? 'text-white' : 'text-red-900'}`}>{event.title}</h3>
                <div className={`text-lg font-semibold mb-4 ${event.highlight ? 'text-orange-100' : 'text-orange-500'}`}>{event.date}</div>
                <p className={`${event.highlight ? 'text-white/90' : 'text-gray-500'} leading-relaxed text-lg font-light`}>{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral-100 relative" id="donate">
        <div className="max-w-7xl mx-auto px-12">
          <div className={`text-center mb-20 reveal ${isVisible('donate-header') ? 'visible' : ''}`} id="donate-header">
            <div className="text-base text-orange-500 font-semibold tracking-widest uppercase mb-4">Support Our Mission</div>
            <h2 className="font-serif text-5xl font-bold text-red-900 mb-6 tracking-tight">Seva & Donations</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
              Your generous contributions help us maintain the temple, serve free meals to devotees,
              organize festivals, and continue Sai Baba's mission of love and service to humanity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'General Donation',
                desc: 'Support daily temple operations and maintenance',
                icon: 'hand-holding-heart',
                amount: 'Any Amount'
              },
              {
                title: 'Annadan Seva',
                desc: 'Sponsor free meals for devotees and the needy',
                icon: 'utensils',
                amount: '₹2,100/day'
              },
              {
                title: 'Festival Sponsorship',
                desc: 'Support special celebrations and community events',
                icon: 'star',
                amount: '₹5,100+'
              }
            ].map((option, index) => (
              <div key={index} className={`bg-white p-12 rounded-3xl shadow-xl text-center transition-all duration-500 border border-orange-500/10 hover:-translate-y-2 hover:shadow-2xl reveal stagger-${index + 1} ${isVisible(`donate-${index}`) ? 'visible' : ''}`} id={`donate-${index}`}>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white text-3xl">
                  <i className={`fas fa-${option.icon}`}></i>
                </div>
                <h3 className="font-serif text-2xl font-bold text-red-900 mb-4">{option.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6 font-light">{option.desc}</p>
                <div className="text-orange-500 font-bold text-xl mb-6">{option.amount}</div>
                <button className="w-full bg-gradient-to-br from-orange-500 to-orange-600 text-white py-4 px-8 border-none rounded-full font-semibold transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative" id="contact">
        <div className="max-w-7xl mx-auto px-12">
          <div className={`text-center mb-20 reveal ${isVisible('contact-header') ? 'visible' : ''}`} id="contact-header">
            <div className="text-base text-orange-500 font-semibold tracking-widest uppercase mb-4">Get in Touch</div>
            <h2 className="font-serif text-5xl font-bold text-red-900 mb-6 tracking-tight">Visit Our Sacred Temple</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              We welcome you to experience the divine presence of Sai Baba. 
              Contact us for any queries or to arrange special seva and puja services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className={`reveal ${isVisible('contact-info') ? 'visible' : ''}`} id="contact-info">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-12 rounded-3xl text-white shadow-2xl">
                <h3 className="font-serif text-3xl font-bold mb-8">Temple Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <i className="fas fa-map-marker-alt text-2xl mt-1"></i>
                    <div>
                      <div className="font-semibold text-lg mb-2">Address</div>
                      <div className="text-white/90 leading-relaxed">
                        Shree Sai Baba Temple<br/>
                        Malkajgiri, Secunderabad<br/>
                        Telangana - 500047<br/>
                        India
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <i className="fas fa-phone text-2xl mt-1"></i>
                    <div>
                      <div className="font-semibold text-lg mb-2">Phone</div>
                      <div className="text-white/90">+91-9876543210</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <i className="fas fa-envelope text-2xl mt-1"></i>
                    <div>
                      <div className="font-semibold text-lg mb-2">Email</div>
                      <div className="text-white/90">info@saisababatemple.org</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <i className="fas fa-clock text-2xl mt-1"></i>
                    <div>
                      <div className="font-semibold text-lg mb-2">Temple Hours</div>
                      <div className="text-white/90">
                        Daily: 5:00 AM - 11:00 PM<br/>
                        All days of the week
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`reveal stagger-2 ${isVisible('contact-form') ? 'visible' : ''}`} id="contact-form">
              <div className="bg-white p-12 rounded-3xl shadow-xl border border-orange-500/10">
                <h3 className="font-serif text-3xl font-bold text-red-900 mb-8">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <input type="text" className="w-full p-4 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input type="tel" className="w-full p-4 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300" placeholder="Your phone" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input type="email" className="w-full p-4 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300" placeholder="Your email" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea rows="5" className="w-full p-4 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300 resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-br from-orange-500 to-orange-600 text-white py-4 px-8 border-none rounded-full font-semibold text-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className={`text-center reveal ${isVisible('newsletter') ? 'visible' : ''}`} id="newsletter">
            <h3 className="font-serif text-3xl font-bold mb-6">Stay Connected</h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Subscribe to receive updates about special events, festivals, and temple announcements.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto flex gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="flex-1 p-4 rounded-full border-none text-gray-800 focus:outline-none"
                required
              />
              <button type="submit" className="bg-orange-500 text-white py-4 px-8 border-none rounded-full font-semibold transition-all duration-300 hover:bg-orange-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16 footer-pattern relative">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3 text-white text-xl">
                  <i className="fas fa-om"></i>
                </div>
                <div>
                  <div className="font-serif text-xl font-bold">Sai Baba Temple</div>
                  <div className="text-sm text-gray-400">Malkajgiri</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                A sacred place of worship dedicated to Shirdi Sai Baba, 
                spreading his message of love, faith, and unity among all devotees.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 text-orange-500">Quick Links</h4>
              <ul className="space-y-3 list-none">
                <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 no-underline">About Sai Baba</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 no-underline">Temple Services</a></li>
                <li><a href="#events" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 no-underline">Events & Festivals</a></li>
                <li><a href="#donate" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 no-underline">Donations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 text-orange-500">Temple Services</h4>
              <ul className="space-y-3 list-none">
                <li className="text-gray-400">Daily Aarti</li>
                <li className="text-gray-400">Special Pujas</li>
                <li className="text-gray-400">Annadan Seva</li>
                <li className="text-gray-400">Spiritual Counseling</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 text-orange-500">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-orange-500"></i>
                  <span className="text-gray-400 text-sm">Malkajgiri, Secunderabad, Telangana</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone text-orange-500"></i>
                  <span className="text-gray-400">+91-9876543210</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope text-orange-500"></i>
                  <span className="text-gray-400 text-sm">info@saisababatemple.org</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="text-gray-400 text-sm">
              <p className="mb-2">© 2025 Shree Sai Baba Temple, Malkajgiri. All rights reserved.</p>
              <p className="font-serif italic text-orange-500">"सबका मालिक एक है - All have one Master"</p>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-2xl transition-all duration-300 border-none cursor-pointer hover:-translate-y-1 hover:shadow-2xl z-40"
        >
          <i className="fas fa-arrow-up text-xl"></i>
        </button>
      )}

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  );
}
