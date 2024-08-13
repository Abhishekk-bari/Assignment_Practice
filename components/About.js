import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h2>About Me</h2>
        <p>
          I am Muhammad Umair, a passionate UI & UX Designer with a keen eye for creating intuitive and engaging user experiences. My journey in design began several years ago, and I have since worked on a variety of projects that have honed my skills and broadened my understanding of user-centered design.
        </p>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h3>My Skills</h3>

          <div className={styles.skill}>
            <span>UX</span>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className={styles.skill}>
            <span>Website Design</span>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '90%' }}></div>
            </div>
          </div>

          <div className={styles.skill}>
            <span>App Design</span>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className={styles.skill}>
            <span>Graphic Design</span>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutImage}>
        <img src="/about_pic.png" alt="Muhammad Umair" />
      </div>
    </section>
  );
};

export default About;
