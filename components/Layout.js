import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'عن المدرسة', path: '/about' },
  { name: 'منصة الطالب', path: '/study-app', isSpecial: true },
  { name: 'تواصل معنا', path: '/contact' },
];

export default function Layout({ children }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // حالة قائمة الهاتف

  return (
    <div className="layout-container">
      {/* ================= Navbar ================= */}
      <nav className="navbar">
        <div className="container nav-content">
          {/* الشعار */}
          <Link href="/" className="logo">
            🏫 مدرسة الإخلاص
          </Link>

          {/* زر الهاتف */}
          <button 
            className="mobile-toggle" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>

          {/* الروابط */}
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`nav-item ${router.pathname === link.path ? 'active' : ''} ${link.isSpecial ? 'special-btn' : ''}`}
                onClick={() => setIsOpen(false)} // إغلاق القائمة عند الضغط
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= المحتوى ================= */}
      <main className="main-content container">
        {children}
      </main>

      {/* ================= Footer ================= */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} مدرسة الإخلاص - الولاية الشمالية، مروي، أبودوم.</p>
      </footer>

      {/* ================= CSS (الأنماط) ================= */}
      <style jsx>{`
        /* تنسيقات الحاوية */
        .layout-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navbar Styles */
        .navbar {
          background-color: #004d40; /* أخضر غامق احترافي */
          color: white;
          padding: 1rem 0;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        /* زر الهاتف */
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.8rem;
          cursor: pointer;
        }

        /* روابط التنقل */
        .nav-links {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .nav-item {
          padding: 8px 12px;
          border-radius: 5px;
          transition: 0.3s;
        }
        .nav-item:hover, .nav-item.active {
          background-color: rgba(255,255,255,0.1);
        }
        /* الزر المميز (منصة الطالب) */
        .special-btn {
          background-color: #ffca28;
          color: #333;
          font-weight: bold;
        }
        .special-btn:hover {
          background-color: #ffb300;
        }

        /* Footer */
        .footer {
          background-color: #263238;
          color: white;
          text-align: center;
          padding: 20px;
          margin-top: auto;
        }

        /* ============ استجابة الهاتف (Mobile) ============ */
        @media (max-width: 768px) {
          .mobile-toggle {
            display: block; /* إظهار الزر */
          }
          .nav-links {
            display: none; /* إخفاء الروابط افتراضياً */
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #004d40;
            padding: 20px;
            width: 100%;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .nav-links.open {
            display: flex; /* إظهار الروابط عند الفتح */
          }
          .nav-item {
            width: 100%;
            text-align: center;
            padding: 15px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
        }
      `}</style>
    </div>
  );
}
