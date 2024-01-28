import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

const Header = (props) => {
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
          <li onClick={() => props.homeRef.current?.scrollIntoView({ behavior: 'smooth' })}>Home</li>
          <li onClick={() => props.aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' })}>About Us</li>
          <li onClick={() => props.professionalsRef.current?.scrollIntoView({ behavior: 'smooth' })}>Professionals</li>
          <li onClick={() => props.servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}>Our Services</li>
          <li><Link href="/mini-market">Mini-market</Link></li>
          <li><Link href="/recruitment">Recruitment</Link></li>
          <li><Link href="/training">Training</Link></li>
        </ul>
        </nav>
      </nav>
      <Link href="/signup">
        <motion.button className={styles.button}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Signup
        </motion.button>
      </Link>
    </motion.header>
  );
};

export default Header;
