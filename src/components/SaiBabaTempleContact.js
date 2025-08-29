import React, { useState, useEffect } from 'react';

const SaiBabaTemple = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        setShowScrollTop(true);
      } else {
        setIsScrolled(false);
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  return (
    <div className="font-sans leading-relaxed text-gray-800 bg-gray-50 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
        
        :root {
          --primary-gold: #C9A961;
          --deep-burgundy: #722F37;
          --rich-cream: #FAF8F5;
          --elegant-gray: #2C2C2C;
          --soft-gray: #8B8B8B;
          --luxury-black: #1A1A1A;
          --accent-copper: #B08D57;
          --pearl-white: #FEFDFB;
        }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-crimson { font-family: 'Crimson Text', serif; }

        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, var(--deep-burgundy) 0%, var(--luxury-black) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .preloader.hide {
          opacity: 0;
          visibility: hidden;
        }

        .luxury-spinner {
          width: 80px;
          height: 80px;
          border: 2px solid rgba(201, 169, 97, 0.2);
          border-top: 2px solid var(--primary-gold);
          border-radius: 50%;
          animation: spin 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
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

        .hero-ornament {
          animation: float 6s ease-in-out infinite;
        }

        .hero-content {
          animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-title {
          background: linear-gradient(135deg, white 0%, var(--primary-gold) 50%, white 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(250, 248, 245, 0.95);
        }

        .glass-effect.scrolled {
          background: rgba(250, 248, 245, 0.98);
          box-shadow: 0 16px 64px rgba(114, 47, 55, 0.12);
        }

        .gradient-bg {
          background: linear-gradient(135deg, var(--primary-gold), var(--accent-copper));
        }

        .dark-gradient {
          background: linear-gradient(135deg, var(--deep-burgundy) 0%, var(--luxury-black) 100%);
        }

        .hero-bg {
          background:
            linear-gradient(rgba(26, 26, 26, 0.4), rgba(114, 47, 55, 0.3)),
            radial-gradient(circle at 30% 70%, rgba(201, 169, 97, 0.15) 0%, transparent 50%),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="luxury-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="2" fill="%23C9A961" opacity="0.1"/><circle cx="10" cy="10" r="1" fill="%23C9A961" opacity="0.05"/><circle cx="50" cy="50" r="1" fill="%23C9A961" opacity="0.05"/></pattern></defs><rect width="1200" height="800" fill="%23722F37"/><rect width="1200" height="800" fill="url(%23luxury-pattern)"/></svg>') center/cover;
        }

        .services-bg {
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="luxury-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23C9A961" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23luxury-dots)"/></svg>');
        }

        .footer-bg {
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="footer-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="1" fill="%23C9A961" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23footer-pattern)"/></svg>');
        }

        .nav-underline {
          position: relative;
        }

        .nav-underline::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-gold), var(--accent-copper));
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-underline:hover::before {
          width: 100%;
        }

        .card-gradient-top::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-gold), var(--accent-copper));
          transform: scaleX(0);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-gradient-top:hover::before {
          transform: scaleX(1);
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
      `}</style>

      {isLoading && (
        <div className={`preloader ${!isLoading ? 'hide' : ''}`}>
          <div className="text-center">
            <div className="luxury-spinner mx-auto mb-4"></div>
            <div className="text-yellow-400 font-playfair text-lg tracking-widest uppercase">Loading Divine Experience</div>
          </div>
        </div>
      )}

      <header className={`fixed top-0 w-full glass-effect border-b border-yellow-400 border-opacity-10 z-50 transition-all duration-400 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="max-w-screen-2xl mx-auto px-12 py-6 flex items-center justify-between">
          <a href="#" className="flex items-center text-decoration-none transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4 text-white text-2xl transition-all duration-300 hover:rotate-6 hover:scale-110 shadow-lg">
              <i className="fas fa-praying-hands"></i>
            </div>
            <div>
              <h1 className="font-playfair text-3xl font-bold text-red-900 mb-1 tracking-tight">Sai Baba Temple</h1>
              <p className="text-sm text-gray-500 font-normal tracking-wide uppercase">Divine Sanctuary</p>
            </div>
          </a>
          
          <nav className="flex items-center gap-12">
            <ul className="hidden md:flex list-none gap-10">
              {['Home', 'About', 'Services', 'Events', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="nav-underline text-gray-800 no-underline font-medium text-sm py-3 transition-all duration-300 tracking-wide hover:text-red-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            <a href="#donate" className="gradient-bg text-white px-8 py-3 rounded-full font-semibold text-sm no-underline inline-flex items-center gap-2 transition-all duration-400 shadow-lg hover:-translate-y-1 hover:shadow-xl tracking-wide">
              <i className="fas fa-heart"></i>
              Donate
            </a>
            
            <button onClick={toggleMobileMenu} className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer">
              <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded"></span>
              <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded"></span>
              <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded"></span>
            </button>
          </nav>
        </div>
        
        <div className={`fixed top-0 ${mobileMenuOpen ? 'right-0' : '-right-full'} w-80 h-screen bg-gray-50 shadow-2xl transition-all duration-400 z-50 pt-24 px-8`}>
          <ul className="flex flex-col gap-8">
            {['Home', 'About', 'Services', 'Events', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-lg py-4 border-b border-yellow-400 border-opacity-10 block no-underline text-gray-800 hover:text-red-900 transition-colors">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="#donate" className="gradient-bg text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 no-underline">
                <i className="fas fa-heart"></i>
                Donate
              </a>
            </li>
          </ul>
        </div>
      </header>

      <section className="h-screen hero-bg flex items-center justify-center text-center text-white relative overflow-hidden" id="home">
        <div className="hero-ornament absolute w-80 h-80 border-2 border-yellow-400 border-opacity-10 rounded-full top-1/5 right-1/10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 border border-yellow-400 border-opacity-5 rounded-full"></div>
        </div>
        <div className="hero-content max-w-4xl px-12 z-10">
          <div className="font-crimson text-2xl mb-6 text-yellow-400 italic tracking-wide">ॐ सांई राम ॐ</div>
          <h1 className="hero-title font-playfair text-7xl font-black mb-6 leading-none tracking-tight">Divine Sanctuary</h1>
          <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto font-light">
            Welcome to the sacred abode of Shirdi Sai Baba in North Texas.
            Experience divine blessings, inner peace, and spiritual awakening in our
            magnificent temple dedicated to the beloved saint.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="#services" className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-semibold no-underline inline-flex items-center gap-3 transition-all duration-400 shadow-xl hover:-translate-y-1 hover:shadow-2xl tracking-wide">
              <i className="fas fa-praying-hands"></i>
              Visit Temple
            </a>
            <a href="#about" className="bg-transparent text-white px-12 py-4 border-2 border-white border-opacity-30 rounded-full text-lg font-semibold no-underline inline-flex items-center gap-3 transition-all duration-400 backdrop-blur-md tracking-wide hover:bg-white hover:bg-opacity-10 hover:border-yellow-400 hover:-translate-y-1">
              <i className="fas fa-info-circle"></i>
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 relative" id="about" style={{backgroundColor: 'var(--rich-cream)'}}>
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <div className="max-w-screen-2xl mx-auto px-12">
          <div className="text-center mb-20 reveal">
            <div className="text-sm text-yellow-600 font-semibold tracking-widest uppercase mb-4">Sacred Traditions</div>
            <h2 className="font-playfair text-5xl font-bold mb-6 tracking-tight" style={{color: 'var(--deep-burgundy)'}}>Experience Divine Blessings</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
              Our temple stands as a beacon of faith, offering a serene sanctuary where
              devotees can connect with the divine presence of Shirdi Sai Baba and find solace in prayer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: 'fas fa-praying-hands', title: 'Daily Prayers & Aarti', desc: 'Join our spiritual community for morning and evening prayers, traditional aarti ceremonies, and devotional singing that fills the temple with divine energy and peace.' },
              { icon: 'fas fa-book-open', title: 'Spiritual Teachings', desc: 'Discover the profound wisdom of Sai Baba through regular spiritual discourses, scripture readings, and teachings that guide devotees on their spiritual journey.' },
              { icon: 'fas fa-hands-helping', title: 'Community Service', desc: 'Follow Sai Baba\'s teachings of service to humanity through our community outreach programs, food distribution, and charitable activities that help those in need.' },
              { icon: 'fas fa-calendar-alt', title: 'Sacred Festivals', desc: 'Celebrate the rich traditions of our faith through vibrant festivals, special pujas, and religious ceremonies that bring our community together in devotion.' },
              { icon: 'fas fa-dove', title: 'Peaceful Meditation', desc: 'Find inner tranquility in our dedicated meditation spaces, designed to provide a serene environment for contemplation and spiritual reflection.' },
              { icon: 'fas fa-users', title: 'Spiritual Community', desc: 'Connect with fellow devotees in a welcoming spiritual family that supports each other\'s journey towards divine realization and personal growth.' }
            ].map((feature, index) => (
              <div key={index} className={`card-gradient-top relative bg-white p-12 rounded-2xl shadow-lg transition-all duration-500 border border-yellow-400 border-opacity-10 hover:-translate-y-2 hover:shadow-2xl reveal stagger-${index + 1}`}>
                <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mb-8 text-white text-4xl transition-all duration-400 shadow-lg hover:scale-110 hover:rotate-6">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-4 tracking-tight" style={{color: 'var(--deep-burgundy)'}}>{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 dark-gradient text-white relative overflow-hidden" id="services">
        <div className="services-bg absolute inset-0"></div>
        <div className="max-w-screen-2xl mx-auto px-12 relative z-10">
          <div className="text-center mb-20 reveal">
            <div className="text-sm text-yellow-400 font-semibold tracking-widest uppercase mb-4">Temple Services</div>
            <h2 className="font-playfair text-5xl font-bold text-white mb-6 tracking-tight">Sacred Offerings</h2>
            <p className="text-xl text-white text-opacity-80 max-w-3xl mx-auto leading-relaxed font-light">
              Immerse yourself in our comprehensive spiritual services designed to nurture
              your connection with the divine and support your spiritual growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: 'fas fa-sun', title: 'Morning Prayers', desc: 'Begin your day with divine blessings through our morning prayer sessions, featuring traditional mantras and devotional songs.' },
              { icon: 'fas fa-moon', title: 'Evening Aarti', desc: 'Join the soul-stirring evening aarti ceremony that illuminates hearts with divine light and spiritual energy.' },
              { icon: 'fas fa-gift', title: 'Special Pujas', desc: 'Participate in elaborate puja ceremonies for personal milestones, seeking blessings for health, prosperity, and happiness.' },
              { icon: 'fas fa-graduation-cap', title: 'Religious Education', desc: 'Learn about Hindu scriptures, Sai Baba\'s teachings, and spiritual practices through our educational programs for all ages.' },
              { icon: 'fas fa-heart', title: 'Wedding Ceremonies', desc: 'Celebrate the sacred union of marriage with traditional Hindu wedding ceremonies blessed by Sai Baba\'s divine presence.' },
              { icon: 'fas fa-baby', title: 'Life Ceremonies', desc: 'Mark important life milestones with traditional ceremonies including naming ceremonies, first rice feeding, and coming of age rituals.' }
            ].map((service, index) => (
              <div key={index} className={`bg-white bg-opacity-5 backdrop-blur-lg p-10 rounded-3xl border border-yellow-400 border-opacity-20 text-center transition-all duration-400 cursor-pointer hover:bg-opacity-8 hover:-translate-y-2 hover:shadow-2xl reveal stagger-${index + 1}`}>
                <i className={`${service.icon} text-5xl text-yellow-400 mb-6 block`}></i>
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-white text-opacity-80 leading-relaxed font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="dark-gradient text-white py-20 relative" id="contact">
        <div className="footer-bg absolute inset-0"></div>
        <div className="max-w-screen-2xl mx-auto px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4 text-white text-2xl">
                  <i className="fas fa-om"></i>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold mb-1 tracking-tight">Sai Baba Temple</h3>
                  <p className="text-sm text-gray-400 tracking-wide">Divine Sanctuary</p>
                </div>
              </div>
              <p className="text-white text-opacity-80 leading-relaxed mb-8 font-light">
                A sacred sanctuary dedicated to Shirdi Sai Baba, fostering spiritual growth,
                community service, and divine connection in the heart of North Texas.
              </p>
              <div className="flex gap-4">
                {['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram', 'fab fa-youtube'].map((icon, index) => (
                  <a key={index} href="#" className="w-11 h-11 bg-white bg-opacity-5 border border-yellow-400 border-opacity-20 rounded-xl flex items-center justify-center text-white text-opacity-80 no-underline transition-all duration-400 hover:bg-yellow-400 hover:text-white hover:-translate-y-1 hover:shadow-lg">
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-playfair text-2xl font-semibold text-yellow-400 mb-6 tracking-tight">Temple Hours</h4>
              <div className="flex flex-col gap-3">
                {[
                  ['Monday - Friday', '6:00 AM - 8:00 PM'],
                  ['Saturday', '5:00 AM - 9:00 PM'],
                  ['Sunday', '5:00 AM - 9:00 PM'],
                  ['Special Events', 'Extended Hours']
                ].map(([day, time], index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-yellow-400 border-opacity-10 text-sm">
                    <span className="text-white text-opacity-80">{day}</span>
                    <span className="text-yellow-400 font-medium">{time}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-playfair text-2xl font-semibold text-yellow-400 mb-6 tracking-tight">Quick Links</h4>
              <ul className="flex flex-col gap-3 list-none">
                {['Home', 'About Us', 'Temple Services', 'Events & Festivals', 'Volunteer', 'Donations'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-white text-opacity-80 no-underline font-light transition-all duration-300 py-1 block hover:text-yellow-400 hover:pl-2">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair text-2xl font-semibold text-yellow-400 mb-6 tracking-tight">Contact Information</h4>
              <div className="flex flex-col gap-4">
                {[
                  { icon: 'fas fa-map-marker-alt', text: '1234 Temple Drive\nNorth Texas, TX 75000' },
                  { icon: 'fas fa-phone', text: '(555) 123-4567' },
                  { icon: 'fas fa-envelope', text: 'info@saibabatemple-tx.org' },
                  { icon: 'fas fa-globe', text: 'www.saibabatemple-tx.org' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <i className={`${contact.icon} text-yellow-400 w-4 text-center`}></i>
                    <span className="text-white text-opacity-80 font-light whitespace-pre-line">{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-yellow-400 border-opacity-10 pt-8 text-center">
            <p className="text-white text-opacity-60 text-sm font-light mb-2">&copy; 2024 Sai Baba Temple North Texas. All rights reserved.</p>
            <p className="text-yellow-400 italic">"सबका मालिक एक" - One God Governs All</p>
          </div>
        </div>
      </footer>

      <button 
        onClick={scrollToTop}
        className={`fixed bottom-12 right-12 w-15 h-15 gradient-bg text-white border-none rounded-full cursor-pointer flex items-center justify-center text-xl z-50 shadow-xl transition-all duration-400 ${showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'} hover:-translate-y-1 hover:scale-105 hover:shadow-2xl`}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default SaiBabaTemple;
