// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

// بيانات المدرسة
const schoolData = {
  name: "مدرسة الإخلاص",
  whatsappNumber: "+249 921 027 104",
  facebookLink: "http://facebook.com/alekhlas-school",
};

// عناصر القائمة
const navItems = [
  { name: 'الرئيسية', path: '/' },
  { name: 'برامجنا', path: '/academic-programs' },
  { name: 'عن المدرسة', path: '/about' },
  { name: 'أخبار', path: '/news' },
  { name: 'تواصل', path: '/contact' },
  { name: 'تطبيق المذاكرة', path: '/study-app' },
];

export default function Layout({ children }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={styles.appContainer}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* ==================== 1. شريط التنقل (مدمج هنا) ==================== */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
            
            {/* الشعار */}
            <Link href="/" style={styles.logo}>
                🏫 {schoolData.name}
            </Link>

            {/* زر القائمة (يظهر فقط في الهاتف) */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={styles.menuButton}
            >
                ☰
            </button>

            {/* الروابط (تظهر دائماً في الكمبيوتر، وتعتمد على الزر في الهاتف) */}
            <div style={{
                ...styles.navLinks,
                ...(isMenuOpen ? styles.navLinksOpen : {})
            }}>
                {navItems.map((item) => (
                    <Link 
                        key={item.name} 
                        href={item.path} 
                        style={{
                            ...styles.navLink,
                            backgroundColor: router.pathname === item.path ? '#17a2b8' : 'transparent',
                        }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
      </nav>
      {/* ================================================================= */}

      <main style={styles.mainContent}>
        {children}
      </main>

      {/* التذييل (Footer) */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
            <div style={styles.footerSection}>
                <h3 style={styles.footerTitle}>مدرسة الإخلاص</h3>
                <p style={styles.footerText}>التميز هدفنا.</p>
            </div>
            <div style={styles.footerSection}>
                <h3 style={styles.footerTitle}>تواصل معنا</h3>
                <p style={styles.footerText}>واتساب: {schoolData.whatsappNumber}</p>
            </div>
        </div>
        <div style={styles.copyright}>
            &copy; {new Date().getFullYear()} مدرسة الإخلاص. جميع الحقوق محفوظة.
        </div>
      </footer>

      {/* أنماط CSS خاصة بالجوال فقط لإخفاء/إظهار العناصر */}
      <style jsx global>{`
        /* في شاشات الكمبيوتر (أكبر من 768px) */
        @media (min-width: 769px) {
            .nav-toggle-btn { display: none !important; }
        }
        /* في شاشات الهاتف (أقل من 768px) */
        @media (max-width: 768px) {
            .nav-links-wrapper { 
                display: none; /* مخفي افتراضياً في الهاتف */
                flex-direction: column;
                width: 100%;
            }
            .nav-links-wrapper.open {
                display: flex; /* يظهر عند الفتح */
            }
        }
      `}</style>
    </div>
  );
}

// 🎨 الأنماط
const styles = {
  appContainer: {
    fontFamily: "'Cairo', sans-serif",
    direction: 'rtl',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  // --- Navbar Styles ---
  navbar: {
    backgroundColor: '#0056b3',
    color: 'white',
    padding: '15px 0',
    position: 'relative', 
    zIndex: 1000,
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap', // مهم جداً للهاتف
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  menuButton: {
    background: 'transparent',
    border: '1px solid white',
    color: 'white',
    fontSize: '1.2em',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    // ملاحظة: نقوم بإخفائه في الكمبيوتر عبر style jsx أعلاه إذا لزم الأمر، 
    // ولكن هنا سنتركه ظاهراً كحل أخير إذا فشل كل شيء، يمكننا تحسينه لاحقاً.
    display: 'block', 
    marginLeft: 'auto', // دفعه لليسار
  },
  navLinks: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    // في الهاتف، هذا الجزء سيتم تعديله عبر المتغير isMenuOpen
    width: 'auto',
  },
  // تنسيق القائمة عند الفتح في الهاتف
  navLinksOpen: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255,255,255,0.2)',
    marginTop: '15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    transition: '0.3s',
    display: 'block',
    textAlign: 'center',
    width: '100%', 
  },
  // --- Footer Styles ---
  mainContent: { flexGrow: 1 },
  footer: { backgroundColor: '#1b2a41', color: '#f0f4f8', padding: '30px 20px', marginTop: 'auto' },
  footerContainer: { maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' },
  footerTitle: { color: '#ffc107', borderBottom: '2px solid #ffc107', paddingBottom: '5px', marginBottom: '10px' },
  copyright: { textAlign: 'center', marginTop: '20px', fontSize: '0.9em', color: '#aaa' },
};
 
