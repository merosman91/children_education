// pages/study-app/index.js
import Head from 'next/head';
import Link from 'next/link';
// 🚨 يجب التأكد من صحة المسار النسبي: (..) للعودة من study-app، (..) للعودة من pages، ثم الدخول لـ data
import { curriculum } from '../../data/curriculum'; 

export default function StudyAppHome() {
  const subjects = curriculum; 
  
  // 1. التحقق من تحميل البيانات
  if (!subjects || subjects.length === 0) {
    return (
        <div style={styles.errorContainer}>
             ❌ فشل في تحميل المقررات! تحقق من ملف data/curriculum.js.
             <Link href="/" style={styles.backLink}>العودة للموقع الرسمي</Link>
        </div>
    );
  }

  // 2. عرض لوحة تحكم المواد
  return (
    <div style={styles.container}>
      <Head>
        <title>لوحة التحكم التعليمية | مدرسة الإخلاص</title>
      </Head>

      <header style={styles.header}>
        <Link href="/" style={styles.exitButton}>الخروج والعودة للموقع</Link>
        <h1 style={styles.title}>📚 لوحة المذاكرة والمراجعة</h1>
        <p style={styles.subtitle}>اختر المادة والمرحلة التي تود البدء بها:</p>
      </header>
      
      <div style={styles.contentArea}>
        {/* حلقة تكرار لعرض بطاقات المواد */}
        <div style={styles.cardsContainer}>
          {subjects.map(subjectData => {
            const subjectKey = subjectData.subjectId; 
            
            // تحديد رابط أول مستوى لتسهيل الدخول المباشر
            const firstLevelId = subjectData.levels && subjectData.levels.length > 0 
                               ? subjectData.levels[0].levelId 
                               : '#'; 
            
            // الرابط يوجه إلى: /study-app/lesson/[subjectId]/[levelId]
            const lessonPath = `/study-app/lesson/${subjectKey}/${firstLevelId}`;

            return (
              <Link 
                key={subjectKey} 
                href={lessonPath} 
                style={styles.cardLink}
                onClick={(e) => firstLevelId === '#' && e.preventDefault()}
              >
                <div style={styles.card}>
                  <div style={styles.cardIcon}>{subjectData.icon}</div>
                  <h3 style={styles.cardTitle}>{subjectData.name_ar}</h3>
                  <p style={styles.cardDescription}>ابدأ المراجعة</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// 🎨 أنماط CSS المدمجة لتصميم لوحة التحكم
const styles = {
  container: {
    fontFamily: 'Tahoma, Arial, sans-serif',
    direction: 'rtl',
    textAlign: 'right',
    backgroundColor: '#eef2f7', // خلفية فاتحة ومريحة للعين
    minHeight: '100vh',
    color: '#333',
  },
  header: {
    backgroundColor: '#6a1b9a', // لون بنفسجي غامق
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  },
  exitButton: {
    position: 'absolute',
    top: '15px',
    right: '20px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.9em',
    opacity: 0.8,
    border: '1px solid rgba(255, 255, 255, 0.5)',
    padding: '5px 10px',
    borderRadius: '5px',
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '5px',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: '1.2em',
    fontWeight: '300',
    opacity: 0.9,
  },
  contentArea: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  card: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    width: '250px',
    textAlign: 'center',
    cursor: 'pointer',
    borderBottom: '5px solid #6a1b9a', // شريط لوني للمسة تعليمية
    height: '180px', // توحيد ارتفاع البطاقات
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardIcon: {
    fontSize: '3.5em',
    marginBottom: '10px',
  },
  cardTitle: {
    color: '#333',
    marginBottom: '5px',
    fontSize: '1.4em',
  },
  cardDescription: {
    fontSize: '0.9em',
    color: '#6a1b9a',
    fontWeight: 'bold',
  },
  errorContainer: {
    textAlign: 'center', 
    padding: '100px', 
    fontSize: '1.5em', 
    color: '#dc3545', 
    minHeight: '100vh',
    backgroundColor: '#fff0f0'
  },
  backLink: {
      display: 'block',
      marginTop: '20px',
      color: '#007bff',
  }
};
