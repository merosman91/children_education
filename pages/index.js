// pages/index.js
// 🚨 التعديل: استيراد البيانات مباشرة
import Head from 'next/head';
import Link from 'next/link';
import { curriculum } from '../data/curriculum'; // <--- استيراد من ملف data

export default function Home() {
  const subjects = curriculum; // <--- استخدام البيانات المستوردة مباشرة

  // لا حاجة لـ useState أو useEffect أو isLoading بعد الآن!
  
  if (subjects.length === 0) {
    return <div style={{ textAlign: 'center', padding: '100px', fontSize: '1.5em' }}>🚫 لم يتم العثور على أي مواد في ملف curriculum.js.</div>;
  }

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
          const firstLevelId = subjectData.levels && subjectData.levels.length > 0 
                               ? subjectData.levels[0].levelId 
                               : '#';
          
          return (
            <Link 
              key={subjectKey} 
              href={`/lesson/${subjectKey}/${firstLevelId}`} 
              style={{ textDecoration: 'none' }}
            >
              {/* ... (بقية كود بطاقة المادة) ... */}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
 
