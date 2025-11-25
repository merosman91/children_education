// pages/study-app/lesson/[subject]/[level].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
// 🚨 التعديل: استيراد البيانات مباشرة
import { curriculum } from '../../../../data/curriculum';

export default function LessonPage() {
  const router = useRouter();
  const { subject, level } = router.query;
  
  // لا حاجة لـ useState أو useEffect أو isLoading بعد الآن!

  // البحث عن المادة المطلوبة محلياً
  const subjectData = curriculum.find(s => s.subjectId === subject);
  
  if (!subjectData) {
    return <div style={{ textAlign: 'center', padding: '100px', color: 'red' }}>🚫 خطأ: لم يتم العثور على المادة المطلوبة.</div>;
  }
  
  // استخراج بيانات المستوى والدرس
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

  const currentLevelIndex = subjectData.levels.findIndex(l => l.levelId === level);
  const nextLevel = subjectData.levels[currentLevelIndex + 1];

  return (
    // ... (بقية كود عرض الواجهة - لا يتطلب تغييرات إضافية)
    <div style={{ /* ... styles ... */ }}>
      {/* ... (Header and Link to Home) ... */}
      
      <main>
        {/* استخدام levelData.lessons لعرض الدروس */}
        {levelData.lessons.map((lesson, index) => (
          <div 
            key={index} 
            style={{ /* ... styles ... */ }}
          >
            <h3 style={{ color: '#ff7f00' }}>⭐ {lesson.title_ar}</h3>
            <p style={{ lineHeight: '1.8', color: '#333' }}>{lesson.content_ar}</p>
          </div>
        ))}
      </main>

      {/* ... (شريط التقدم والتدرج) ... */}
    </div>
  );
}
 
