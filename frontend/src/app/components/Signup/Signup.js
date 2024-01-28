import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Signup.module.css';

export default function Signup() {

    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <motion.div className={styles.container}>
            <div className={styles.form}>
                <h1>Sign Up</h1>
                <p>Fill in the form to login</p>
                <form onSubmit={handleSubmit} className={styles.field}>
                    <label>Name</label>
                    <motion.input type="name" name="name" placeholder="Enter your Name" onChange={handleChange} className={styles.input}
                    whileFocus={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    />

                    <label>Email</label>
                    <motion.input type="email" name="email" placeholder="Enter your email" onChange={handleChange} className={styles.input}
                    whileFocus={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    />

                    <label>Password</label>
                    <motion.input type="password" name="password" placeholder="password" onChange={handleChange} className={styles.input}
                    whileFocus={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    />

                    <label>Confirm Password</label>
                    <motion.input type="password" name="password" placeholder="password" onChange={handleChange} className={styles.input}
                    whileFocus={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    />
                    
                    
                    <button className={styles.button1} type="submit">Sign Up</button>
                </form>
                <span>Already have an account? <a href="/your-link-here" className={styles.link}>Sign In</a></span>
                <button className={styles.button2}>Sign Up with Google</button>
                <div className={styles.link2}><a href="/your-link-here">Sign Up with Facebook</a></div>
            </div>
            <div className={styles.side2}>
            <div className={styles.join}>
                <h2>Join Us Now</h2>
                <li><Link href="/mini-market">Mini-market</Link></li>
                <li><Link href="/recruitment">Recruitment</Link></li>
                <li><Link href="/training">Training</Link></li> 
            </div>
                
            </div>
        </motion.div>
    )
}
