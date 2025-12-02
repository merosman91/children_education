import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="hero">
        <h1>مرحباً بكم في مدرسة الإخلاص</h1>
        <p>التميز التعليمي والتربوي في أبودوم، مروي.</p>
        <div className="cta-group">
          <Link href="/about" className="btn btn-outline">تعرف علينا</Link>
          <Link href="/study-app" className="btn btn-primary">ابدأ المذاكرة 🚀</Link>
        </div>
      </div>

      <div className="features">
        <div className="card">
          <h3>📚 مراحل تعليمية</h3>
          <p>ابتدائي، متوسط، وثانوي للبنين والبنات.</p>
        </div>
        <div className="card">
          <h3>💡 تعليم حديث</h3>
          <p>استخدام التكنولوجيا لتعزيز الفهم والاستيعاب.</p>
        </div>
        <div className="card">
          <h3>🤝 قيم وتربية</h3>
          <p>نركز على الأخلاق والقيم بقدر تركيزنا على العلم.</p>
        </div>
      </div>

      <style jsx>{`
        .hero {
          text-align: center;
          padding: 80px 20px;
          background: linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%);
          border-radius: 0 0 20px 20px;
          margin-bottom: 40px;
        }
        h1 {
          color: #004d40;
          font-size: 2.5rem;
          margin-bottom: 15px;
        }
        p {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 30px;
        }
        .cta-group {
          display: flex;
          gap: 15px;
          justify-content: center;
        }
        .btn {
          padding: 12px 25px;
          border-radius: 8px;
          font-weight: bold;
          transition: 0.3s;
        }
        .btn-primary {
          background-color: #004d40;
          color: white;
        }
        .btn-outline {
          border: 2px solid #004d40;
          color: #004d40;
        }
        
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding-bottom: 40px;
        }
        .card {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          text-align: center;
          border-top: 4px solid #ffca28;
        }
        .card h3 {
          margin-bottom: 10px;
          color: #333;
        }

        @media (max-width: 600px) {
           h1 { font-size: 1.8rem; }
           .cta-group { flex-direction: column; }
        }
      `}</style>
    </Layout>
  );
}
