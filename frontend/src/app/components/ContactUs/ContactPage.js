'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactPage.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can handle the form data, like sending it to a server
  };

  return (
    <motion.form onSubmit={handleSubmit} className={styles.form}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.detail}>
        <label>
          <span>Full Name:</span>
          <input type="text" name="fullName" onChange={handleChange} className={styles.input} />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name="email" onChange={handleChange} className={styles.input} />
        </label>
      </div>

      <div className={styles.detail}>
        <label>
          <span>Type your message here:</span>
          <textarea name="message" onChange={handleChange} className={styles.input} />
        </label>
        <motion.button type="submit" className={styles.button}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Send a message
        </motion.button>
      </div>
      
    </motion.form>
  );
};

export default function ContactPage() {
  return (
    <div className={styles.contactContainer}>
      <h1>Get In Touch with Us</h1>
      <ContactForm />
    </div>
  );
}
