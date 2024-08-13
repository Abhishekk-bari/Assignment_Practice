// Projects.js

import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2>My Projects</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus.</p>
      <div className={styles.filterButtons}>
        <button className={styles.active}>All</button>
        <button>UI/UX</button>
        <button>Web Design</button>
        <button>App Design</button>
        <button>Graphic Design</button>
      </div>
      <div className={styles.projectsGrid}>
        <div className={styles.projectItem}>
          <img src="/project1.png" alt="AirCalling Landing Page Design" />
          <h3>AirCalling Landing Page Design</h3>
          <p>Web Design</p>
        </div>
        <div className={styles.projectItem}>
          <img src="/projects2.png" alt="Business Landing Page Design" />
          <h3>Business Landing Page Design</h3>
          <p>Web Design</p>
        </div>
        <div className={styles.projectItem}>
          <img src="/projects3.png" alt="Ecom Web Page Design" />
          <h3>Ecom Web Page Design</h3>
          <p>Web Design</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
