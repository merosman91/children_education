// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout'; 
import React, { useState } from 'react'; // 🚨 لاستخدام حالة الـ hover

// البيانات الأساسية
const schoolData = {
  name: "مدرسة الإخلاص",
  location: "الولاية الشمالية، مروي، منطقة أبودوم",
  motto: "الأخلاق أولاً، والتميز هدفنا.",
};

export default function Home() {
  return (
    <Layout> 
      <Head>
        <title>{schoolData.name} | أبودوم، السودان</title>
        <meta name="description" content={`الموقع الرسمي لمدرسة الإخلاص بأبودوم، المراحل الابتدائية والمتوسطة والثانوية (بنين وبنات).`} />
      </Head>

      {/* 1. رأس الصفحة (Hero Section) */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
            <div style={styles.logoSection}>
                <span style={styles.schoolLogo}>🏫</span>
                <h1 style={styles.title}>{schoolData.name} <span style={{fontSize: '0.8em'}}>🇸🇩</span></h1>
            </div>
            
            <p style={styles.subtitle}>
              مدرسة بالمراحل <span style={styles.highlightText}>الابتدائية، المتوسطة، والثانوية</span> (بنين وبنات).
            </p>
            <p style={styles.location}>{schoolData.location}</p>
            
            <InteractiveLink href="/academic-programs" buttonStyle={styles.ctaButton} hoverStyle={styles.ctaButtonHover}>
              استكشف برامجنا الأكاديمية
            </InteractiveLink>
        </div>
      </header>

      {/* 2. قسم المراحل التعليمية */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>مراحلنا التعليمية</h2>
        <div style={styles.cardsContainer}>
          <StageCard title="المرحلة الابتدائية" icon="🎒" description="بناء الأساس المعرفي والتربوي." color="#007bff" />
          <StageCard title="المرحلة المتوسطة" icon="📚" description="تنمية المهارات الأكاديمية والإبداعية." color="#28a745" />
          <StageCard title="المرحلة الثانوية" icon="🎓" description="التحضير للجامعة والمستقبل المهني." color="#ffc107" />
        </div>
      </section>

      {/* 3. رابط تطبيق المذاكرة */}
      <section style={{...styles.section, backgroundColor: '#f0f4f8'}}>
        <h2 style={styles.sectionTitle}>منصة الطالب الرقمية</h2>
        <p style={styles.mottoText}>نوفر لطلابنا منصة رقمية لمراجعة المقررات الدراسية واختبار فهمهم في جميع المواد.</p>
        <InteractiveLink href="/study-app" buttonStyle={styles.secondaryButton} hoverStyle={styles.secondaryButtonHover}>
          انطلق إلى تطبيق المذاكرة <span style={{fontSize: '1.2em'}}>🚀</span>
        </InteractiveLink>
      </section>

    </Layout>
  );
}

// 📌 مكون الرابط التفاعلي (لتحسين UX)
const InteractiveLink = ({ href, children, buttonStyle, hoverStyle }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link 
      href={href} 
      style={{...buttonStyle, ...(isHovered ? hoverStyle : {})}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
};

// 📌 مكون بطاقة المرحلة التفاعلية (لتحسين UX)
const StageCard = ({ title, icon, description, color }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
            style={{
                ...styles.card, 
                borderTopColor: color,
                ...(isHovered ? styles.cardHover : {})
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.cardIcon}>{icon}</div>
            <h3 style={{...styles.cardTitle, color: color}}>{title}</h3>
            <p style={styles.cardDescription}>{description}</p>
        </div>
    );
};

// 🎨 أنماط CSS المدمجة
const styles = {
  header: {
    backgroundColor: '#0056b3', 
    color: 'white',
    padding: '80px 20px',
    textAlign: 'center',
  },
  headerContent: {
      maxWidth: '900px',
      margin: '0 auto',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  schoolLogo: {
      fontSize: '4em',
      marginRight: '20px',
      transform: 'rotateY(180deg)'
  },
  title: {
    fontSize: '3.5em',
    marginBottom: '5px',
    fontWeight: '800', 
    // استجابة لشاشات الهواتف
    '@media (maxWidth: 600px)': {
        fontSize: '2.5em',
    },
  },
  subtitle: {
    fontSize: '1.8em',
    fontWeight: '300',
    marginBottom: '15px',
  },
  highlightText: {
    fontWeight: 'bold',
    color: '#ffc107', 
  },
  location: {
    fontSize: '1.1em',
    opacity: 0.9,
    marginBottom: '40px',
  },
  // 🟢 زر العمل الرئيسي (CTA Button)
  ctaButton: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '15px 35px',
    backgroundColor: '#28a745', 
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
  ctaButtonHover: { // تأثير الـ Hover
      backgroundColor: '#1e7e34', 
      transform: 'translateY(-2px) scale(1.02)',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
  },
  section: {
    padding: '60px 20px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2.5em',
    color: '#0056b3',
    marginBottom: '40px',
    fontWeight: '700',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
  },
  // 📦 بطاقة المرحلة التعليمية
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    padding: '30px',
    width: '320px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    borderTop: '8px solid',
    cursor: 'pointer',
  },
  cardHover: { // تأثير الـ Hover
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
  },
  cardIcon: {
    fontSize: '3.5em',
    marginBottom: '15px',
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: '1.6em',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '1em',
    color: '#555',
  },
  mottoText: {
      fontSize: '1.2em',
      color: '#444'
  },
  // 🟣 زر التطبيق التعليمي
  secondaryButton: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '15px 30px',
    backgroundColor: '#6f42c1', // بنفسجي
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    fontSize: '1.1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
  },
  secondaryButtonHover: { // تأثير الـ Hover
      backgroundColor: '#5a369e',
      transform: 'scale(1.05)',
  }
};
