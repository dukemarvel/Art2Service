// Header.js

import Link from 'next/link';
import { useState } from 'react'; // Import useState
import styles from './Header.module.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to track mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>ARTISAN</div>

      {/* Hamburger Icon */}
      <div className={`${styles.hamburgerIcon} ${mobileMenuOpen ? styles.hide : ''}`} onClick={toggleMobileMenu}>
        ☰
      </div>

      {/* Close Icon */}
      <div className={`${styles.closeIcon} ${!mobileMenuOpen ? styles.hide : ''}`} onClick={toggleMobileMenu}>
        ✕
      </div>

      {/* Navigation */}
      <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/professionals">Professionals</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Button */}
      <button className={styles.button}>Signup</button>
    </header>
  );
};

export default Header;
