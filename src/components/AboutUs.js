import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
      setShowScrollTop(scrolled);
      

      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
    document.body.style.overflow = !mobileMenuActive ? 'hidden' : '';
  };

  const timelineItems = [
    {
      year: "1838 - 1858",
      title: "Divine Arrival",
      description: "A young fakir arrived in the village of Shirdi, Maharashtra. Though his origins remained mysterious, his divine presence and miraculous powers soon became evident to all who encountered him. He chose to stay in a dilapidated mosque, which he lovingly called \"Masjid Mai.\"",
      icon: "fas fa-star",
      position: "left"
    },
    {
      year: "1858 - 1886",
      title: "The Sacred Fire",
      description: "Sai Baba maintained a sacred fire (dhuni) in the mosque, whose ash (udi) possessed miraculous healing properties. He would distribute this sacred ash to devotees, curing their ailments and blessing them with prosperity and peace.",
      icon: "fas fa-fire",
      position: "right"
    },
    {
      year: "1886 - 1916",
      title: "Miracles and Teachings",
      description: "During this period, Sai Baba's fame spread far and wide. He performed countless miracles, healed the sick, and imparted spiritual wisdom through simple parables and actions. His teachings transcended religious boundaries, emphasizing the unity of all faiths.",
      icon: "fas fa-hands-helping",
      position: "left"
    },
    {
      year: "1916 - 1918",
      title: "Devotees and Disciples",
      description: "Prominent devotees like Hemadpant, Madhav Rao, and others documented Sai Baba's teachings and miracles. The construction of Samadhi Mandir began, and the Chavadi procession became a cherished tradition that continues to this day.",
      icon: "fas fa-heart",
      position: "right"
    },
    {
      year: "October 15, 1918",
      title: "Mahasamadhi",
      description: "On Vijayadashami day, Sai Baba attained Mahasamadhi at the age of approximately 80 years. Before leaving his physical form, he assured his devotees, \"I shall be active and vigorous even from my tomb,\" a promise that continues to manifest through countless miracles.",
      icon: "fas fa-infinity",
      position: "left"
    },
    {
      year: "1918 - Present",
      title: "Eternal Presence",
      description: "Sai Baba's spiritual influence has grown exponentially, with millions of devotees worldwide experiencing his grace and blessings. Temples dedicated to him have been established across the globe, spreading his message of love, faith, and service to humanity.",
      icon: "fas fa-globe",
      position: "right"
    }
  ];

  const historyCards = [
    { icon: "fas fa-seedling", title: "Foundation", description: "Our temple began with a small group of devoted followers who shared a vision of creating a sacred sanctuary dedicated to Shirdi Sai Baba in Malkajgiri." },
    { icon: "fas fa-hammer", title: "Construction", description: "Through the generous contributions and selfless service of devotees, the temple construction began with traditional architectural elements and modern facilities." },
    { icon: "fas fa-praying-hands", title: "Consecration", description: "The temple was consecrated with elaborate rituals and ceremonies, establishing it as a sacred space where Sai Baba's divine presence could be experienced by all devotees." },
    { icon: "fas fa-users", title: "Community Growth", description: "Over the years, our temple has grown into a vibrant spiritual community, serving thousands of devotees and organizing numerous charitable and cultural activities." },
    { icon: "fas fa-heart", title: "Service to Humanity", description: "Following Sai Baba's teachings, our temple actively engages in community service, including food distribution, healthcare camps, and educational support for the underprivileged." },
    { icon: "fas fa-infinity", title: "Future Vision", description: "We continue to expand our services and facilities to better serve our growing community while maintaining the spiritual essence and traditions of our beloved Sai Baba." }
  ];

  const values = [
    { icon: "fas fa-unity", title: "Unity in Diversity", description: "We welcome devotees from all backgrounds, faiths, and walks of life, embodying Sai Baba's message that all religions lead to the same divine truth. Our temple serves as a bridge that unites hearts beyond boundaries." },
    { icon: "fas fa-hands-helping", title: "Selfless Service", description: "Following Sai Baba's example of serving humanity, we actively engage in community service, helping those in need through food distribution, healthcare support, and educational initiatives for the underprivileged." },
    { icon: "fas fa-dove", title: "Inner Peace", description: "We provide a serene environment for meditation, prayer, and spiritual contemplation, helping devotees find inner peace and tranquility amidst the chaos of modern life." },
    { icon: "fas fa-book-open", title: "Spiritual Education", description: "We promote the study and understanding of Sai Baba's teachings, Hindu scriptures, and spiritual wisdom through regular discourses, study groups, and educational programs for all age groups." },
    { icon: "fas fa-leaf", title: "Simple Living", description: "Inspired by Sai Baba's simple lifestyle, we encourage devotees to embrace simplicity, contentment, and gratitude while focusing on spiritual growth rather than material accumulation." },
    { icon: "fas fa-lightbulb", title: "Divine Wisdom", description: "We strive to spread Sai Baba's timeless wisdom and teachings that illuminate the path to self-realization, helping devotees navigate life's challenges with faith, patience, and divine guidance." }
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      
      <style dangerouslySetInnerHTML={{
        __html: `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-gold: #C9A961;
          --deep-burgundy: #722F37;
          --rich-cream: #FAF8F5;
          --elegant-gray: #2C2C2C;
          --soft-gray: #8B8B8B;
          --luxury-black: #1A1A1A;
          --accent-copper: #B08D57;
          --pearl-white: #FEFDFB;
          --shadow-soft: 0 8px 32px rgba(114, 47, 55, 0.08);
          --shadow-elegant: 0 16px 64px rgba(114, 47, 55, 0.12);
          --shadow-dramatic: 0 24px 96px rgba(114, 47, 55, 0.16);
        }

        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.7;
          color: var(--elegant-gray);
          background-color: var(--pearl-white);
          overflow-x: hidden;
        }

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

        .loader-container {
          text-align: center;
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

        .loader-text {
          color: var(--primary-gold);
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @keyframes luxurySpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(250, 248, 245, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(201, 169, 97, 0.1);
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        header.scrolled {
          background: rgba(250, 248, 245, 0.98);
          box-shadow: var(--shadow-elegant);
        }

        .header-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .luxury-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .logo-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-gold), var(--accent-copper));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          color: white;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .luxury-logo:hover .logo-icon {
          transform: rotate(5deg) scale(1.05);
          box-shadow: var(--shadow-soft);
        }

        .logo-text h1 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--deep-burgundy);
          margin-bottom: 0.2rem;
          letter-spacing: -0.5px;
        }

        .logo-text p {
          font-size: 0.85rem;
          color: var(--soft-gray);
          font-weight: 400;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .nav-container {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2.5rem;
          margin: 0;
        }

        .nav-links a {
          color: var(--elegant-gray);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.75rem 0;
          position: relative;
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
        }

        .nav-links a.active {
          color: var(--deep-burgundy);
        }

        .nav-links a::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-gold), var(--accent-copper));
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-links a.active::before {
          width: 100%;
        }

        .nav-links a:hover {
          color: var(--deep-burgundy);
        }

        .nav-links a:hover::before {
          width: 100%;
        }

        .premium-donate-btn {
          background: linear-gradient(135deg, var(--primary-gold), var(--accent-copper));
          color: white;
          padding: 0.9rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--shadow-soft);
          letter-spacing: 0.3px;
          cursor: pointer;
        }

        .premium-donate-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-elegant);
          background: linear-gradient(135deg, var(--accent-copper), var(--primary-gold));
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
          background: none;
          border: none;
        }

        .mobile-toggle span {
          width: 25px;
          height: 2px;
          background: var(--elegant-gray);
          transition: all 0.3s ease;
          border-radius: 1px;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100vh;
          background: var(--pearl-white);
          box-shadow: var(--shadow-dramatic);
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1001;
          padding: 6rem 2rem 2rem;
        }

        .mobile-menu.active {
          right: 0;
        }

        .mobile-menu .nav-links {
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-menu .nav-links a {
          font-size: 1.1rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(201, 169, 97, 0.1);
        }

        .page-hero {
          height: 60vh;
          background: linear-gradient(rgba(26, 26, 26, 0.5), rgba(114, 47, 55, 0.4)),
                      radial-gradient(circle at 30% 70%, rgba(201, 169, 97, 0.15) 0%, transparent 50%);
          background-color: #722F37;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
          margin-top: 0;
        }

        .page-hero-content {
          max-width: 800px;
          padding: 0 3rem;
          z-index: 2;
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

        .page-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, white 0%, var(--primary-gold) 50%, white 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .page-hero p {
          font-size: 1.3rem;
          opacity: 0.9;
          line-height: 1.6;
          font-weight: 300;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
          font-size: 1rem;
          opacity: 0.8;
        }

        .breadcrumb a {
          color: var(--primary-gold);
          text-decoration: none;
        }

        .breadcrumb span {
          color: rgba(255, 255, 255, 0.6);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 3rem;
        }

        .about-intro {
          padding: 8rem 0 6rem;
          background: var(--pearl-white);
        }

        .about-intro-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .about-text {
          padding-right: 2rem;
        }

        .about-text h2 {
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
          font-weight: 700;
          color: var(--deep-burgundy);
          margin-bottom: 2rem;
          letter-spacing: -1px;
        }

        .about-text p {
          font-size: 1.1rem;
          color: var(--elegant-gray);
          margin-bottom: 2rem;
          line-height: 1.8;
          font-weight: 300;
        }

        .about-text .highlight {
          font-family: 'Crimson Text', serif;
          font-style: italic;
          color: var(--primary-gold);
          font-size: 1.2rem;
          font-weight: 600;
        }

        .about-image {
          position: relative;
        }

        .about-image-container {
          background: linear-gradient(135deg, var(--primary-gold), var(--accent-copper));
          border-radius: 20px;
          padding: 2rem;
          box-shadow: var(--shadow-elegant);
          position: relative;
          overflow: hidden;
        }

        .temple-illustration {
          width: 100%;
          height: 400px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: var(--deep-burgundy);
          position: relative;
          z-index: 2;
        }

        .sai-story {
          padding: 8rem 0;
          background: var(--rich-cream);
          position: relative;
        }

        .section-ornament {
          position: absolute;
          top: 4rem;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, var(--primary-gold), transparent);
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-subtitle {
          font-size: 0.95rem;
          color: var(--primary-gold);
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
          font-weight: 700;
          color: var(--deep-burgundy);
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }

        .section-description {
          font-size: 1.2rem;
          color: var(--soft-gray);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 300;
        }

        .story-timeline {
          margin-top: 4rem;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 1fr 100px 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
          align-items: center;
        }

        .timeline-item:nth-child(even) .timeline-content:first-child {
          order: 3;
        }

        .timeline-item:nth-child(even) .timeline-marker {
          order: 2;
        }

        .timeline-item:nth-child(even) .timeline-content:last-child {
          order: 1;
        }

        .timeline-content {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: var(--shadow-soft);
          border: 1px solid rgba(201, 169, 97, 0.1);
          transition: all 0.4s ease;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-elegant);
        }

        .timeline-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          color: var(--deep-burgundy);
          margin-bottom: 1rem;
        }

        .timeline-content .year {
          color: var(--primary-gold);
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .timeline-content p {
          color: var(--elegant-gray);
          line-height: 1.7;
          font-weight: 300;
        }

        .timeline-marker {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, var(--primary-gold), var(--accent-copper));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          box-shadow: var(--shadow-soft);
          position: relative;
          margin: 0 auto;
        }

        .timeline-marker::before,
        .timeline-marker::after {
          content: '';
          position: absolute;
          width: 2px;
          height: 100px;
          background: linear-gradient(var(--primary-gold), transparent);
          left: 50%;
          transform: translateX(-50%);
        }

        .timeline-marker::before {
          top: -100px;
        }

        .timeline-marker::after {
          bottom: -100px;
        }

        .timeline-item:first-child .timeline-marker::before,
        .timeline-item:last-child .timeline-marker::after {
          display: none;
        }

        .temple-history {
          padding: 8rem 0;
          background: linear-gradient(135deg, var(--deep-burgundy) 0%, var(--luxury-black) 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .history-content {
          position: relative;
          z-index: 2;
        }

        .history-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .history-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid rgba(201, 169, 97, 0.2);
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .history-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .history-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary-gold), var(--accent-copper));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          margin: 0 auto 1.5rem;
          box-shadow: var(--shadow-soft);
        }

        .history-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
        }

        .history-card p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-weight: 300;
        }

        .values {
          padding: 8rem 0;
          background: var(--pearl-white);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .value-card {
          background: white;
          padding: 3rem 2.5rem;
          border-radius: 20px;
          box-shadow: var(--shadow-soft);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(201, 169, 97, 0.1);
        }

        .value-card::before {
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

        .value-card:hover::before {
          transform: scaleX(1);
        }

        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-dramatic);
        }

        .value-icon {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, var(--primary-gold), var(--accent-copper));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          color: white;
          font-size: 2.2rem;
          transition: all 0.4s ease;
          box-shadow: var(--shadow-soft);
        }

        .value-card:hover .value-icon {
          transform: scale(1.05) rotate(5deg);
        }

        .value-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--deep-burgundy);
          margin-bottom: 1rem;
          letter-spacing: -0.3px;
        }

        .value-card p {
          color: var(--soft-gray);
          line-height: 1.7;
          font-size: 1.05rem;
          font-weight: 300;
        }

        .luxury-footer {
          background: linear-gradient(135deg, var(--luxury-black) 0%, var(--deep-burgundy) 100%);
          color: white;
          padding: 5rem 0 2rem;
          position: relative;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
          position: relative;
          z-index: 2;
        }

        .footer-section h4 {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--primary-gold);
          margin-bottom: 1.5rem;
          letter-spacing: -0.3px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .footer-logo .logo-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-gold), var(--accent-copper));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          color: white;
          font-size: 1.5rem;
        }

        .footer-logo .logo-text h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
          letter-spacing: -0.3px;
        }

        .footer-logo .logo-text p {
          font-size: 0.85rem;
          color: var(--soft-gray);
          letter-spacing: 0.5px;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          font-weight: 300;
        }

        .temple-hours {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .hour-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(201, 169, 97, 0.1);
          font-size: 0.95rem;
        }

        .hour-item span:first-child {
          color: rgba(255, 255, 255, 0.8);
        }

        .hour-item span:last-child {
          color: var(--primary-gold);
          font-weight: 500;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 300;
          transition: all 0.3s ease;
          padding: 0.3rem 0;
        }

        .footer-links a:hover {
          color: var(--primary-gold);
          padding-left: 0.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .social-link {
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(201, 169, 97, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.4s ease;
        }

        .social-link:hover {
          background: var(--primary-gold);
          color: white;
          transform: translateY(-3px);
          box-shadow: var(--shadow-soft);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.95rem;
        }

        .contact-item i {
          color: var(--primary-gold);
          width: 16px;
          text-align: center;
        }

        .contact-item span {
          color: rgba(255, 255, 255, 0.8);
          font-weight: 300;
        }

        .footer-bottom {
          border-top: 1px solid rgba(201, 169, 97, 0.1);
          padding-top: 2rem;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          font-weight: 300;
          margin-bottom: 0.5rem;
        }

        .footer-bottom p:last-child {
          color: var(--primary-gold);
          font-style: italic;
        }

        .scroll-top {
          position: fixed;
          bottom: 3rem;
          right: 3rem;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--primary-gold), var(--accent-copper));
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          box-shadow: var(--shadow-elegant);
        }

        .scroll-top.show {
          opacity: 1;
          visibility: visible;
        }

        .scroll-top:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: var(--shadow-dramatic);
        }

        @media (max-width: 1024px) {
          .header-content {
            padding: 1.5rem 2rem;
          }
          
          .container {
            padding: 0 2rem;
          }
          
          .page-hero h1 {
            font-size: 3rem;
          }
          
          .about-intro-content {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          
          .about-text {
            padding-right: 0;
            text-align: center;
          }
          
          .timeline-item {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .timeline-item:nth-child(even) .timeline-content:first-child {
            order: 1;
          }
          
          .timeline-item:nth-child(even) .timeline-marker {
            order: 2;
          }
          
          .timeline-item:nth-child(even) .timeline-content:last-child {
            order: 3;
          }
          
          .timeline-marker::before,
          .timeline-marker::after {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }

          .page-hero {
            height: 50vh;
          }

          .page-hero h1 {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .about-text h2 {
            font-size: 2.5rem;
          }

          .values-grid,
          .history-grid {
            grid-template-columns: 1fr;
          }

          .value-card {
            padding: 2rem 1.5rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .header-content {
            padding: 1rem;
          }
          
          .container {
            padding: 0 1rem;
          }
          
          .page-hero h1 {
            font-size: 2rem;
          }
          
          .logo-text h1 {
            font-size: 1.4rem;
          }
          
          .about-intro {
            padding: 4rem 0;
          }
          
          .sai-story,
          .temple-history,
          .values {
            padding: 4rem 0;
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
        `
      }} />

  
      {isLoading && (
        <div className={`preloader ${!isLoading ? 'hide' : ''}`}>
          <div className="loader-container">
            <div className="luxury-spinner"></div>
            <div className="loader-text">Loading...</div>
          </div>
        </div>
      )}

 
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="header-content">
          <a href="#" className="luxury-logo">
            <div className="logo-icon">
              <i className="fas fa-om"></i>
            </div>
            <div className="logo-text">
              <h1>Shirdi Sai Baba</h1>
              <p>Temple Malkajgiri</p>
            </div>
          </a>
          
          <div className="nav-container">
            <nav>
              <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about" className="active">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            <a href="#donate" className="premium-donate-btn">
              <i className="fas fa-heart"></i>
              Donate
            </a>
            <button className="mobile-toggle" onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuActive ? 'active' : ''}`}>
        <nav>
          <ul className="nav-links">
            <li><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="#about" className="active" onClick={toggleMobileMenu}>About Us</a></li>
            <li><a href="#services" onClick={toggleMobileMenu}>Services</a></li>
            <li><a href="#events" onClick={toggleMobileMenu}>Events</a></li>
            <li><a href="#gallery" onClick={toggleMobileMenu}>Gallery</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>

      
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>About Our Temple</h1>
          <p>Discover the sacred journey of devotion, faith, and divine blessings in the heart of Malkajgiri</p>
          <div className="breadcrumb">
            <a href="#home">Home</a>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro-content reveal">
            <div className="about-text">
              <h2>Our Sacred Mission</h2>
              <p>
                Welcome to the Shirdi Sai Baba Temple in Malkajgiri, a sacred sanctuary where devotion meets divine grace. Our temple stands as a beacon of hope, faith, and spiritual enlightenment for thousands of devotees who seek Sai Baba's eternal blessings.
              </p>
              <p>
                Established with the noble vision of spreading Sai Baba's teachings of love, compassion, and unity, our temple serves as a spiritual home where people from all walks of life come together in worship and devotion. Here, the timeless message of <span className="highlight">"Sabka Malik Ek"</span> (One God governs all) resonates through every prayer and ritual.
              </p>
              <p>
                We are committed to preserving the authentic traditions while embracing modern facilities to serve our growing community of devotees with utmost dedication and reverence.
              </p>
            </div>
            <div className="about-image">
              <div className="about-image-container">
                <div className="temple-illustration">
                  <i className="fas fa-place-of-worship"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="sai-story">
        <div className="section-ornament"></div>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-subtitle">Divine Journey</div>
            <h2 className="section-title">The Life of Shirdi Sai Baba</h2>
            <p className="section-description">
              Follow the sacred timeline of Sai Baba's divine presence on earth, from his mysterious arrival to his eternal spiritual legacy that continues to bless millions worldwide.
            </p>
          </div>
          
          <div className="story-timeline">
            {timelineItems.map((item, index) => (
              <div key={index} className={`timeline-item reveal stagger-${(index % 6) + 1}`}>
                <div className="timeline-content">
                  <div className="year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="timeline-marker">
                  <i className={item.icon}></i>
                </div>
                <div className="timeline-content">
             
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="temple-history">
        <div className="container">
          <div className="history-content">
            <div className="section-header reveal">
              <div className="section-subtitle" style={{color: 'var(--primary-gold)'}}>Our Journey</div>
              <h2 className="section-title" style={{color: 'white'}}>Temple History & Growth</h2>
              <p className="section-description" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                From humble beginnings to a thriving spiritual community, discover how our temple has grown to serve thousands of devotees with unwavering faith and dedication.
              </p>
            </div>
            
            <div className="history-grid">
              {historyCards.map((card, index) => (
                <div key={index} className={`history-card reveal stagger-${(index % 6) + 1}`}>
                  <div className="history-icon">
                    <i className={card.icon}></i>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="values">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-subtitle">Our Principles</div>
            <h2 className="section-title">Values We Cherish</h2>
            <p className="section-description">
              Guided by Sai Baba's divine teachings, we embrace these core values that shape our temple's mission and inspire our devotees' spiritual journey.
            </p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className={`value-card reveal stagger-${(index % 6) + 1}`}>
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

 
      <footer className="luxury-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">
                  <i className="fas fa-om"></i>
                </div>
                <div className="logo-text">
                  <h3>Shirdi Sai Baba</h3>
                  <p>Temple Malkajgiri</p>
                </div>
              </div>
              <p className="footer-description">
                A sacred sanctuary dedicated to Shirdi Sai Baba, spreading his divine message of love, faith, and unity among all devotees in Malkajgiri and beyond.
              </p>
              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Temple Hours</h4>
              <div className="temple-hours">
                <div className="hour-item">
                  <span>Morning Aarti</span>
                  <span>5:30 AM</span>
                </div>
                <div className="hour-item">
                  <span>Temple Opens</span>
                  <span>6:00 AM</span>
                </div>
                <div className="hour-item">
                  <span>Evening Aarti</span>
                  <span>7:30 PM</span>
                </div>
                <div className="hour-item">
                  <span>Temple Closes</span>
                  <span>9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#events">Events & Festivals</a></li>
                <li><a href="#gallery">Photo Gallery</a></li>
                <li><a href="#donate">Donations</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Information</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Malkajgiri, Secunderabad, Telangana 500047</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+91 98765 43210</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>info@saibabatemple.org</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <span>Daily 6:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Shirdi Sai Baba Temple Malkajgiri. All rights reserved.</p>
            <p>🙏 "श्रद्धा और सबूरी" - Faith and Patience</p>
          </div>
        </div>
      </footer>

     
      {showScrollTop && (
        <button className={`scroll-top ${showScrollTop ? 'show' : ''}`} onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default AboutUs;
