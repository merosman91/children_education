// pages/about.js
import Head from 'next/head';
import Layout from '../components/Layout';

const schoolInfo = {
  vision: "أن نكون منارة تعليمية رائدة في الولاية الشمالية، ونساهم في بناء جيل سوداني واعٍ ومؤهل للتنافس العالمي، محافظاً على قيم مجتمعه.",
  mission: "توفير بيئة تعليمية محفزة وشاملة، تركز على التفوق الأكاديمي، وتنمية المهارات القيادية، وتعزيز القيم الإسلامية والسودانية الأصيلة لدى جميع طلابنا وطالباتنا في المراحل الثلاث.",
  history: "تأسست مدرسة الإخلاص في منطقة أبودوم بمدينة مروي في عام [عام التأسيس]، إيماناً بأهمية التعليم النوعي لأبناء المنطقة، وقد تطورت لتشمل المراحل الابتدائية والمتوسطة والثانوية للبنين والبنات.",
};

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>عن المدرسة | مدرسة الإخلاص</title>
      </Head>

      <div style={styles.pageContainer}>
        <header style={styles.header}>
            <h1 style={styles.pageTitle}>عن مدرسة الإخلاص</h1>
            <p style={styles.introText}>منذ [عام التأسيس] ونحن ملتزمون بالتميز في الولاية الشمالية.</p>
        </header>

        {/* Vision Section */}
        <Section title="رؤيتنا" icon="🌟" color="#0056b3">
            <p style={styles.visionText}>{schoolInfo.vision}</p>
        </Section>

        {/* Mission Section */}
        <Section title="رسالتنا" icon="🎯" color="#28a745">
            <p style={styles.missionText}>{schoolInfo.mission}</p>
        </Section>
        
        {/* History Section */}
        <Section title="تاريخنا وموقعنا" icon="🏛️" color="#ffc107">
            <p style={styles.historyText}>{schoolInfo.history.replace('[عام التأسيس]', '2005')}</p>
            <p style={styles.historyLocation}><strong>الموقع:</strong> أبودوم، مروي، الولاية الشمالية.</p>
        </Section>

      </div>
    </Layout>
  );
}

const Section = ({ title, icon, color, children }) => (
    <section style={styles.section}>
        <h2 style={{...styles.sectionTitle, borderRightColor: color}}>
            <span style={{color: color, marginRight: '10px'}}>{icon}</span>
            {title}
        </h2>
        <div style={styles.sectionContent}>
            {children}
        </div>
    </section>
);


const styles = {
  pageContainer: {
    direction: 'rtl',
    textAlign: 'right',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px 60px 20px',
  },
  header: {
    padding: '40px 0',
    textAlign: 'center',
    borderBottom: '2px solid #eee',
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
  section: {
    marginBottom: '50px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
  },
  sectionTitle: {
    fontSize: '2em',
    fontWeight: '700',
    borderRight: '5px solid', 
    paddingRight: '15px',
    marginBottom: '20px',
  },
  sectionContent: {
      fontSize: '1.1em',
      lineHeight: '1.8',
      color: '#444'
  },
  visionText: {
      fontStyle: 'italic',
      color: '#0056b3',
      fontSize: '1.3em',
      textAlign: 'center',
      padding: '20px',
  },
  missionText: {
      color: '#28a745',
      fontSize: '1.2em',
      padding: '10px 0',
      fontWeight: '500',
  },
  historyText: {
      marginBottom: '15px',
  },
  historyLocation: {
      fontWeight: 'bold',
      color: '#ffc107',
  }
};
