// pages/index.js
import { curriculum } from '../data/curriculum'; 

export default function Home() {
  const subjects = curriculum; 
  
  // 🚨 قم بإضافة هذا الاختبار المؤقت:
  if (!subjects || subjects.length === 0) {
    // إذا فشل الاستيراد، اعرض شيئًا مؤقتًا ومختلفًا عن الرسالة الافتراضية
    return <div style={{ textAlign: 'center', padding: '100px', fontSize: '2em', color: 'purple' }}>
             ❌ فشل في تحميل البيانات! تحقق من مسار ../data/curriculum.js
           </div>;
  }
  
  // ... (بقية الكود: return <div style={{ ... }}> مرحباً بك... </div>) ...
}
