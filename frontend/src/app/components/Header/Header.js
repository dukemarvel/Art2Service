import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.mobileView}>
        <motion.div className={`${styles.menu} ${isOpen ? styles.showMenu : ''}`} onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? 'X' : '☰'}
        </motion.div>
        <motion.img 
                    src="/logo.png" 
                    alt="Logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    width={150}
                />
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.showMenu : ''}`}>
        <nav className={styles.mobileMenu}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/professionals">Professionals</Link></li>
          <li><Link href="/services">Our Services</Link></li>
          <li><Link href="/market">Mini-market</Link></li>
          <li><Link href="/recruitment">Recruitment</Link></li>
          <li><Link href="/training">Training</Link></li>
        </ul>
        </nav>
      </nav>
      <motion.button className={styles.button}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        Signup
      </motion.button>
    </motion.header>
  );
};

export default Header;
