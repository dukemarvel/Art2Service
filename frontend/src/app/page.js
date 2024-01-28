'use client';
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Professional from './components/Professional/Professional';
import Service from './components/Service/Service';
import ContactPage from './components/ContactUs/ContactPage';
import dynamic from 'next/dynamic';
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";




const DynamicMap = dynamic(
  () => import('./components/Map/Map'),
  { ssr: false } 
);


export default function Home() {
  const ref = useRef(null);
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const professionalsRef = useRef(null);
  const servicesRef = useRef(null);
  const marketRef = useRef(null);
  const recruitmentRef = useRef(null);
  const trainingRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: ref });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      window.scroll({
        top: latest * document.body.offsetHeight,
        behavior: "smooth",
      });
    });
  }, [scrollYProgress]);

  return (
    <motion.div style={{ y: scrollYProgress }} ref={ref}>
      <Header 
        homeRef={homeRef} 
        aboutUsRef={aboutUsRef} 
        professionalsRef={professionalsRef} 
        servicesRef={servicesRef} 
        marketRef={marketRef} 
        recruitmentRef={recruitmentRef} 
        trainingRef={trainingRef} 
      />
  
      <div ref={homeRef}>
        <HeroSection/>
      </div>
      <div ref={professionalsRef}>
        <Professional/>
      </div>
      <div ref={servicesRef}>
        <Service/>
      </div>
      <ContactPage/>
      <DynamicMap/>
      <Newsletter/>
      <Footer/>
    </motion.div>
  );
  
}
