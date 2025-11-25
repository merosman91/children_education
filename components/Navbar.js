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
        >
          {menuOpen ? '✕' : '☰'} {/* يتغير شكل الزر بين القائمة والإغلاق */}
        </button>

        {/* 3. حاوية الروابط (تظهر في الكمبيوتر وتعتمد على "menuOpen" في الهاتف) */}
        <div 
          // النمط الأساسي الذي يظهر دائماً في الكمبيوتر
          className="desktop-nav-links" 
          style={{
            ...styles.navLinksContainer, 
            // 🚨 هذا النمط يطبق فقط عندما تكون القائمة مفتوحة في الهاتف
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
      
      {/* 🚨 أنماط CSS المخصصة (لتحسين الاستجابة) */}
      <style jsx global>{`
        /* التحكم في إظهار زر القائمة وإخفاء قائمة الروابط على الهاتف */
        @media (max-width: 768px) {
          .desktop-nav-links {
            /* يتم التحكم بها بواسطة حالة menuOpen في React */
            /* لكن نضمن إخفاءها عندما تكون مغلقة */
            /* الـ !important ضروري هنا لتجاوز الأنماط المضمنة */
            
            /* تم نقل منطق الإخفاء إلى الأنماط المدمجة (styles.mobileMenuClosed) */
          }
          /* إظهار زر القائمة في الهاتف */
          button[aria-expanded] {
            display: block !important;
          }
        }
        /* إخفاء زر القائمة في الكمبيوتر */
        @media (min-width: 769px) {
          button[aria-expanded] {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

// 🎨 أنماط CSS المدمجة
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
    display: 'none', // سيتم تجاوزه بواسطة الـ CSS الخارجي (style jsx)
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.5em',
    cursor: 'pointer',
    zIndex: 200, // للتأكد من أنه فوق القائمة
  },
  
  // 🚨 النمط الافتراضي (لشاشة الكمبيوتر)
  navLinksContainer: {
    display: 'flex', // افتراضياً، الروابط تظهر بجانب بعضها
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
    minHeight: '100vh', // تملأ شاشة الهاتف بالكامل عند الفتح
  },
  
  // 🚨 حالة القائمة المغلقة (تطبق على الهاتف)
  mobileMenuClosed: {
    // 🚨 هنا المشكلة، لا يجب أن نطبق display: none هنا إذا كان عرض الشاشة كبيراً
    // سنستخدم استجابة الشاشات المدمجة لتطبيق display: none فقط عندما تكون الشاشة صغيرة
    '@media (max-width: 768px)': {
        display: 'none', 
    },
  },
  
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1em',
    margin: '0 15px',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.2s, color 0.2s',
    
    // أنماط خاصة بالهاتف
    '@media (max-width: 768px)': {
      margin: '5px 20px',
      padding: '15px 15px', // تزيد المساحة لسهولة الضغط
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'right',
    },
  },
  activeLink: {
    backgroundColor: '#17a2b8', 
    fontWeight: 'bold',
  },
};
