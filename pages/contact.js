// pages/contact.js
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import React, { useState } from 'react';

// البيانات المُحدثة
const schoolData = {
  name: "مدرسة الإخلاص",
  whatsappNumber: "921027104", 
  whatsappLink: "https://wa.me/249921027104", 
  email: "info@alekhlas-school.edu.sd", 
  address: "منطقة أبودوم، مدينة مروي، الولاية الشمالية، السودان.",
  
  // 📍 رابط تضمين الخريطة (تم إصلاحه في التحديث السابق)
  mapEmbedUrl: "http://googleusercontent.com/maps/embed?pb=!1m18!1m12!1m3!1d467.42445100000003!2d31.814917400000004!3d18.4523334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzA4LjQiTiAzMcKwNDgnNTMuNyJF!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa", 
  
  // 📌 رابط التوجيه إلى الموقع على الخريطة (تم إصلاحه في التحديث السابق)
  mapDirectLink: "https://maps.google.com/?q=18.452333,31.814917", 
};

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>اتصل بنا | {schoolData.name}</title>
      </Head>

      <header style={styles.header}>
        <h1 style={styles.pageTitle}>📞 تواصل معنا</h1>
        <p style={styles.introText}>
            فريقنا مستعد للإجابة على استفساراتكم المتعلقة بالتسجيل، المناهج، والفعاليات.
        </p>
      </header>

      <section style={styles.contentSection}>
        
        {/* معلومات الاتصال الأساسية - تصميم جديد */}
        <div style={styles.contactDetails}>
          <ContactItem icon="🟢" title="تواصل عبر الواتساب" value={`+249 ${schoolData.whatsappNumber}`} link={schoolData.whatsappLink} isWhatsapp={true} color="#28a745"/>
          <ContactItem icon="✉️" title="البريد الإلكتروني" value={schoolData.email} link={`mailto:${schoolData.email}`} color="#007bff"/>
          <ContactItem icon="📍" title="عنوان المدرسة" value={schoolData.address} link={schoolData.mapDirectLink} isAddress={true} color="#ffc107"/>
        </div>

        <hr style={styles.divider} />
        
        {/* نموذج الإرسال عبر الواتساب - تصميم مُحسن */}
        <h2 style={styles.sectionTitle}>أرسل رسالة فورية عبر واتساب</h2>
        <WhatsappForm whatsappLink={schoolData.whatsappLink.split('?')[0]} />
        
        {/* خريطة جوجل */}
        <h2 style={styles.sectionTitle}>موقعنا الدقيق على الخريطة</h2>
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
    </Layout>
  );
}

// 📌 مكون لبطاقة تفاصيل الاتصال التفاعلية (مُحسن)
const ContactItem = ({ icon, title, value, link, isWhatsapp = false, isAddress = false, color }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
            style={{
                ...styles.itemCard, 
                borderBottom: `4px solid ${color}`,
                ...(isHovered ? styles.itemCardHover : {})
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.itemHeader}>
                <span style={{...styles.itemIcon, color: color}}>{icon}</span>
                <h3 style={styles.itemTitle}>{title}</h3>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" style={isWhatsapp ? styles.whatsappLink : styles.itemLink}>
                {value} 
                {isWhatsapp && ' (انقر لبدء المحادثة)'}
                {isAddress && ' (شاهد الخريطة)'}
            </a>
        </div>
    );
};

// 📌 مكون نموذج الإرسال عبر الواتساب التفاعلي (مُحسن)
const WhatsappForm = ({ whatsappLink }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;
        
        const fullMessage = `*رسالة استفسار من الموقع الإلكتروني:*\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالرسالة: ${message}`;
        const encodedMessage = encodeURIComponent(fullMessage.trim());
        const whatsappUrl = `${whatsappLink}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    };

    const [isHovered, setIsHovered] = useState(false);

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="الاسم الكامل" style={styles.input} required />
            <input type="tel" name="phone" placeholder="رقم الهاتف للتواصل (مطلوب)" style={styles.input} required />
            <textarea name="message" placeholder="رسالتك أو استفسارك..." rows="4" style={styles.textarea} required></textarea>
            <button 
                type="submit" 
                style={{...styles.whatsappButton, ...(isHovered ? styles.whatsappButtonHover : {})}}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                إرسال عبر واتساب <span style={{fontSize: '1.2em'}}>💬</span>
            </button>
            <p style={styles.note}> سيتم فتح تطبيق واتساب مباشرة لإرسال رسالتك.</p>
        </form>
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
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    width: '320px',
    textAlign: 'right',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  itemCardHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
  },
  itemHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
  },
  itemIcon: {
      fontSize: '1.8em',
      marginRight: '10px'
  },
  itemTitle: {
      fontSize: '1.4em',
      color: '#1b2a41', // استخدام اللون الداكن
      fontWeight: 'bold',
  },
  itemLink: {
    display: 'block',
    marginTop: '5px',
    fontSize: '1.1em',
    color: '#333',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.2s',
  },
  whatsappLink: {
    display: 'block',
    marginTop: '10px',
    fontSize: '1.1em',
    color: '#28a745', // لون الواتساب
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.2s',
  },
  sectionTitle: {
    fontSize: '2.5em',
    color: '#0056b3',
    marginBottom: '30px',
    textAlign: 'center',
    fontWeight: '300',
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
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto 40px auto',
  },
  input: {
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1em',
  },
  textarea: {
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1em',
    resize: 'vertical',
  },
  whatsappButton: {
    padding: '15px',
    backgroundColor: '#28a745', // أخضر جديد
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
  },
  whatsappButtonHover: {
      backgroundColor: '#1e7e34',
      transform: 'scale(1.01)',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
  },
  note: {
      fontSize: '0.85em',
      color: '#6c757d',
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
