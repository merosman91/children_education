// pages/contact.js
import Head from 'next/head';
import Link from 'next/link';

const schoolData = {
  name: "مدرسة الإخلاص",
  phone: "+249 (XXX) XXXX XXX", // رقم هاتف المدرسة الرئيسي
  email: "info@alekhlas-school.edu.sd", // بريد إلكتروني افتراضي
  address: "منطقة أبودوم، مدينة مروي، الولاية الشمالية، السودان.",
  mapLink: "https://maps.app.goo.gl/example-location-in-marawi", // رابط افتراضي لموقع المدرسة على الخريطة
};

export default function ContactUs() {
  return (
    <div style={styles.container}>
      <Head>
        <title>اتصل بنا | {schoolData.name}</title>
      </Head>

      <header style={styles.header}>
        <Link href="/" style={styles.homeLink}>&larr; العودة للرئيسية</Link>
        <h1 style={styles.pageTitle}>📞 تواصل معنا</h1>
        <p style={styles.introText}>نحن مستعدون للإجابة على جميع استفساراتكم المتعلقة بالتسجيل والمناهج.</p>
      </header>

      <section style={styles.contentSection}>
        
        {/* معلومات الاتصال الأساسية */}
        <div style={styles.contactDetails}>
          <ContactItem icon="☎️" title="رقم الهاتف الأساسي" value={schoolData.phone} link={`tel:${schoolData.phone.replace(/[\s\(\)]/g, '')}`} />
          <ContactItem icon="✉️" title="البريد الإلكتروني" value={schoolData.email} link={`mailto:${schoolData.email}`} />
          <ContactItem icon="📍" title="عنوان المدرسة" value={schoolData.address} link={schoolData.mapLink} isMap={true} />
        </div>

        <hr style={styles.divider} />
        
        {/* نموذج الاتصال (واجهة فقط) */}
        <h2 style={styles.sectionTitle}>أرسل رسالة</h2>
        <ContactForm />

      </section>

      <footer style={styles.footer}>
        <p>نتطلع للترحيب بكم في مجتمع مدرسة الإخلاص التعليمي.</p>
      </footer>
    </div>
  );
}

// مكون لبطاقة تفاصيل الاتصال
const ContactItem = ({ icon, title, value, link, isMap = false }) => (
    <div style={styles.itemCard}>
        <div style={styles.itemHeader}>
            <span style={styles.itemIcon}>{icon}</span>
            <h3 style={styles.itemTitle}>{title}</h3>
        </div>
        {isMap ? (
            <a href={link} target="_blank" rel="noopener noreferrer" style={styles.itemLink}>
                {value} (افتح الخريطة)
            </a>
        ) : (
            <a href={link} style={styles.itemLink}>{value}</a>
        )}
    </div>
);

// مكون لنموذج الاتصال (لواجهة العرض فقط - يتطلب معالجة خلفية)
const ContactForm = () => (
    <form style={styles.form}>
        <input type="text" placeholder="الاسم الكامل" style={styles.input} required />
        <input type="email" placeholder="البريد الإلكتروني" style={styles.input} required />
        <input type="tel" placeholder="رقم الهاتف" style={styles.input} />
        <textarea placeholder="رسالتك" rows="5" style={styles.textarea} required></textarea>
        <button type="submit" style={styles.submitButton}>إرسال الرسالة</button>
        <p style={styles.note}>ملاحظة: هذا النموذج هو واجهة عرض ويتطلب خدمة خارجية (مثل Formspree أو Vercel Forms) لمعالجة الرسائل.</p>
    </form>
);


// 🎨 أنماط CSS المدمجة
const styles = {
  container: {
    fontFamily: 'Tahoma, Arial, sans-serif',
    direction: 'rtl',
    textAlign: 'right',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
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
  contentSection: {
    padding: '40px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  contactDetails: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '40px',
  },
  itemCard: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    width: '300px',
    textAlign: 'right',
  },
  itemHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
  },
  itemIcon: {
      fontSize: '1.5em',
      marginRight: '10px'
  },
  itemTitle: {
      fontSize: '1.2em',
      color: '#007bff'
  },
  itemLink: {
    display: 'block',
    marginTop: '5px',
    fontSize: '1.1em',
    color: '#333',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: '2em',
    color: '#007bff',
    marginBottom: '30px',
    textAlign: 'center',
  },
  divider: {
      border: '0',
      borderTop: '1px solid #ddd',
      margin: '40px 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  input: {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1em',
  },
  textarea: {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1em',
    resize: 'vertical',
  },
  submitButton: {
    padding: '12px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  note: {
      fontSize: '0.85em',
      color: '#dc3545',
      textAlign: 'center',
      marginTop: '10px',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    fontSize: '0.9em',
    color: '#6c757d',
  }
};
