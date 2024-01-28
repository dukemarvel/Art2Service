import styles from './ServiceCard.module.css'
import { motion } from 'framer-motion'

export default function ServiceCard({ service }) {
    return (
        <motion.div className={styles.card}>
            <motion.img className={styles.image}
                src={service.image} 
                alt={service.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            
            />
            <h2>{service.title}</h2>
        </motion.div>
    )
}