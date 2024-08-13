import styles from './Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faDesktop, faMobileAlt, faPalette } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2>Services</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibs lectus nets in. Aliquot donec morbi convallis pretium.</p>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceItem}>
          <FontAwesomeIcon icon={faPencilRuler} className={styles.serviceIcon} />
          <h3>UI/UX</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.</p>
        </div>
        <div className={styles.serviceItem}>
          <FontAwesomeIcon icon={faDesktop} className={styles.serviceIcon} />
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.</p>
        </div>
        <div className={styles.serviceItem}>
          <FontAwesomeIcon icon={faMobileAlt} className={styles.serviceIcon} />
          <h3>App Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.</p>
        </div>
        <div className={styles.serviceItem}>
          <FontAwesomeIcon icon={faPalette} className={styles.serviceIcon} />
          <h3>Graphic Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
