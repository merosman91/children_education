// pages/index.js
import Layout from '../components/Layout'; // 🚨 تأكد من النقطتين (..)

export default function Home() {
  return (
    <Layout>
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>مرحباً بك في الصفحة الرئيسية</h2>
        <p>إذا كنت ترى الشريط الأزرق ذو الحدود الحمراء في الأعلى، فالمشكلة حُلَّت!</p>
      </div>
    </Layout>
  );
}
