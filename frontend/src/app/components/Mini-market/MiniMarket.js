import styles from './MiniMarket.module.css'
import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'

export default function MiniMarket() {
    
    const services = [
        { title: 'Engineering and Construction', image: "/rectangle-6.png" },
        { title: 'Engineering and Construction', image: "/rectangle-6.png" },
        { title: 'Engineering and Construction', image: "/rectangle-6.png" },
        { title: 'Engineering and Construction', image: "/rectangle-6.png" },
        { title: 'Engineering and Construction', image: "/rectangle-6.png" },
        { title: 'Engineering and Construction', image: "/rectangle-6.png" },
        { title: 'Engineering and Construction', image: "/rectangle-6.png" },
        { title: 'Engineering and Construction', image: "/rectangle-6.png" },
        { title: 'Engineering and Construction', image: "/rectangle-6.png" },
        { title: 'Engineering and Construction', image: "/rectangle-6.png" },
        
        
    ]

    return (
        <motion.div className={styles.container}>
            <h1>Mini-market</h1>
            <p>The professionals workers are available to meet your needs. All services will be rendered with 100% satisfaction</p>
            <input type="text" placeholder="Search..." />
            <div className={styles.services}>
                {services.map(service => (
                    <ServiceCard key={service.title} service={service} />
                ))}
            </div>
        </motion.div>
    )
}


