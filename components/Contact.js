// Contact.js

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2>Let's Design Together</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.</p>
      <form className={styles.contactForm}>
        <input type="email" placeholder="Enter Your Email" required />
        <button type="submit">Contact Me</button>
      </form>
    </section>
  );
};

export default Contact;
