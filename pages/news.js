// pages/news.js
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

const announcements = [
  {
    id: 3,
    date: "25 نوفمبر 2025",
    title: "بدء التسجيل للمرحلة الثانوية للعام الدراسي الجديد",
    summary: "تعلن المدرسة عن فتح باب التسجيل للمرحلة الثانوية للبنين والبنات، الأولوية للمسجلين الأوائل. يرجى زيارة صفحة 'اتصل بنا' للتفاصيل.",
    type: 'تسجيل',
    color: '#007bff'
  },
  {
    id: 2,
    date: "10 نوفمبر 2025",
    title: "تفعيل تطبيق المذاكرة الإلكتروني",
    summary: "تم إطلاق منصة الطالب الرقمية بشكل رسمي لمراجعة المقررات. يمكن لجميع الطلاب الوصول إليها عبر الرابط المخصص.",
    type: 'تقني',
    color: '#28a745'
  },
  {
    id: 1,
    date: "01 نوفمبر 2025",
    title: "مواعيد اختبارات نهاية الفصل للمرحلة المتوسطة",
    summary: "تم تحديد جداول الامتحانات النهائية للفصل الدراسي الأول للمرحلة المتوسطة. يرجى تحميل الجدول من بوابة الطالب.",
    type: 'اختبارات',
    color: '#dc3545'
  },
];

export default function NewsPage() {
  return (
    <Layout>
      <Head>
        <title>الأخبار والإعلانات | مدرسة الإخلاص</title>
      </Head>

      <div style={styles.pageContainer}>
        <header style={styles.header}>
            <h1 style={styles.pageTitle}>🔔 الأخبار والإعلانات</h1>
            <p style={styles.introText}>آخر المستجدات والإشعارات الهامة لطلابنا وأولياء الأمور.</p>
        </header>
        
        <div style={styles.announcementsList}>
            {announcements.map(item => (
                <AnnouncementCard key={item.id} item={item} />
            ))}
            {announcements.length === 0 && (
                <p style={styles.noNews}>لا توجد إعلانات حالياً.</p>
            )}
        </div>
        
      </div>
    </Layout>
  );
}

const AnnouncementCard = ({ item }) => (
    <div style={styles.card}>
        <div style={styles.cardHeader}>
            <span style={{...styles.tag, backgroundColor: item.color}}>{item.type}</span>
            <span style={styles.date}>{item.date}</span>
        </div>
        <h3 style={styles.cardTitle}>{item.title}</h3>
        <p style={styles.cardSummary}>{item.summary}</p>
        <Link href="/contact" style={styles.readMore}>للتفاصيل أو الاستفسار &rarr;</Link>
    </div>
);

const styles = {
  pageContainer: {
    direction: 'rtl',
    textAlign: 'right',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 20px 60px 20px',
  },
  header: {
    padding: '40px 0',
    textAlign: 'center',
    marginBottom: '40px',
  },
  pageTitle: {
    fontSize: '3em',
    color: '#0056b3',
    marginBottom: '10px',
  },
  introText: {
    fontSize: '1.2em',
    color: '#6c757d',
  },
  announcementsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
  },
  card: {
      backgroundColor: 'white',
      padding: '25px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
      borderRight: '5px solid #0056b3',
  },
  cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
      borderBottom: '1px dashed #eee',
      paddingBottom: '10px',
  },
  tag: {
      color: 'white',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '0.85em',
      fontWeight: 'bold',
  },
  date: {
      fontSize: '0.9em',
      color: '#6c757d',
  },
  cardTitle: {
      fontSize: '1.5em',
      color: '#333',
      marginBottom: '10px',
  },
  cardSummary: {
      fontSize: '1em',
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '15px',
  },
  readMore: {
      color: '#0056b3',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '0.95em',
      display: 'block',
      textAlign: 'left',
  },
  noNews: {
      textAlign: 'center',
      fontSize: '1.5em',
      color: '#aaa',
      padding: '50px 0',
  }
};
 
