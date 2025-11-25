// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

// البيانات الأساسية
const schoolData = {
  name: "مدرسة الإخلاص",
  location: "الولاية الشمالية، مروي، منطقة أبودوم",
  motto: "الأخلاق أولاً، والتميز هدفنا.",
};

export default function Home() {
  return (
    <div style={styles.container}>
      <Head>
        <title>{schoolData.name} | أبودوم، السودان</title>
        <meta name="description" content={`الموقع الرسمي لمدرسة الإخلاص بأبودوم، المراحل الابتدائية والمتوسطة والثانوية (بنين وبنات).`} />
      </Head>

      {/* 1. رأس الصفحة (Hero Section) */}
      <header style={styles.header}>
        <h1 style={styles.title}>{schoolData.name} 🇸🇩</h1>
        <p style={styles.subtitle}>
          مدرسة بالمراحل **الابتدائية، المتوسطة، والثانوية** (بنين وبنات).
        </p>
        <p style={styles.location}>{schoolData.location}</p>
        
        {/* زر التوجيه للتطبيق التعليمي */}
        <Link href="/academic-programs" style={styles.ctaButton}>
          استكشف برامجنا الأكاديمية
        </Link>
      </header>

      {/* 2. قسم المراحل التعليمية */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>المراحل التعليمية</h2>
        <div style={styles.cardsContainer}>
          <StageCard title="المرحلة الابتدائية" icon="🎒" description="بناء الأساس المعرفي والتربوي." />
          <StageCard title="المرحلة المتوسطة" icon="📚" description="تنمية المهارات الأكاديمية والإبداعية." />
          <StageCard title="المرحلة الثانوية" icon="🎓" description="التحضير للجامعة والمستقبل المهني." />
        </div>
      </section>

      {/* 3. قسم رسالة المدرسة (Motto) */}
      <section style={{...styles.section, backgroundColor: '#e9eff4'}}>
        <h2 style={styles.sectionTitle}>رسالتنا وقيمنا</h2>
        <blockquote style={styles.blockquote}>
          "{schoolData.motto}"
        </blockquote>
        <p style={styles.mottoText}>نحن ملتزمون بتوفير بيئة تعليمية آمنة وفعالة لأبناء الولاية الشمالية.</p>
      </section>

      {/* 4. رابط تطبيق المذاكرة */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>تطبيق المراجعة والمذاكرة الرقمي</h2>
        <p style={styles.mottoText}>نوفر لطلابنا منصة رقمية لمراجعة المقررات الدراسية واختبار فهمهم في جميع المواد.</p>
        <Link href="/study-app" style={styles.secondaryButton}>
          اذهب لتطبيق المذاكرة
        </Link>
      </section>

      {/* 5. تذييل الصفحة */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} {schoolData.name}. جميع الحقوق محفوظة.</p>
        <p>مروي، أبودوم | الولاية الشمالية</p>
      </footer>
    </div>
  );
}

// مكون بطاقة المرحلة التعليمية (Component)
const StageCard = ({ title, icon, description }) => (
  <div style={styles.card}>
    <div style={styles.cardIcon}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDescription}>{description}</p>
  </div>
);

// 🎨 أنماط CSS المدمجة (للتوضيح)
const styles = {
  container: {
    fontFamily: 'Tahoma, Arial, sans-serif',
    direction: 'rtl',
    textAlign: 'right',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    color: '#333',
  },
  header: {
    backgroundColor: '#007bff', // لون أزرق جذاب
    color: 'white',
    padding: '80px 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '3em',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.5em',
    fontWeight: '300',
  },
  location: {
    fontSize: '1.2em',
    opacity: 0.8,
    marginBottom: '30px',
  },
  ctaButton: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '12px 25px',
    backgroundColor: '#28a745', // أخضر جذاب
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1.1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  section: {
    padding: '60px 20px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2em',
    color: '#007bff',
    marginBottom: '40px',
    borderBottom: '3px solid #007bff',
    display: 'inline-block',
    paddingBottom: '5px',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    width: '300px',
    transition: 'transform 0.3s',
    borderTop: '5px solid #007bff',
  },
  cardIcon: {
    fontSize: '3em',
    marginBottom: '15px',
  },
  cardTitle: {
    color: '#333',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '0.95em',
    color: '#666',
  },
  blockquote: {
    fontSize: '1.8em',
    fontStyle: 'italic',
    color: '#007bff',
    margin: '30px auto',
    maxWidth: '800px',
    borderRight: '5px solid #28a745',
    paddingRight: '15px',
    lineHeight: '1.6',
  },
  mottoText: {
      fontSize: '1.1em',
      color: '#555'
  },
  secondaryButton: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#6c757d', // رمادي
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1em',
    transition: 'background-color 0.3s',
  },
  footer: {
    backgroundColor: '#343a40',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    fontSize: '0.9em',
  },
};
