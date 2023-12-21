import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <p className={styles.groupOfPro}>Group of professionals</p>
        <h1 className={styles.h1}>Skills and Empowerment</h1>
        <p className={styles.p}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quo
          tempore, suscipit molestiae molestias obcaecati eos autem? Excepturi
          laudantium, magnam a dignissimos nostrum placeat expedita sequi quasi
          optio! Ducimus, totam.
        </p>
        <div className={styles.heroBtns}>
          <a href="#">
            <button className={`${styles.heroBtn} ${styles.first}`}>Sign In</button>
          </a>
          <a href="#">
            <button className={`${styles.heroBtn} ${styles.second}`}>Sign Up</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
