import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/img_Footerlogo.png" alt="Mumair Logo" />
      </div>
      <nav className={styles.footerNav}>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className={styles.socialMedia}>
        <a href="#"><img src="/Facebook - Negative.png" alt="Facebook" /></a>
        <a href="#"><img src="/Twitter - Negative.png" alt="Twitter" /></a>
        <a href="#"><img src="/instagram.png" alt="LinkedIn" /></a>
        <a href="#"><img src="/Instagram - Negative.png" alt="LinkedIn" /></a>
      </div>
      <p>© 2023 Mumair. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
