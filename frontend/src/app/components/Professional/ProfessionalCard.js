import Image from 'next/image';
import styles from './ProfessionalCard.module.css'; 


const imageStyle = {
    borderRadius: '5%',
  }

function ProfessionalCard({ imagePath }) { 
  return (
    <div className={styles.card}>
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
        <button className={styles.button}>Professional</button>
      </div>
    </div>
  );
}

export default ProfessionalCard;
