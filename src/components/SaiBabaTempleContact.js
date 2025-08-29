import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  ArrowUp, 
  Menu,
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Sun,
  Moon,
  Gift,
  GraduationCap,
  Baby,
  Users,
  BookOpen,
  HandHeart,
  CalendarDays,
  Bird,
  Info
} from 'lucide-react';

const SaiBabaTemple = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    // Preloader timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all reveal elements after component mounts
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100;
      const targetPosition = element.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const styles = `
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
      cursor: pointer;
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
      cursor: pointer;
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
      right: ${isMobileMenuOpen ? '0' : '-100%'};
      width: 300px;
      height: 100vh;
      background: var(--pearl-white);
      box-shadow: var(--shadow-dramatic);
      transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1001;
      padding: 6rem 2rem 2rem;
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

    .hero {
      height: 100vh;
      background:
        linear-gradient(rgba(26, 26, 26, 0.4), rgba(114, 47, 55, 0.3)),
        radial-gradient(circle at 30% 70%, rgba(201, 169, 97, 0.15) 0%, transparent 50%),
        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="luxury-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="2" fill="%23C9A961" opacity="0.1"/><circle cx="10" cy="10" r="1" fill="%23C9A961" opacity="0.05"/><circle cx="50" cy="50" r="1" fill="%23C9A961" opacity="0.05"/></pattern></defs><rect width="1200" height="800" fill="%23722F37"/><rect width="1200" height="800" fill="url(%23luxury-pattern)"/></svg>') center/cover;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      position: relative;
      overflow: hidden;
    }

    .hero-ornament {
      position: absolute;
      width: 300px;
      height: 300px;
      border: 2px solid rgba(201, 169, 97, 0.1);
      border-radius: 50%;
      top: 20%;
      right: 10%;
      animation: floatElegant 6s ease-in-out infinite;
    }

    .hero-ornament::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 200px;
      border: 1px solid rgba(201, 169, 97, 0.08);
      border-radius: 50%;
    }

    @keyframes floatElegant {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }

    .hero-content {
      max-width: 900px;
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

    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: 4.5rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, white 0%, var(--primary-gold) 50%, white 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1.1;
      letter-spacing: -2px;
    }

    .hero-subtitle {
      font-family: 'Crimson Text', serif;
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: var(--primary-gold);
      font-style: italic;
      letter-spacing: 0.5px;
    }

    .hero-description {
      font-size: 1.2rem;
      margin-bottom: 3rem;
      opacity: 0.9;
      line-height: 1.8;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      font-weight: 300;
    }

    .hero-cta {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-primary {
      background: linear-gradient(135deg, var(--primary-gold), var(--accent-copper));
      color: white;
      padding: 1.2rem 3rem;
      border: none;
      border-radius: 60px;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: var(--shadow-elegant);
      letter-spacing: 0.3px;
      cursor: pointer;
    }

    .cta-primary:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-dramatic);
    }

    .cta-secondary {
      background: transparent;
      color: white;
      padding: 1.2rem 3rem;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 60px;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(10px);
      letter-spacing: 0.3px;
      cursor: pointer;
    }

    .cta-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--primary-gold);
      transform: translateY(-2px);
    }

    .features {
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

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 3rem;
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

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 3rem;
      margin-top: 4rem;
    }

    .feature-card {
      background: white;
      padding: 3rem 2.5rem;
      border-radius: 20px;
      box-shadow: var(--shadow-soft);
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(201, 169, 97, 0.1);
    }

    .feature-card::before {
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

    .feature-card:hover::before {
      transform: scaleX(1);
    }

    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-dramatic);
    }

    .feature-icon {
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

    .feature-card:hover .feature-icon {
      transform: scale(1.05) rotate(5deg);
    }

    .feature-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--deep-burgundy);
      margin-bottom: 1rem;
      letter-spacing: -0.3px;
    }

    .feature-card p {
      color: var(--soft-gray);
      line-height: 1.7;
      font-size: 1.05rem;
      font-weight: 300;
    }

    .services {
      padding: 8rem 0;
      background: linear-gradient(135deg, var(--deep-burgundy) 0%, var(--luxury-black) 100%);
      color: white;
      position: relative;
      overflow: hidden;
    }

    .services::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="luxury-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23C9A961" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23luxury-dots)"/></svg>');
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2.5rem;
      margin-top: 4rem;
      position: relative;
      z-index: 2;
    }

    .service-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      padding: 2.5rem 2rem;
      border-radius: 24px;
      border: 1px solid rgba(201, 169, 97, 0.2);
      text-align: center;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }

    .service-card:hover {
      background: rgba(255, 255, 255, 0.08);
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .service-icon {
      font-size: 3rem;
      color: var(--primary-gold);
      margin-bottom: 1.5rem;
      display: block;
    }

    .service-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: white;
    }

    .service-card p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      font-weight: 300;
    }

    .luxury-footer {
      background: linear-gradient(135deg, var(--luxury-black) 0%, var(--deep-burgundy) 100%);
      color: white;
      padding: 5rem 0 2rem;
      position: relative;
    }

    .luxury-footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="footer-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="15" cy="15" r="1" fill="%23C9A961" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23footer-pattern)"/></svg>');
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
      cursor: pointer;
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
      cursor: pointer;
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
      opacity: ${showScrollTop ? '1' : '0'};
      visibility: ${showScrollTop ? 'visible' : 'hidden'};
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1000;
      box-shadow: var(--shadow-elegant);
    }

    .scroll-top:hover {
      transform: translateY(-4px) scale(1.05);
      box-shadow: var(--shadow-dramatic);
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

    @media (max-width: 1024px) {
      .header-content {
        padding: 1.5rem 2rem;
      }
     
      .container {
        padding: 0 2rem;
      }
     
      .hero-title {
        font-size: 3.5rem;
      }
     
      .features-grid {
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
      }
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .mobile-toggle {
        display: flex;
      }

      .hero-title {
        font-size: 2.8rem;
      }

      .hero-description {
        font-size: 1.1rem;
      }

      .hero-cta {
        flex-direction: column;
        align-items: center;
      }

      .section-title {
        font-size: 2.5rem;
      }

      .features-grid,
      .services-grid {
        grid-template-columns: 1fr;
      }

      .feature-card {
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
     
      .hero-title {
        font-size: 2.2rem;
      }
     
      .logo-text h1 {
        font-size: 1.4rem;
      }
     
      .cta-primary,
      .cta-secondary {
        padding: 1rem 2rem;
        font-size: 1rem;
      }
    }
  `;

  const features = [
    {
      icon: HandHeart,
      title: 'Daily Prayers & Aarti',
      description: 'Join our spiritual community for morning and evening prayers, traditional aarti ceremonies, and devotional singing that fills the temple with divine energy and peace.'
    },
    {
      icon: BookOpen,
      title: 'Spiritual Teachings',
      description: 'Discover the profound wisdom of Sai Baba through regular spiritual discourses, scripture readings, and teachings that guide devotees on their spiritual journey.'
    },
    {
      icon: HandHeart,
      title: 'Community Service',
      description: 'Follow Sai Baba\'s teachings of service to humanity through our community outreach programs, food distribution, and charitable activities that help those in need.'
    },
    {
      icon: CalendarDays,
      title: 'Sacred Festivals',
      description: 'Celebrate the rich traditions of our faith through vibrant festivals, special pujas, and religious ceremonies that bring our community together in devotion.'
    },
    {
      icon: Bird,
      title: 'Peaceful Meditation',
      description: 'Find inner tranquility in our dedicated meditation spaces, designed to provide a serene environment for contemplation and spiritual reflection.'
    },
    {
      icon: Users,
      title: 'Spiritual Community',
      description: 'Connect with fellow devotees in a welcoming spiritual family that supports each other\'s journey towards divine realization and personal growth.'
    }
  ];

  const services = [
    {
      icon: Sun,
      title: 'Morning Prayers',
      description: 'Begin your day with divine blessings through our morning prayer sessions, featuring traditional mantras and devotional songs.'
    },
    {
      icon: Moon,
      title: 'Evening Aarti',
      description: 'Join the soul-stirring evening aarti ceremony that illuminates hearts with divine light and spiritual energy.'
    },
    {
      icon: Gift,
      title: 'Special Pujas',
      description: 'Participate in elaborate puja ceremonies for personal milestones, seeking blessings for health, prosperity, and happiness.'
    },
    {
      icon: GraduationCap,
      title: 'Religious Education',
      description: 'Learn about Hindu scriptures, Sai Baba\'s teachings, and spiritual practices through our educational programs for all ages.'
    },
    {
      icon: Heart,
      title: 'Wedding Ceremonies',
      description: 'Celebrate the sacred union of marriage with traditional Hindu wedding ceremonies blessed by Sai Baba\'s divine presence.'
    },
    {
      icon: Baby,
      title: 'Life Ceremonies',
      description: 'Mark important life milestones with traditional ceremonies including naming ceremonies, first rice feeding, and coming of age rituals.'
    }
  ];

  const templeHours = [
    { day: 'Monday - Friday', hours: '6:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '5:00 AM - 9:00 PM' },
    { day: 'Sunday', hours: '5:00 AM - 9:00 PM' },
    { day: 'Special Events', hours: 'Extended Hours' }
  ];

  const footerLinks = [
    { text: 'Home', href: '#home' },
    { text: 'About Us', href: '#about' },
    { text: 'Temple Services', href: '#services' },
    { text: 'Events & Festivals', href: '#events' },
    { text: 'Volunteer', href: '#volunteer' },
    { text: 'Donations', href: '#donate' }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      {/* Preloader */}
      <div className={`preloader ${!isLoading ? 'hide' : ''}`}>
        <div className="loader-container">
          <div className="luxury-spinner"></div>
          <div className="loader-text">Loading Divine Experience</div>
        </div>
      </div>

      {/* Header */}
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="header-content">
          <div className="luxury-logo" onClick={() => scrollToSection('home')}>
            <div className="logo-icon">
              <HandHeart size={24} />
            </div>
            <div className="logo-text">
              <h1>Sai Baba Temple</h1>
              <p>Divine Sanctuary</p>
            </div>
          </div>
          
          <nav className="nav-container">
            <ul className="nav-links">
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a onClick={() => scrollToSection('events')}>Events</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
            
            <button className="premium-donate-btn" onClick={() => scrollToSection('donate')}>
              <Heart size={16} />
              Donate
            </button>
            
            <button className="mobile-toggle" onClick={toggleMobileMenu}>
              <Menu size={20} />
            </button>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        <div className="mobile-menu">
          <ul className="nav-links">
            <li><a onClick={() => { scrollToSection('home'); setIsMobileMenuOpen(false); }}>Home</a></li>
            <li><a onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }}>About</a></li>
            <li><a onClick={() => { scrollToSection('services'); setIsMobileMenuOpen(false); }}>Services</a></li>
            <li><a onClick={() => { scrollToSection('events'); setIsMobileMenuOpen(false); }}>Events</a></li>
            <li><a onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}>Contact</a></li>
            <li>
              <button className="premium-donate-btn" onClick={() => { scrollToSection('donate'); setIsMobileMenuOpen(false); }}>
                <Heart size={16} />
                Donate
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-ornament"></div>
        <div className="hero-content">
          <div className="hero-subtitle">ॐ सांई राम ॐ</div>
          <h1 className="hero-title">Divine Sanctuary</h1>
          <p className="hero-description">
            Welcome to the sacred abode of Shirdi Sai Baba in North Texas.
            Experience divine blessings, inner peace, and spiritual awakening in our
            magnificent temple dedicated to the beloved saint.
          </p>
          <div className="hero-cta">
            <button className="cta-primary" onClick={() => scrollToSection('services')}>
              <HandHeart size={16} />
              Visit Temple
            </button>
            <button className="cta-secondary" onClick={() => scrollToSection('about')}>
              <Info size={16} />
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="about">
        <div className="section-ornament"></div>
        <div className="container">
          <div className={`section-header reveal ${visibleElements.has('section-header-1') ? 'visible' : ''}`} id="section-header-1">
            <div className="section-subtitle">Sacred Traditions</div>
            <h2 className="section-title">Experience Divine Blessings</h2>
            <p className="section-description">
              Our temple stands as a beacon of faith, offering a serene sanctuary where
              devotees can connect with the divine presence of Shirdi Sai Baba and find solace in prayer.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className={`feature-card reveal stagger-${index + 1} ${visibleElements.has(`feature-${index}`) ? 'visible' : ''}`}
                  id={`feature-${index}`}
                >
                  <div className="feature-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className={`section-header reveal ${visibleElements.has('section-header-2') ? 'visible' : ''}`} id="section-header-2">
            <div className="section-subtitle">Temple Services</div>
            <h2 className="section-title">Sacred Offerings</h2>
            <p className="section-description">
              Immerse yourself in our comprehensive spiritual services designed to nurture
              your connection with the divine and support your spiritual growth.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className={`service-card reveal stagger-${index + 1} ${visibleElements.has(`service-${index}`) ? 'visible' : ''}`}
                  id={`service-${index}`}
                >
                  <div className="service-icon">
                    <IconComponent size={48} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="luxury-footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">
                  <HandHeart size={24} />
                </div>
                <div className="logo-text">
                  <h3>Sai Baba Temple</h3>
                  <p>Divine Sanctuary</p>
                </div>
              </div>
              <p className="footer-description">
                A sacred sanctuary dedicated to Shirdi Sai Baba, fostering spiritual growth,
                community service, and divine connection in the heart of North Texas.
              </p>
              <div className="social-links">
                <a href="#" className="social-link"><Facebook size={18} /></a>
                <a href="#" className="social-link"><Twitter size={18} /></a>
                <a href="#" className="social-link"><Instagram size={18} /></a>
                <a href="#" className="social-link"><Youtube size={18} /></a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Temple Hours</h4>
              <div className="temple-hours">
                {templeHours.map((hour, index) => (
                  <div key={index} className="hour-item">
                    <span>{hour.day}</span>
                    <span>{hour.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a onClick={() => scrollToSection(link.href.substring(1))}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Information</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>1234 Temple Drive<br />North Texas, TX 75000</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>info@saibabatemple-tx.org</span>
                </div>
                <div className="contact-item">
                  <Globe size={16} />
                  <span>www.saibabatemple-tx.org</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Sai Baba Temple North Texas. All rights reserved.</p>
            <p>"सबका मालिक एक" - One God Governs All</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button className="scroll-top" onClick={scrollToTop}>
        <ArrowUp size={20} />
      </button>
    </>
  );
};

export default SaiBabaTemple;
