// pages/contact.js
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout'; // 🚨 تم إضافة استيراد Layout

// البيانات المُحدثة
const schoolData = {
  name: "مدرسة الإخلاص",
  whatsappNumber: "921027104", // الرقم بدون رمز الدولة (السودان)
  whatsappLink: "https://wa.me/249921027104", // رابط الواتساب برمز الدولة +249
  email: "info@alekhlas-school.edu.sd", 
  address: "منطقة أبودوم، مدينة مروي، الولاية الشمالية، السودان.",
  // إحداثيات افتراضية لمنطقة مروي (يجب تعديلها لتحديد موقع أبودوم بدقة)
  mapEmbedUrl: "http://googleusercontent.com/maps/embed?pb=!1m18!1m12!1m3!1d15446.40209635032!2d31.8797148!3d18.4283996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x143c7438e3e4a9e5%3A0x629c19356885368a!2sMerowe%2C%20Sudan!5e0!3m2!1sen!2sae!4v1703606400000!5m2!1sen!2sae", 
};

export default function ContactUs() {
  return (
    <Layout> {/* 🚨 تغليف المحتوى بالـ Layout */}
      <Head>
        <title>اتصل بنا | {schoolData.name}</title>
      </Head>

      <header style={styles.header}>
        {/* 🚨 تم حذف رابط العودة للرئيسية لأنه موجود في الـ Navbar */}
        <h1 style={styles.pageTitle}>📞 تواصل معنا</h1>
        <p style={styles.introText}>نحن مستعدون للإجابة على جميع استفساراتكم المتعلقة بالتسجيل والمناهج.</p>
      </header>

      <section style={styles.contentSection}>
        
        {/* معلومات الاتصال الأساسية */}
        <div style={styles.contactDetails}>
          <ContactItem icon="🟢" title="تواصل عبر الواتساب" value={`+249 ${schoolData.whatsappNumber}`} link={schoolData.whatsappLink} isWhatsapp={true} />
          <ContactItem icon="✉️" title="البريد الإلكتروني" value={schoolData.email} link={`mailto:${schoolData.email}`} />
          <ContactItem icon="📍" title="عنوان المدرسة" value={schoolData.address} link={`http://maps.google.com/?q=${encodeURIComponent(schoolData.address)}`} isAddress={true} />
        </div>

        <hr style={styles.divider} />
        
        {/* نموذج الإرسال عبر الواتساب */}
        <h2 style={styles.sectionTitle}>أرسل رسالة عبر الواتساب</h2>
        <WhatsappForm whatsappLink={schoolData.whatsappLink.split('?')[0]} />
        
        {/* خريطة جوجل */}
        <h2 style={styles.sectionTitle}>موقعنا على الخريطة</h2>
        <div style={styles.mapContainer}>
            <iframe
                src={schoolData.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

      </section>

      {/* 🚨 تم حذف التذييل (Footer) لأنه موجود الآن في Layout */}
    </Layout>
  );
}

// مكون لبطاقة تفاصيل الاتصال
const ContactItem = ({ icon, title, value, link, isWhatsapp = false, isAddress = false }) => (
    <div style={styles.itemCard}>
        <div style={styles.itemHeader}>
            <span style={styles.itemIcon}>{icon}</span>
            <h3 style={styles.itemTitle}>{title}</h3>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" style={isWhatsapp ? styles.whatsappLink : styles.itemLink}>
            {value} 
            {isWhatsapp && ' (انقر لبدء المحادثة)'}
            {isAddress && ' (شاهد الخريطة)'}
        </a>
    </div>
);

// مكون نموذج الإرسال عبر الواتساب
const WhatsappForm = ({ whatsappLink }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;
        
        const fullMessage = `
        *رسالة استفسار من الموقع الإلكتروني:*
        الاسم: ${name}
        رقم الهاتف: ${phone}
        الرسالة: ${message}
        `;
        
        const encodedMessage = encodeURIComponent(fullMessage.trim());
        const baseUrl = whatsappLink; // https://wa.me/249921027104
        const whatsappUrl = `${baseUrl}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="الاسم الكامل" style={styles.input} required />
            <input type="tel" name="phone" placeholder="رقم الهاتف للتواصل (مطلوب)" style={styles.input} required />
            <textarea name="message" placeholder="رسالتك أو استفسارك (مثل: استفسار عن التسجيل في المرحلة الثانوية)" rows="4" style={styles.textarea} required></textarea>
            <button type="submit" style={styles.whatsappButton}>إرسال عبر واتساب <span style={{fontSize: '1.2em'}}>💬</span></button>
            <p style={styles.note}> سيتم فتح تطبيق واتساب مباشرة لإرسال رسالتك.</p>
        </form>
    );
};


// 🎨 أنماط CSS المدمجة (تم حذف أنماط Footer و Font)
const styles = {
  // تم حذف fontFamily و direction و minHeight لأنهما في Layout
  container: {
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#eef2f7',
    color: '#333',
    padding: '30px 20px 50px 20px',
    textAlign: 'center',
    position: 'relative',
  },
  pageTitle: {
    fontSize: '2.5em',
    marginBottom: '10px',
    color: '#0056b3',
  },
  introText: {
    fontSize: '1.2em',
    fontWeight: '300',
    opacity: 0.9,
  },
  contentSection: {
    padding: '40px 20px',
    maxWidth: '1200px',
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
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
    width: '320px',
    textAlign: 'right',
    borderBottom: '4px solid #0056b3',
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
      fontSize: '1.3em',
      color: '#0056b3',
      fontWeight: 'bold',
  },
  itemLink: {
    display: 'block',
    marginTop: '5px',
    fontSize: '1.1em',
    color: '#333',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  whatsappLink: {
    display: 'block',
    marginTop: '10px',
    fontSize: '1.1em',
    color: '#25D366',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: '2em',
    color: '#0056b3',
    marginBottom: '30px',
    textAlign: 'center',
    fontWeight: '700',
  },
  divider: {
      border: '0',
      borderTop: '1px solid #ccc',
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
    margin: '0 auto 40px auto',
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
  whatsappButton: {
    padding: '15px',
    backgroundColor: '#25D366', 
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  note: {
      fontSize: '0.85em',
      color: '#444',
      textAlign: 'center',
      marginTop: '10px',
  },
  mapContainer: {
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      marginBottom: '40px',
  },
};
