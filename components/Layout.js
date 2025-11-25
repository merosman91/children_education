// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';

// البيانات الأساسية
const schoolData = {
  name: "مدرسة الإخلاص",
  whatsappNumber: "+249 921 027 104",
  facebookLink: "http://facebook.com/alekhlas-school",
};

export default function Layout({ children }) {
  return (
    <div style={styles.appContainer}>
      <Head>
        {/* إضافة خط Cairo من Google Fonts */}
        <link rel="preconnect" href="http://fonts.googleapis.com" />
        <link rel="preconnect" href="http://fonts.gstatic.com" crossOrigin="true" />
        <link href="http://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;800&display=swap" rel="stylesheet" />
        {/* viewport لتحسين العرض على الهاتف */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* شريط التنقل (Navbar) */}
      {/* Navbar يبقى كما هو في ملفه، لكنه سيتأثر بالخط الجديد */}
      
      <main style={styles.mainContent}>
        {children}
      </main>

      {/* التذييل (Footer) */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
            <div style={styles.footerSection}>
                <h3 style={styles.footerTitle}>مدرسة الإخلاص</h3>
                <p style={styles.footerText}>الأخلاق أولاً، والتميز هدفنا. نعمل على تقديم تعليم متكامل يركز على القيم والجودة الأكاديمية.</p>
            </div>

            <div style={styles.footerSection}>
                <h3 style={styles.footerTitle}>روابط سريعة</h3>
                <ul style={styles.footerList}>
                    <li><Link href="/academic-programs" style={styles.footerLink}>البرامج الأكاديمية</Link></li>
                    <li><Link href="/about" style={styles.footerLink}>عن المدرسة</Link></li>
                    <li><Link href="/contact" style={styles.footerLink}>تواصل معنا</Link></li>
                </ul>
            </div>

            <div style={styles.footerSection}>
                <h3 style={styles.footerTitle}>تواصل معنا</h3>
                <p style={styles.footerText}>واتساب: <a href={`https://wa.me/249921027104`} style={styles.footerLink} target="_blank" rel="noopener noreferrer">{schoolData.whatsappNumber}</a></p>
                <p style={styles.footerText}>فيسبوك: <a href={schoolData.facebookLink} style={styles.footerLink} target="_blank" rel="noopener noreferrer">صفحتنا الرسمية</a></p>
            </div>
        </div>
        <div style={styles.copyright}>
            &copy; {new Date().getFullYear()} {schoolData.name}. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}

// 🎨 أنماط CSS المُحسنة
const styles = {
  appContainer: {
    fontFamily: "'Cairo', sans-serif",
    direction: 'rtl',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff', // خلفية بيضاء نظيفة
    color: '#333333',
  },
  mainContent: {
    flexGrow: 1,
  },
  
  // 🔽 أنماط التذييل (Footer) المُحسنة 🔽
  footer: {
    backgroundColor: '#1b2a41', // أزرق داكن جديد (Navy Blue)
    color: '#f0f4f8', // لون فاتح للنص
    padding: '40px 20px 20px 20px',
    marginTop: '50px',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    paddingBottom: '20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    flexWrap: 'wrap',
    gap: '30px',
  },
  footerSection: {
    minWidth: '200px',
    flex: 1,
  },
  footerTitle: {
    fontSize: '1.4em',
    marginBottom: '15px',
    color: '#ffc107', // لون ذهبي لتسليط الضوء
    fontWeight: '700',
    borderRight: '3px solid #ffc107',
    paddingRight: '10px',
  },
  footerText: {
    fontSize: '0.95em',
    lineHeight: 1.6,
    marginBottom: '10px',
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerLink: {
    color: '#c0c0c0',
    textDecoration: 'none',
    transition: 'color 0.2s',
    display: 'block',
    padding: '5px 0',
  },
  copyright: {
    textAlign: 'center',
    fontSize: '0.85em',
    color: '#a0a0a0',
    marginTop: '20px',
  },
};
