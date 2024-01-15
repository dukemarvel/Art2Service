import { motion } from 'framer-motion';
import styles from './Service.module.css';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BuildIcon from '@mui/icons-material/Build';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Service() {
  return (
    <div className={styles.serviceContainer}>
        <h1 className={styles.title}>Our Services</h1>
        <div className={styles.serviceBody}>
            <motion.div className={styles.serviceBox}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
            > 
                <PeopleAltIcon/>
                <span>Recruitment</span> 
            </motion.div>

            <motion.div className={styles.serviceBox}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
            > 
                <BuildIcon/>
                <span>Training</span> 
            </motion.div>

            <motion.div className={styles.serviceBox}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
            > 
                <ShoppingBagIcon/>
                <span>Mini-market</span> 
            </motion.div>
            
        </div>
    </div>
  )
}

export default Service;
