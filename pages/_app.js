// pages/_app.js
// هذا الملف ضروري لتهيئة صفحات Next.js بشكل صحيح
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* تطبيق تنسيقات بسيطة عامة لإزالة الهوامش الافتراضية */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
