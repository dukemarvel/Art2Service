import Image from 'next/image';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      
      <HeroSection/>
    
    </div>
  );
}
