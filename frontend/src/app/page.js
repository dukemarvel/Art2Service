'use client';
import Layout from './components/Layout/Layout';
import HeroSection from './components/HeroSection/HeroSection';
import Professional from './components/Professional/Professional';
import Service from './components/Service/Service';
import ContactPage from './components/ContactUs/ContactPage';
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <Layout>
      <div ref={Layout.homeRef}>
        <HeroSection/>
      </div>
      <div ref={Layout.professionalsRef}>
        <Professional/>
      </div>
      <div ref={Layout.servicesRef}>
        <Service/>
      </div>
      <ContactPage/>
      <Newsletter/>
      <Footer/>
    </Layout>
  );
}
