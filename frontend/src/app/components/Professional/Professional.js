import { motion } from 'framer-motion';
import ProfessionalCard from './ProfessionalCard';
import styles from './Professional.module.css'; 

function Professional() {
  const imagePaths = ["/rectangle-6.png", "/rectangle-7.jpg", "/rectangle-8.png", "/rectangle-9.jpg", "/rectangle-10.png", "/rectangle-11.jpg", "/rectangle-12.jpg", "/rectangle-13.jpg"];

  return (
    <motion.div className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h4 className={styles.title}>Professional</h4>
      <div className={styles.grid}>
        {imagePaths.map((path, index) => (
          <ProfessionalCard key={index} imagePath={path} />
        ))}
      </div>
    </motion.div>
  );
}

export default Professional;