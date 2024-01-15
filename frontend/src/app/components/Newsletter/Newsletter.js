import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './Newsletter.module.css';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <motion.div className={styles.newsletter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Join our Newsletter</h2>
      <p>Subscribe to our newsletter to receive the latest news and exclusive offers every week.</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <motion.input type="email" name="email" placeholder="Enter your email" onChange={handleChange} className={styles.input}
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.button type="submit" className={styles.button}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Send a message
        </motion.button>
      </form>
    </motion.div>
  );
}

export default Newsletter;
