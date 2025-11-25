// pages/academic-programs.js
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import React, { useState } from 'react';

const schoolName = "مدرسة الإخلاص";

// تعريف بيانات المراحل التعليمية
const academicStages = [
  {
    title: "المرحلة الابتدائية",
    years: "الصفوف 1 - 6",
    focus: "بناء أساس قوي في القراءة، الكتابة، والحساب. تطوير المهارات الاجتماعية والقيم التربوية.",
    color: '#007bff', // أزرق
    icon: '🎒'
  },
  {
    title: "المرحلة المتوسطة",
    years: "الصفوف 7 - 9",
    focus: "التعمق في المواد العلمية والأدبية، وتنمية التفكير النقدي، والتحضير للاختيار التخصصي.",
    color: '#28a745', // أخضر
    icon: '📚'
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
    <Layout>
      <Head>
        <title>البرامج الأكاديمية | {schoolName}</title>
      </Head>

      <header style={styles.header}>
        <h1 style={styles.pageTitle}>البرامج والمراحل التعليمية</h1>
        <p style={styles.introText}>
          توفر مدرسة الإخلاص تعليمًا متكاملاً للبنين والبنات عبر جميع المراحل، وفق أرقى المعايير.
        </p>
      </header>

      <section style={styles.stagesContainer}>
        {academicStages.map((stage, index) => (
          <StageCard key={index} stage={stage} />
        ))}
      </section>

      <section style={styles.callToActionSection}>
        <h2 style={styles.callToActionTitle}>جاهز للبدء في مسيرتك التعليمية؟</h2>
        <p style={styles.callToActionText}>تواصل معنا اليوم لمعرفة شروط التسجيل للعام الدراسي الجديد.</p>
        <InteractiveLink href="/contact" buttonStyle={styles.contactButton} hoverStyle={styles.contactButtonHover}>
          للتسجيل والاستفسار اضغط هنا 📞
        </InteractiveLink>
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
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
};

// 📌 مكون البطاقة للمرحلة التعليمية (مُحسن)
const StageCard = ({ stage }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        style={{
          ...styles.card,
          borderLeft: `5px solid ${stage.color}`, // تم تغيير Border Top إلى Left
          ...(isHovered ? styles.cardHover : {})
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
    fontWeight: '300', // خط رفيع
  },
  introText: {
    fontSize: '1.2em',
    fontWeight: '300',
    opacity: 0.9,
    maxWidth: '800px',
    margin: '0 auto',
  },
  stagesContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    padding: '60px 20px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    // ظل ناعم وحديث
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    padding: '35px',
    width: '350px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    textAlign: 'right',
    cursor: 'pointer',
    zIndex: 10,
    borderRight: 'none', // لا نريد Border Right
  },
  cardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
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
    fontWeight: '700',
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
  // قسم الدعوة للعمل الجديد
  callToActionSection: {
    backgroundColor: '#1b2a41',
    color: 'white',
    padding: '60px 20px',
    textAlign: 'center',
    marginTop: '50px',
  },
  callToActionTitle: {
      fontSize: '2.5em',
      marginBottom: '10px',
      fontWeight: '300',
  },
  callToActionText: {
      fontSize: '1.2em',
      opacity: 0.9,
      marginBottom: '30px',
  },
  contactButton: {
    display: 'inline-block',
    padding: '15px 40px',
    backgroundColor: '#ffc107',
    color: '#1b2a41',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1.3em',
    fontWeight: '700',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
  },
  contactButtonHover: {
      backgroundColor: '#ffa000',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
  },
};
