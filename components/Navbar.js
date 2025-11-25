// components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const navItems = [
  { name: 'الرئيسية', path: '/' },
  { name: 'برامجنا الأكاديمية', path: '/academic-programs' },
  { name: 'عن المدرسة', path: '/about' },
  { name: 'أخبار وفعاليات', path: '/news' },
  { name: 'تواصل معنا', path: '/contact' }, 
  { name: 'تطبيق المذاكرة', path: '/study-app' }, // تمت إضافة رابط تطبيق المذاكرة
];

const schoolName = "مدرسة الإخلاص";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false); // حالة القائمة المنسدلة

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* 1. الشعار */}
        <Link href="/" style={styles.logo}>
            {schoolName} 🏫
        </Link>

        {/* 2. زر القائمة المنسدلة (يظهر فقط في الهاتف) */}
        <button 
          style={styles.menuButton} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          // استخدام فئة لتحديد سلوكه في الشاشات المختلفة
          className="navbar-mobile-toggle" 
        >
          {menuOpen ? '✕' : '☰'} 
        </button>

        {/* 3. حاوية الروابط */}
        <div 
          // فئة لتحديد سلوكه في الشاشات المختلفة
          className="navbar-links-container" 
          style={{
            ...styles.navLinksContainer, 
            // 🚨 تطبيق نمط الإظهار/الإخفاء هنا بناءً على حالة menuOpen
            // هذا سيضمن عمل القائمة المنسدلة على الهاتف
            ...(menuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed) 
          }}
        >
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              style={{
                ...styles.navLink,
                ...(router.pathname === item.path ? styles.activeLink : {})
              }}
              onClick={() => setMenuOpen(false)} 
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* 🚨 الأنماط المستجيبة عبر <style jsx global> لضمان التجاوب */}
      <style jsx global>{`
        /* 📱 أنماط الشاشة الصغيرة (الهاتف) */
        @media (max-width: 768px) {
          /* إظهار زر القائمة في الهاتف */
          .navbar-mobile-toggle {
            display: block !important;
          }
          /* الأنماط الافتراضية للروابط: إخفاء القائمة المغلقة */
          .navbar-links-container {
             /* سيتم تجاهل display: flex الافتراضي في النمط المدمج */
          }
        }
        /* 🖥️ أنماط الشاشة الكبيرة (الكمبيوتر) */
        @media (min-width: 769px) {
          /* إخفاء زر القائمة في الكمبيوتر */
          .navbar-mobile-toggle {
            display: none !important;
          }
          /* إظهار الروابط دائماً على الكمبيوتر */
          .navbar-links-container {
            display: flex !important; /* ضمان الظهور */
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </nav>
  );
}

// 🎨 أنماط CSS المدمجة (تم تنظيفها وتعديلها)
const styles = {
  nav: {
    backgroundColor: '#0056b3', 
    color: 'white',
    padding: '15px 0',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    fontSize: '1.8em',
    fontWeight: '800',
    textDecoration: 'none',
    color: 'white',
    transition: 'color 0.2s',
  },
  menuButton: {
    display: 'none', // سيتم تجاوزه بواسطة الـ CSS الخارجي
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.5em',
    cursor: 'pointer',
    zIndex: 200, 
  },
  
  // 🚨 النمط الافتراضي (لشاشة الكمبيوتر) - يجب أن يكون display: flex هنا
  navLinksContainer: {
    display: 'flex', 
  },
  
  // 🚨 حالة القائمة المفتوحة (تطبق على الهاتف)
  mobileMenuOpen: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '65px', 
    left: 0,
    right: 0,
    backgroundColor: '#0056b3',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
    zIndex: 150,
    padding: '10px 0',
    minHeight: '100vh', 
  },
  
  // 🚨 حالة القائمة المغلقة (تطبق على الهاتف)
  mobileMenuClosed: {
    display: 'none', // يجب أن تختفي في الهاتف عند الإغلاق
  },
  
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1em',
    margin: '0 15px',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.2s, color 0.2s',
    
    // أنماط خاصة بالهاتف داخل القائمة المنسدلة
    '@media (max-width: 768px)': {
      margin: '5px 20px',
      padding: '15px 15px', 
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'right',
    },
  },
  activeLink: {
    backgroundColor: '#17a2b8', 
    fontWeight: 'bold',
  },
};
