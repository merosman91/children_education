// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
// التأكد من أن المسار صحيح: العودة لمجلد الآب، ثم الدخول لـ data
import { curriculum } from '../data/curriculum'; 

export default function Home() {
  const subjects = curriculum; 
  
  // 1. التحقق من تحميل البيانات
  if (!subjects || subjects.length === 0) {
    // هذا الشرط يعرض رسالة بدلاً من الانهيار إذا كانت البيانات مفقودة أو فارغة
    return (
        <div style={{ textAlign: 'center', padding: '100px', fontSize: '2em', color: '#ff4d4d', backgroundColor: '#fff0f0', minHeight: '100vh' }}>
             ❌ فشل في تحميل البيانات! تحقق من ملف data/curriculum.js.
        </div>
    );
  }

  // 2. عرض الواجهة وبطاقات المواد
  return (
    <div style={{ fontFamily: 'Tahoma, sans-serif', textAlign: 'right', direction: 'rtl', padding: '20px', minHeight: '100vh', backgroundColor: '#f0f8ff' }}>
      <Head>
        <title>منصة التعليم الممتع للأطفال</title>
      </Head>

      <h1 style={{ color: '#0070f3', textAlign: 'center' }}>مرحباً بك في منصة التعلم! 🚀</h1>
      <p style={{ textAlign: 'center', color: '#333' }}>اختر المادة التي تود البدء في تعلمها اليوم:</p>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '20px', 
        marginTop: '40px' 
      }}>
        {subjects.map(subjectData => {
          const subjectKey = subjectData.subjectId; 
          // 🚨 تحديد المستوى الأول لبناء رابط الانتقال (Link)
          const firstLevelId = subjectData.levels && subjectData.levels.length > 0 
                               ? subjectData.levels[0].levelId 
                               : '#'; // إذا لم يكن هناك مستويات، يضع رابط وهمي
          
          return (
            // 🚨 Link يحيط بالبطاقة لتمكين التنقل
            <Link 
              key={subjectKey} 
              href={`/lesson/${subjectKey}/${firstLevelId}`} 
              style={{ textDecoration: 'none' }}
              // منع الانتقال إذا لم يكن هناك مستويات
              onClick={(e) => firstLevelId === '#' && e.preventDefault()}
            >
              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                width: '200px',
                textAlign: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                border: '3px solid #0070f3'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '4em', marginBottom: '10px' }}>{subjectData.icon}</div>
                <h3 style={{ color: '#0070f3' }}>{subjectData.name_ar}</h3>
                <p style={{ fontSize: '0.9em', color: '#666' }}>انقر للبدء</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
