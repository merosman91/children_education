// pages/lesson/[subject]/[level].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LessonPage() {
  const router = useRouter();
  const { subject, level } = router.query;
  const [subjectData, setSubjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // جلب جميع المواد ثم استخلاص المادة المطلوبة
  useEffect(() => {
    if (!router.isReady) return;

    async function fetchLessonData() {
      try {
        const response = await fetch('/api/curriculum');
        const allSubjects = await response.json();
        
        // البحث عن المادة المطلوبة
        const targetSubject = allSubjects.find(s => s.subjectId === subject);
        
        setSubjectData(targetSubject);
      } catch (error) {
        console.error("Failed to fetch lesson data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLessonData();
  }, [router.isReady, subject]);


  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '100px', fontSize: '1.5em' }}>جاري إعداد الدرس... 📚</div>;
  }
  
  if (!subjectData) {
    return <div style={{ textAlign: 'center', padding: '100px', color: 'red' }}>🚫 خطأ: لم يتم العثور على المادة المطلوبة.</div>;
  }
  
  const levelData = subjectData.levels.find(l => l.levelId === level);
  
  if (!levelData) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
        <h1>🚫 خطأ 404</h1>
        <p>عذراً، لم يتم العثور على هذا المستوى في مادة {subjectData.name_ar}.</p>
        <Link href="/">العودة للصفحة الرئيسية</Link>
      </div>
    );
  }

  // تحديد المستوى التالي للتدرج
  const currentLevelIndex = subjectData.levels.findIndex(l => l.levelId === level);
  const nextLevel = subjectData.levels[currentLevelIndex + 1];

  return (
    <div style={{ fontFamily: 'Tahoma, sans-serif', direction: 'rtl', padding: '20px', backgroundColor: '#e6f7ff', minHeight: '100vh' }}>
      <Head>
        <title>{levelData.name_ar} - {subjectData.name_ar}</title>
      </Head>

      <Link href="/" style={{ textDecoration: 'none', color: '#0070f3', fontSize: '1.1em', display: 'block', marginBottom: '20px' }}>
        &larr; العودة للمواد
      </Link>

      <header style={{ 
        backgroundColor: '#0070f3', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '10px', 
        marginBottom: '30px' 
      }}>
        <h2>{subjectData.icon} {subjectData.name_ar}: {levelData.name_ar}</h2>
      </header>
      
      <main>
        {levelData.lessons.map((lesson, index) => (
          <div 
            key={lesson.lessonId || index} 
            style={{ 
              backgroundColor: 'white', 
              padding: '20px', 
              borderRadius: '8px', 
              marginBottom: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              borderRight: '5px solid #ffcc00'
            }}
          >
            <h3 style={{ color: '#ff7f00' }}>⭐ {lesson.title_ar}</h3>
            <p style={{ lineHeight: '1.8', color: '#333' }}>{lesson.content_ar}</p>
            
            {/* عرض الأسئلة */}
            {lesson.quiz && lesson.quiz.map((q, qIndex) => (
                <div key={qIndex} style={{ margin: '10px 0', borderTop: '1px dotted #ccc', paddingTop: '10px' }}>
                    <p style={{ fontWeight: 'bold' }}>{qIndex + 1}. {q.question_ar} (النوع: {q.type})</p>
                    {/* **ملاحظة:** هنا يجب بناء المكون التفاعلي للتحقق من الإجابة */}
                </div>
            ))}

          </div>
        ))}
      </main>

      {/* شريط التقدم والتدرج */}
      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        backgroundColor: '#ccffcc', 
        borderRadius: '10px', 
        textAlign: 'center' 
      }}>
        {nextLevel ? (
          <>
            <p style={{ fontWeight: 'bold', color: '#00a854' }}>🎉 أحسنت! أنت جاهز للمستوى التالي.</p>
            <Link 
              href={`/lesson/${subject}/${nextLevel.levelId}`}
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#00a854',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                marginTop: '10px',
                fontWeight: 'bold'
              }}
            >
              انتقل إلى: {nextLevel.name_ar} &rarr;
            </Link>
          </>
        ) : (
          <p style={{ fontWeight: 'bold', color: '#0070f3' }}>🥳 تهانينا! لقد أكملت جميع مستويات هذه المادة حالياً.</p>
        )}
      </div>

    </div>
  );
}
