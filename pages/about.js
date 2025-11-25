// pages/about.js
import Head from 'next/head';
import Layout from '../components/Layout';
import React, { useState } from 'react';

const schoolName = "مدرسة الإخلاص";

// بيانات الرؤية والرسالة والقيم
const missionData = {
  vision: "أن نكون منارة للتميز التعليمي والتربوي في الولاية الشمالية، ونساهم في بناء جيل واعٍ ومؤهل لقيادة المستقبل.",
  mission: "تقديم بيئة تعليمية محفزة وشاملة، تركز على الأخلاق والقيم، وتوظف أحدث المناهج والطرق التدريسية لإطلاق الإمكانات الكاملة لكل طالب.",
  values: [
    { name: "الإخلاص", icon: "💎", description: "التفاني في العمل وتقديم أعلى مستويات الجودة." },
    { name: "الاحترام", icon: "🤝", description: "تعزيز الاحترام المتبادل بين الطلاب والمعلمين والمجتمع." },
    { name: "التميز", icon: "🏆", description: "السعي المستمر لتحقيق الأفضل في كافة المجالات." },
    { name: "التعاون", icon: "🧑‍🤝‍🧑", description: "العمل بروح الفريق لدعم نمو المجتمع المدرسي." },
  ],
};

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>عن المدرسة | {schoolName}</title>
      </Head>

      {/* 1. رأس الصفحة (Hero) */}
      <header style={styles.header}>
        <h1 style={styles.pageTitle}>👋 من نحن؟ (عن مدرسة الإخلاص)</h1>
        <p style={styles.introText}>
          تأسست مدرسة الإخلاص على مبدأ أن التعليم الجيد يبدأ بالقيم والأخلاق.
        </p>
      </header>

      <div style={styles.contentContainer}>
        {/* 2. قسم الرؤية والرسالة */}
        <section style={styles.visionMissionSection}>
          <VisionMissionCard 
            icon="🌟" 
            title="رؤيتنا" 
            text={missionData.vision} 
            color="#0056b3" 
            isVision={true}
          />
          <VisionMissionCard 
            icon="🎯" 
            title="رسالتنا" 
            text={missionData.mission} 
            color="#28a745"
            isVision={false}
          />
        </section>

        {/* 3. قسم القيم الأساسية */}
        <section style={styles.valuesSection}>
          <h2 style={styles.sectionTitle}>قيمنا الأساسية</h2>
          <p style={styles.sectionSubtitle}>هي المبادئ التي توجه كل عمل نقوم به داخل وخارج أسوار المدرسة.</p>
          <div style={styles.valuesGrid}>
            {missionData.values.map((value, index) => (
              <ValueCard key={index} value={value} />
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
}

// 📌 مكون بطاقة الرؤية/الرسالة
const VisionMissionCard = ({ icon, title, text, color, isVision }) => {
    return (
        <div style={{...styles.vmCard, borderLeft: `5px solid ${color}`}}>
            <h3 style={{...styles.vmTitle, color: color}}>
                <span style={styles.vmIcon}>{icon}</span> {title}
            </h3>
            <p style={styles.vmText}>{text}</p>
        </div>
    );
};

// 📌 مكون بطاقة القيمة
const ValueCard = ({ value }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
            style={{...styles.valueCard, ...(isHovered ? styles.valueCardHover : {})}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.valueIcon}>{value.icon}</div>
            <h4 style={styles.valueName}>{value.name}</h4>
            <p style={styles.valueDescription}>{value.description}</p>
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
  contentContainer: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  // قسم الرؤية والرسالة
  visionMissionSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    marginBottom: '60px',
  },
  vmCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    flex: 1,
    minWidth: '350px',
    textAlign: 'right',
  },
  vmTitle: {
    fontSize: '1.8em',
    marginBottom: '15px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
  },
  vmIcon: {
    fontSize: '1.5em',
    marginRight: '10px',
  },
  vmText: {
    fontSize: '1.1em',
    lineHeight: '1.7',
    color: '#555',
  },
  // قسم القيم الأساسية
  valuesSection: {
    textAlign: 'center',
    marginBottom: '60px',
    padding: '40px 0',
  },
  sectionTitle: {
    fontSize: '2.5em',
    color: '#1b2a41',
    marginBottom: '10px',
    fontWeight: '300',
  },
  sectionSubtitle: {
      fontSize: '1.1em',
      color: '#6c757d',
      marginBottom: '40px',
      fontWeight: '300',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginTop: '30px',
  },
  valueCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    borderBottom: '4px solid #ffc107',
  },
  valueCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
  },
  valueIcon: {
    fontSize: '3em',
    marginBottom: '15px',
  },
  valueName: {
    fontSize: '1.5em',
    color: '#0056b3',
    fontWeight: '700',
    marginBottom: '10px',
  },
  valueDescription: {
    fontSize: '1em',
    color: '#555',
  },
};
