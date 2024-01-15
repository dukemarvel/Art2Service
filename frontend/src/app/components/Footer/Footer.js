import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Footer.module.css'; 

const Footer = () => {
    return (
        <motion.footer className={styles.footer}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className={styles.container}>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    ARTISAN
                </motion.p>
                <nav>
                    <motion.ul className={styles.navList}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/professionals">Professionals</Link></li>
                        <li><Link href="/services">Our Services</Link></li>
                        <li><Link href="/market">Mini-market</Link></li>
                        <li><Link href="/recruitment">Recruitment</Link></li>
                        <li><Link href="/training">Training</Link></li>
                    </motion.ul>
                </nav>
            </div>
        </motion.footer>
    );
};

export default Footer;
