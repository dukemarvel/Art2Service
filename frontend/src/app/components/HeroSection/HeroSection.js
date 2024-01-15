import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <motion.div className={styles.heroSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.heroContent}>
        <motion.p className={styles.groupOfPro}
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Group of professionals
        </motion.p>
        <motion.h1 className={styles.h1}
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Skills and Empowerment
        </motion.h1>
        <motion.p className={styles.p}
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quo
          tempore, suscipit molestiae molestias obcaecati eos autem? Excepturi
          laudantium, magnam a dignissimos nostrum placeat expedita sequi quasi
          optio! Ducimus, totam.
        </motion.p>
        <div className={styles.heroBtns}>
          <motion.a href="#"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <button className={`${styles.heroBtn} ${styles.first}`}>Sign In</button>
          </motion.a>
          <motion.a href="#"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <button className={`${styles.heroBtn} ${styles.second}`}>Sign Up</button>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
