'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.mobileView}>
        <div className={`${styles.menu} ${isOpen ? styles.showMenu : ''}`} onClick={toggleMenu}>
          {isOpen ? 'X' : '☰'}
        </div>
        <div className={styles.logo}>ARTISAN</div>
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
      <button className={styles.button}>Signup</button>
    </header>
  );
};

export default Header;