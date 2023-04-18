import React from 'react'
import styles from './Training.module.css'

function Training() {
  
  
  return (
    <div>
    <div>
      <h4>Body Building</h4>
      <img className={styles.img1} src='first.jpg' alt='body-building' />
    </div>
    <div>
      <h4>Yoga</h4>
      <img className={styles.img2} src='second.jpg' alt='Yoga' />
    </div>
    <div>
      <h4>Aerobic</h4>
      <img className={styles.img3} src='Third.jpg' alt='aerobic' />
    </div>
    <div>
    <h4>Flexibility</h4>
      <img className={styles.img4} src='fourth.jpg' alt='flexibility' />
    </div>
    </div>
  );
}

export default Training