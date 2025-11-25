// components/Navbar.js
import Link from 'next/link';

const schoolName = "مدرسة الإخلاص";

const Navbar = () => (
    <nav style={styles.navbar}>
        <div style={styles.navContainer}>
            {/* الشعار واسم المدرسة */}
            <Link href="/" style={styles.logo}>
                <span style={styles.logoIcon}>🏫</span> {schoolName}
            </Link>

            {/* روابط التنقل الرئيسية */}
            <div style={styles.navLinks}>
                <NavLink href="/">الرئيسية</NavLink>
                <NavLink href="/about">عن المدرسة</NavLink> 
                <NavLink href="/academic-programs">البرامج الأكاديمية</NavLink>
                <NavLink href="/news">الأخبار والإعلانات</NavLink>
                <NavLink href="/contact">اتصل بنا</NavLink>
            </div>
            
            {/* زر التطبيق التعليمي */}
            <Link href="/study-app" style={styles.appButton}>
                منصة الطالب 📚
            </Link>
        </div>
    </nav>
);

const NavLink = ({ href, children }) => (
    <Link href={href} style={styles.navLink}>{children}</Link>
);

const styles = {
    navbar: {
        backgroundColor: '#0056b3', // أزرق المدرسة
        padding: '15px 0',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
        direction: 'rtl',
    },
    navContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.8em',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
    },
    logoIcon: {
        fontSize: '1.2em',
        marginRight: '10px',
        transform: 'rotateY(180deg)',
    },
    navLinks: {
        display: 'flex',
        gap: '25px',
        // تصميم مرن للاستجابة للهاتف
        '@media (maxWidth: 768px)': {
            display: 'none',
        }
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1em',
        padding: '5px 0',
        transition: 'border-bottom 0.2s',
    },
    appButton: {
        backgroundColor: '#28a745', // أخضر جذاب
        color: 'white',
        textDecoration: 'none',
        padding: '8px 15px',
        borderRadius: '5px',
        fontWeight: 'bold',
        fontSize: '0.9em',
        transition: 'background-color 0.3s',
    }
};

export default Navbar;
