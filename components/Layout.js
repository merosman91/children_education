// components/Layout.js
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        // 🚨 تم تعيين خط Cairo هنا ليطبق على كل الموقع
        <div style={{ fontFamily: 'Cairo, Tahoma, Arial, sans-serif', direction: 'rtl', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Head>
                {/* استيراد خط Cairo من Google Fonts */}
                <link 
                    rel="stylesheet" 
                    href="http://googleusercontent.com/fonts.googleapis.com/css2?family=Cairo:wght@400;700;800&display=swap"
                />
            </Head>
            <Navbar />
            <main style={{flexGrow: 1}}> 
                {children}
            </main>
            {/* تذييل موحد للصفحات */}
            <footer style={styles.footer}>
                <p>&copy; {new Date().getFullYear()} مدرسة الإخلاص. جميع الحقوق محفوظة.</p>
                <p>الولاية الشمالية، مروي، أبودوم</p>
            </footer>
        </div>
    );
};

const styles = {
    footer: {
        backgroundColor: '#343a40',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        fontSize: '0.9em',
    },
};

export default Layout;
