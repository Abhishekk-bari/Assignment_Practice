import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
    <Navbar />
    
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Hi, I am</h2>
          <h1>Muhammad Umair</h1>
          <h3>UI & UX Designer</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.</p>
          <button className={styles.hireButton}>Hire Me</button>
        </div>
        <div className={styles.heroImage}>
          <img src="/profile_pic.png" alt="Muhammad Umair" />
        </div>
      </div>
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
