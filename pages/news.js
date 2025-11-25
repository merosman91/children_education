// pages/news.js
import Head from 'next/head';
import Layout from '../components/Layout';
import React, { useState } from 'react';

const schoolName = "مدرسة الإخلاص";

// بيانات الأخبار الافتراضية
const dummyNews = [
  {
    id: 1,
    title: "حفل تكريم الطلاب المتفوقين للعام الدراسي 2024",
    date: "25 نوفمبر 2024",
    summary: "أقامت المدرسة حفلاً بهيجاً لتكريم الطلاب الأوائل في جميع المراحل، بحضور أولياء الأمور والشخصيات التعليمية.",
    image: "[صورة لحفل التكريم]",
    tag: "فعالية"
  },
  {
    id: 2,
    title: "المدرسة تطلق منصة رقمية جديدة للمراجعات والاختبارات",
    date: "10 نوفمبر 2024",
    summary: "بهدف دعم التعلم عن بعد والمراجعة، تم إطلاق تطبيق المذاكرة الرقمي للوصول السهل للمقررات.",
    image: "[صورة لشاشة التطبيق]",
    tag: "إعلان"
  },
  {
    id: 3,
    title: "دورة تدريبية للمعلمين حول أساليب التدريس الحديثة",
    date: "1 نوفمبر 2024",
    summary: "شارك كادر المعلمين في دورة مكثفة لتبني أحدث الاستراتيجيات التعليمية المتمحورة حول الطالب.",
    image: "[صورة للمعلمين في التدريب]",
    tag: "تدريب"
  },
];

export default function NewsAndEvents() {
  return (
    <Layout>
      <Head>
        <title>الأخبار والفعاليات | {schoolName}</title>
      </Head>

      {/* 1. رأس الصفحة (Hero) */}
      <header style={styles.header}>
        <h1 style={styles.pageTitle}>📢 أخبار وفعاليات المدرسة</h1>
        <p style={styles.introText}>
          تابع آخر المستجدات والفعاليات والاحتفالات التي تقام في مدرسة الإخلاص.
        </p>
      </header>

      {/* 2. قسم الأخبار */}
      <section style={styles.newsSection}>
        <div style={styles.newsGrid}>
          {dummyNews.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
        {/* رابط افتراضي لأرشيف الأخبار */}
        <div style={styles.archiveLinkContainer}>
            <Link href="#" style={styles.archiveLink}>
                تصفح أرشيف الأخبار القديمة »
            </Link>
        </div>
      </section>
    </Layout>
  );
}

// 📌 مكون بطاقة الخبر
const NewsCard = ({ news }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // محاكاة للصورة باستخدام اللون
    const imagePlaceholderStyle = {
        ...styles.newsImagePlaceholder,
        backgroundColor: news.tag === 'فعالية' ? '#007bff20' : news.tag === 'إعلان' ? '#28a74520' : '#ffc10720',
        color: news.tag === 'فعالية' ? '#007bff' : news.tag === 'إعلان' ? '#28a745' : '#ffc107',
    };

    return (
        <div 
            style={{...styles.newsCard, ...(isHovered ? styles.newsCardHover : {})}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={imagePlaceholderStyle}>
                {news.tag === 'فعالية' && '📸'}
                {news.tag === 'إعلان' && '📣'}
                {news.tag === 'تدريب' && '📝'}
            </div>
            <div style={styles.cardContent}>
                <span style={styles.newsTag}>{news.tag}</span>
                <h3 style={styles.newsTitle}>{news.title}</h3>
                <p style={styles.newsSummary}>{news.summary}</p>
                <div style={styles.newsFooter}>
                    <span style={styles.newsDate}>🗓️ {news.date}</span>
                    <Link href="#" style={styles.readMoreLink}>اقرأ المزيد</Link>
                </div>
            </div>
        </div>
    );
};

// 🎨 أنماط CSS المُحسنة
const styles = {
  header: {
    backgroundColor: '#eef2f7',
    color: '#1b2a41',
    padding: '50px 20px',
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: '3em',
    marginBottom: '10px',
    color: '#0056b3',
    fontWeight: '300',
  },
  introText: {
    fontSize: '1.2em',
    fontWeight: '300',
    opacity: 0.9,
    maxWidth: '800px',
    margin: '0 auto',
  },
  newsSection: {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  newsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px',
    marginBottom: '40px',
  },
  newsCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  newsCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
  },
  newsImagePlaceholder: {
      width: '100%',
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '4em',
      fontWeight: 'bold',
  },
  cardContent: {
      padding: '25px',
      textAlign: 'right',
      flexGrow: 1,
  },
  newsTag: {
      display: 'inline-block',
      backgroundColor: '#f0f0f0',
      color: '#333',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '0.8em',
      fontWeight: 'bold',
      marginBottom: '10px',
  },
  newsTitle: {
      fontSize: '1.6em',
      color: '#1b2a41',
      fontWeight: '700',
      marginBottom: '10px',
      minHeight: '40px',
  },
  newsSummary: {
      fontSize: '1em',
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '20px',
  },
  newsFooter: {
      marginTop: 'auto',
      paddingTop: '15px',
      borderTop: '1px solid #eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  newsDate: {
      fontSize: '0.9em',
      color: '#6c757d',
  },
  readMoreLink: {
      color: '#0056b3',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'color 0.2s',
  },
  archiveLinkContainer: {
      textAlign: 'center',
      marginTop: '20px',
  },
  archiveLink: {
      fontSize: '1.1em',
      color: '#0056b3',
      textDecoration: 'none',
      fontWeight: 'bold',
      padding: '10px 20px',
      border: '1px solid #0056b3',
      borderRadius: '8px',
      transition: 'background-color 0.3s, color 0.3s',
  },
};
