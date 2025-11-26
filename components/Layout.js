// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>مدرسة الإخلاص</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ================= اختبار الشريط ================= */}
      {/* خلفية زرقاء فاقعة، نص أبيض، حدود حمراء للتأكد من وجوده */}
      <nav style={{
          backgroundColor: 'blue', 
          color: 'white', 
          padding: '20px', 
          border: '5px solid red', // حدود حمراء واضحة جداً
          textAlign: 'center'
      }}>
        <h1>🏫 شريط التنقل (وضع الاختبار)</h1>
        <div style={{ marginTop: '10px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{color: 'white', fontSize: '1.2em'}}>الرئيسية</Link>
            <Link href="/academic-programs" style={{color: 'white', fontSize: '1.2em'}}>البرامج</Link>
            <Link href="/contact" style={{color: 'white', fontSize: '1.2em'}}>تواصل معنا</Link>
        </div>
      </nav>
      {/* ================================================= */}

      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>

      <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center' }}>
        تذييل الصفحة (Footer)
      </footer>
    </div>
  );
}
