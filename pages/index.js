// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // جلب البيانات من API
  useEffect(() => {
    async function fetchSubjects() {
      try {
        const response = await fetch('/api/curriculum');
        const data = await response.json();
        setSubjects(data);
      } catch (error) {
        console.error("Failed to fetch subjects:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSubjects();
  }, []);

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '100px', fontSize: '1.5em' }}>جاري تحميل المواد... ⏳</div>;
  }
  
  if (subjects.length === 0) {
    return <div style={{ textAlign: 'center', padding: '100px', fontSize: '1.5em' }}>🚫 لم يتم العثور على أي مواد في قاعدة البيانات. يرجى إدخال البيانات في MongoDB Atlas.</div>;
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
          // للتأكد من وجود مستويات وبدء التدرج من المستوى الأول
          const firstLevelId = subjectData.levels && subjectData.levels.length > 0 
                               ? subjectData.levels[0].levelId 
                               : '#'; // وضع # إذا لم يكن هناك مستويات
          
          return (
            <Link 
              key={subjectKey} 
              href={`/lesson/${subjectKey}/${firstLevelId}`} 
              style={{ textDecoration: 'none' }}
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
                <p style={{ fontSize: '0.9em', color: '#666' }}>انقر للبدء من الأساسيات</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
