// pages/academic-programs.js
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const schoolName = "مدرسة الإخلاص";

// تعريف بيانات المراحل التعليمية
const academicStages = [
  {
    title: "المرحلة الابتدائية",
    years: "الصفوف 1 - 6",
    focus: "بناء أساس قوي في القراءة، الكتابة، والحساب. تطوير المهارات الاجتماعية والقيم التربوية.",
    color: '#007bff', // أزرق
    icon: '📚'
  },
  {
    title: "المرحلة المتوسطة",
    years: "الصفوف 7 - 9",
    focus: "التعمق في المواد العلمية والأدبية، وتنمية التفكير النقدي، والتحضير للاختيار التخصصي.",
    color: '#28a745', // أخضر
    icon: '🔬'
  },
  {
    title: "المرحلة الثانوية",
    years: "الصفوف 10 - 12",
    focus: "التخصص (علمي/أدبي)، والتحضير الشامل للامتحانات النهائية للقبول الجامعي.",
    color: '#ffc107', // أصفر/ذهبي
    icon: '🎓'
  },
];

export default function AcademicPrograms() {
  return (
    <div style={styles.container}>
      <Head>
        <title>البرامج الأكاديمية | {schoolName}</title>
      </Head>

      <header style={styles.header}>
        <Link href="/" style={styles.homeLink}>&larr; العودة للرئيسية</Link>
        <h1 style={styles.pageTitle}>البرامج والمراحل التعليمية</h1>
        <p style={styles.introText}>توفر مدرسة الإخلاص تعليمًا متكاملاً للبنين والبنات عبر جميع المراحل.</p>
      </header>

      <section style={styles.stagesContainer}>
        {academicStages.map((stage, index) => (
          <StageCard key={index} stage={stage} />
        ))}
      </section>

      <footer style={styles.footer}>
        <Link href="/study-app" style={styles.appLink}>
          انقر هنا للذهاب إلى تطبيق المذاكرة والمراجعة &rarr;
        </Link>
      </footer>
    </div>
  );
}

// مكون البطاقة للمرحلة التعليمية
const StageCard = ({ stage }) => (
  <div style={{...styles.card, borderTop: `5px solid ${stage.color}`}}>
    <div style={styles.cardHeader}>
        <span style={{fontSize: '2.5em', marginRight: '15px'}}>{stage.icon}</span>
        <h2 style={{...styles.cardTitle, color: stage.color}}>{stage.title}</h2>
    </div>
    <p style={styles.cardYears}>({stage.years})</p>
    <p style={styles.cardFocus}>{stage.focus}</p>
    
    <div style={styles.genderContainer}>
        <span style={styles.genderBadge}>بنين</span>
        <span style={styles.genderBadge}>بنات</span>
    </div>

    <Link href="/contact" style={styles.contactButton}>
        للتسجيل والاستفسار
    </Link>
  </div>
);

// 🎨 أنماط CSS المدمجة
const styles = {
  container: {
    fontFamily: 'Tahoma, Arial, sans-serif',
    direction: 'rtl',
    textAlign: 'right',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    paddingBottom: '50px',
  },
  header: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '30px 20px 50px 20px',
    textAlign: 'center',
    position: 'relative',
  },
  homeLink: {
    position: 'absolute',
    top: '15px',
    right: '20px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1em',
    opacity: 0.8,
  },
  pageTitle: {
    fontSize: '2.5em',
    marginBottom: '10px',
  },
  introText: {
    fontSize: '1.2em',
    fontWeight: '300',
    opacity: 0.9,
  },
  stagesContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginTop: '-30px', // سحب البطاقات للأعلى جزئياً
    padding: '0 20px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    padding: '35px',
    width: '350px',
    transition: 'transform 0.3s',
    textAlign: 'right',
    zIndex: 10,
  },
  cardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
      borderBottom: '1px solid #eee',
      paddingBottom: '10px'
  },
  cardTitle: {
    fontSize: '1.8em',
    marginBottom: '0',
  },
  cardYears: {
    fontSize: '1.1em',
    color: '#6c757d',
    marginBottom: '15px',
  },
  cardFocus: {
    fontSize: '1em',
    lineHeight: '1.7',
    color: '#555',
    minHeight: '80px',
  },
  genderContainer: {
      marginTop: '20px',
      marginBottom: '20px',
      borderTop: '1px dashed #ddd',
      paddingTop: '15px',
      display: 'flex',
      gap: '10px',
  },
  genderBadge: {
      backgroundColor: '#f0f0f0',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '0.9em',
      fontWeight: 'bold',
      color: '#333'
  },
  contactButton: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#ffc107',
    color: '#333',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  footer: {
      textAlign: 'center',
      marginTop: '40px',
  },
  appLink: {
    display: 'inline-block',
    padding: '15px 30px',
    backgroundColor: '#6f42c1', // بنفسجي
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1.1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  }
};
