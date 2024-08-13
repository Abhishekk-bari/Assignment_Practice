// Testimonials.js

import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2>Testimonials</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</p>

      <div className={styles.testimonialsGrid}>
        <div className={styles.testimonialItem}>
          <img src="/testimonial2.png" alt="Client 1" className={styles.clientImage} />
          <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</p>
          <h4>Client 1</h4>
          <span>CEO</span>
        </div>

        <div className={styles.testimonialItem}>
          <img src="/testimonial1.png" alt="Client 2" className={styles.clientImage} />
          <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</p>
          <h4>Client 2</h4>
          <span>CEO</span>
        </div>
      </div>
      
    </section>
  );
};

export default Testimonials;
