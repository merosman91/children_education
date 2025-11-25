// pages/contact.js
import Head from 'next/head';
import Link from 'next/link';

// البيانات المُحدثة
const schoolData = {
  name: "مدرسة الإخلاص",
  whatsappNumber: "921027104", // الرقم بدون رمز الدولة (السودان)
  whatsappLink: "https://wa.me/249921027104", // رابط الواتساب برمز الدولة +249
  email: "info@alekhlas-school.edu.sd", 
  address: "منطقة أبودوم، مدينة مروي، الولاية الشمالية، السودان.",
  // إحداثيات افتراضية لمنطقة مروي (يجب تعديلها لتحديد موقع أبودوم بدقة)
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115820.739775953!2d31.78912065876008!3d18.49880860888998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4e13.1!3m3!1m2!1s0x145a32b0a340b171%3A0x8f3c713b14068579!2z2KzZg9mF2LE!5e0!3m2!1sar!2ssd!4v1700000000000!5m2!1sar!2ssd", 
};

export default function ContactUs() {
  return (
    <div style={styles.container}>
      <Head>
        <title>اتصل بنا | {schoolData.name}</title>
      </Head>

      <header style={styles.header}>
        <Link href="/" style={styles.homeLink}>← العودة للرئيسية</Link>
        <h1 style={styles.pageTitle}>📞 تواصل معنا</h1>
        <p style={styles.introText}>نحن مستعدون للإجابة على جميع استفساراتكم المتعلقة بالتسجيل والمناهج.</p>
      </header>

      <section style={styles.contentSection}>
        
        {/* معلومات الاتصال الأساسية */}
        <div style={styles.contactDetails}>
          {/* تم تحويله إلى الواتساب */}
          <ContactItem icon="🟢" title="تواصل عبر الواتساب" value={`+249 ${schoolData.whatsappNumber}`} link={schoolData.whatsappLink} isWhatsapp={true} />
          
          <ContactItem icon="✉️" title="البريد الإلكتروني" value={schoolData.email} link={`mailto:${schoolData.email}`} />
          
          <ContactItem icon="📍" title="عنوان المدرسة" value={schoolData.address} link={schoolData.mapEmbedUrl} isAddress={true} />
        </div>

        <hr style={styles.divider} />
        
        {/* نموذج الإرسال عبر الواتساب */}
        <h2 style={styles.sectionTitle}>أرسل رسالة عبر الواتساب</h2>
        <WhatsappForm />
        
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

      <footer style={styles.footer}>
        <p>نتطلع للترحيب بكم في مجتمع مدرسة الإخلاص التعليمي.</p>
      </footer>
    </div>
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
const WhatsappForm = () => {
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
        const whatsappUrl = `https://wa.me/249921027104?text=${encodedMessage}`;
        
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


// 🎨 أنماط CSS المدمجة
const styles = {
  container: {
    fontFamily: 'Cairo, Tahoma, Arial, sans-serif',
    direction: 'rtl',
    textAlign: 'right',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#0056b3',
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
    backgroundColor: '#25D366', // أخضر الواتساب
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
  footer: {
    textAlign: 'center',
    padding: '30px',
    fontSize: '0.9em',
    color: '#6c757d',
  }
};
