import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ProfessionalCard.module.css'; 

const imageStyle = {
    borderRadius: '5%',
}

function ProfessionalCard({ imagePath }) { 
  return (
    <motion.div className={styles.card}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.imageContainer}>
        <Image 
          src={imagePath}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
          quality={100}
          style={imageStyle}
        />
      </div>
      <div className={styles.buttonContainer}>
        <motion.button className={styles.button}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Professional
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ProfessionalCard;