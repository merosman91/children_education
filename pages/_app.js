import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>مدرسة الإخلاص | أبودوم</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* استيراد خط Cairo من Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      {/* تطبيق التنسيقات العامة */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          background-color: #f5f7fa;
          color: #333;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
