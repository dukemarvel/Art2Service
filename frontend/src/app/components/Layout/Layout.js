'use client';
import { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Header from '../Header/Header';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(
  () => import('../Map/Map'),
  { ssr: false } 
);

const Layout = ({ children }) => {
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
      {children}
      <DynamicMap/>
    </motion.div>
  );
};

export default Layout;
