// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout'; 
import React, { useState } from 'react'; 

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

      {/* 1. رأس الصفحة (Hero Section) - تصميم جديد */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
            <span style={styles.schoolLogo}>🌟</span>
            <h1 style={styles.title}>{schoolData.name}</h1>
            
            <p style={styles.subtitle}>
              {schoolData.motto}
            </p>
            
            <p style={styles.location}>{schoolData.location}</p>
            
            <InteractiveLink href="/academic-programs" buttonStyle={styles.ctaButton} hoverStyle={styles.ctaButtonHover}>
              استكشف برامجنا الأكاديمية
            </InteractiveLink>
        </div>
      </header>

      {/* 2. قسم المراحل التعليمية - بطاقات عصرية */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>مراحلنا التعليمية</h2>
        <p style={styles.sectionSubtitle}>مناهجنا مُصممة لتبني قادة المستقبل في جميع المجالات.</p>
        <div style={styles.cardsContainer}>
          <StageCard title="المرحلة الابتدائية" icon="🎒" description="بناء الأساس المعرفي والتربوي." color="#007bff" />
          <StageCard title="المرحلة المتوسطة" icon="📚" description="تنمية المهارات الأكاديمية والإبداعية." color="#28a745" />
          <StageCard title="المرحلة الثانوية" icon="🎓" description="التحضير للجامعة والمستقبل المهني." color="#ffc107" />
        </div>
      </section>

      {/* 3. رابط تطبيق المذاكرة - قسم دعوة للعمل */}
      <section style={styles.callToActionSection}>
        <div style={styles.callToActionContent}>
            <h2 style={styles.callToActionTitle}>منصة الطالب الرقمية للمراجعة</h2>
            <p style={styles.callToActionText}>اختبارات، مراجعات، ومقاطع تعليمية مُدعمة لجميع المراحل.</p>
            <InteractiveLink href="/study-app" buttonStyle={styles.secondaryButton} hoverStyle={styles.secondaryButtonHover}>
              انطلق إلى تطبيق المذاكرة <span style={{fontSize: '1.2em'}}>🚀</span>
            </InteractiveLink>
        </div>
      </section>

    </Layout>
  );
}

// 📌 مكون الرابط التفاعلي (مُعاد استخدامه)
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

// 📌 مكون بطاقة المرحلة التفاعلية (مُعاد استخدامه)
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

// 🎨 أنماط CSS المُحسنة (لجعلها تبدو احترافية)
const styles = {
  header: {
    // خلفية ذات تدرج لوني خفيف
    background: 'linear-gradient(135deg, #0056b3 0%, #17a2b8 100%)', 
    color: 'white',
    padding: '100px 20px',
    textAlign: 'center',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)', // شكل موجة خفيفة
  },
  headerContent: {
      maxWidth: '900px',
      margin: '0 auto',
  },
  schoolLogo: {
      fontSize: '4em',
      marginBottom: '10px',
      display: 'block',
      animation: 'pulse 2s infinite', // إضافة حركة خفيفة (تتطلب <style jsx>)
  },
  title: {
    fontSize: '4em',
    marginBottom: '10px',
    fontWeight: '200', // استخدام خط رفيع (احترافي أكثر)
    letterSpacing: '2px',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  subtitle: {
    fontSize: '1.5em',
    fontWeight: '300',
    marginBottom: '20px',
    opacity: 0.9,
  },
  location: {
    fontSize: '1.1em',
    opacity: 0.8,
    marginBottom: '40px',
  },
  // 🟢 زر العمل الرئيسي (CTA Button)
  ctaButton: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '15px 40px',
    backgroundColor: '#ffc107', // لون ذهبي براق
    color: '#1b2a41', // نص أزرق داكن
    textDecoration: 'none',
    borderRadius: '8px', // حواف أقل استدارة
    fontSize: '1.3em',
    fontWeight: '700',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
  },
  ctaButtonHover: { 
      backgroundColor: '#ffa000', 
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
  },
  section: {
    padding: '80px 20px 40px 20px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '3em',
    color: '#1b2a41', // أزرق داكن
    marginBottom: '10px',
    fontWeight: '300', // خط رفيع
  },
  sectionSubtitle: {
      fontSize: '1.2em',
      color: '#6c757d',
      marginBottom: '50px',
      fontWeight: '300',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  // 📦 بطاقة المرحلة التعليمية
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    // ظل ناعم وحديث
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    padding: '35px',
    width: '320px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    borderLeft: '5px solid', // استخدام Border Left بدلاً من Top
    textAlign: 'right',
  },
  cardHover: { 
      transform: 'translateY(-8px)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
  },
  cardIcon: {
    fontSize: '2.5em',
    marginBottom: '10px',
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '1em',
    color: '#555',
  },
  // 🟣 قسم الدعوة للعمل (CTA Section)
  callToActionSection: {
      backgroundColor: '#f0f4f8',
      padding: '70px 20px',
      textAlign: 'center',
      marginTop: '50px',
  },
  callToActionContent: {
      maxWidth: '800px',
      margin: '0 auto',
  },
  callToActionTitle: {
      fontSize: '2.5em',
      color: '#0056b3',
      marginBottom: '10px',
      fontWeight: '600',
  },
  callToActionText: {
      fontSize: '1.2em',
      color: '#444',
      marginBottom: '30px',
  },
  secondaryButton: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '12px 30px',
    backgroundColor: '#6f42c1', 
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    fontSize: '1.1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  secondaryButtonHover: { 
      backgroundColor: '#5a369e',
      transform: 'scale(1.03)',
  }
};
