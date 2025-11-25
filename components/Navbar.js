// components/Navbar.js - نسخة مبسطة لضمان الظهور
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const navItems = [
  { name: 'الرئيسية', path: '/' },
  { name: 'برامجنا', path: '/academic-programs' },
  { name: 'عن المدرسة', path: '/about' },
  { name: 'أخبار', path: '/news' },
  { name: 'تواصل', path: '/contact' },
  { name: 'تطبيق المذاكرة', path: '/study-app' },
];

const schoolName = "مدرسة الإخلاص";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* الشعار */}
        <Link href="/" style={styles.logo}>
            {schoolName} 🏫
        </Link>

        {/* 🚨 عرض الروابط مباشرة (بشكل أفقي) بدون قائمة منسدلة */}
        <div style={styles.navLinksContainer}>
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              style={{
                ...styles.navLink,
                ...(router.pathname === item.path ? styles.activeLink : {})
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

// 🎨 أنماط CSS المدمجة (تم تبسيطها)
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
    // 🚨 لضمان ظهور الروابط على الهاتف، سنقوم بلفها إذا لزم الأمر
    flexWrap: 'wrap', 
  },
  logo: {
    fontSize: '1.8em',
    fontWeight: '800',
    textDecoration: 'none',
    color: 'white',
    transition: 'color 0.2s',
  },
  
  navLinksContainer: {
    display: 'flex', 
    alignItems: 'center',
    // لضمان استمرار الروابط بجانب بعضها قدر الإمكان
    flexWrap: 'wrap', 
  },
  
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.0em',
    margin: '5px 10px',
    padding: '5px 8px',
    borderRadius: '5px',
    transition: 'background-color 0.2s, color 0.2s',
  },
  activeLink: {
    backgroundColor: '#17a2b8', 
    fontWeight: 'bold',
  },
};
