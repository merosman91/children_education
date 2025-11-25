// components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const navItems = [
  { name: 'الرئيسية', path: '/' },
  { name: 'برامجنا الأكاديمية', path: '/academic-programs' },
  { name: 'عن المدرسة', path: '/about' },
  { name: 'أخبار وفعاليات', path: '/news' },
  { name: 'تواصل معنا', path: '/contact' }, // 🚨 تم إضافة رابط صفحة التواصل
];

const schoolName = "مدرسة الإخلاص";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* اسم المدرسة (الشعار) */}
        <Link href="/" style={styles.logo}>
            {schoolName} 🏫
        </Link>

        {/* زر قائمة الهاتف (Burger Menu) */}
        <button style={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* روابط التنقل الرئيسية */}
        <div style={{...styles.navLinks, ...(menuOpen ? styles.navLinksOpen : {})}}>
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              style={{
                ...styles.navLink,
                ...(router.pathname === item.path ? styles.activeLink : {})
              }}
              onClick={() => setMenuOpen(false)} // إغلاق القائمة بعد الضغط على الرابط في الهاتف
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
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
    display: 'none', // يُخفى في الشاشات الكبيرة
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.5em',
    cursor: 'pointer',
    // 🚨 يُظهر في شاشات الهاتف
    '@media (maxWidth: 768px)': {
        display: 'block',
    },
  },
  navLinks: {
    display: 'flex',
    // 🚨 استجابة الهاتف: يختفي في وضع الهاتف افتراضياً
    '@media (maxWidth: 768px)': {
      display: 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '65px', 
      left: 0,
      right: 0,
      backgroundColor: '#0056b3',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      zIndex: 100,
      padding: '10px 0',
    },
  },
  navLinksOpen: {
    display: 'flex', // يظهر عند الضغط على زر القائمة
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1em',
    margin: '0 15px',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.2s, color 0.2s',
    // 🚨 استجابة الهاتف: يأخذ عرضاً كاملاً
    '@media (maxWidth: 768px)': {
      margin: '5px 20px',
      padding: '10px 15px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'right',
    },
  },
  activeLink: {
    backgroundColor: '#17a2b8', // لون مميز للرابط الحالي
    fontWeight: 'bold',
  },
};
