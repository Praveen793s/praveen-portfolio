import Image from 'next/image';
import styles from './Hero.module.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiFigma } from 'react-icons/si';

const Hero = () => {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.container}>
                <div className={styles.contentLeft}>
                    <span className={styles.subtitle}>WELCOME TO MY WORLD</span>
                    <h1 className={styles.title}>
                        Hi, I&apos;m <span className={styles.highlight}>Praveen</span>
                        <br />
                        a <span className={styles.role}>Web devloper.</span>
                    </h1>
                    <p className={styles.description}>
                        I use animation as a third dimension by which to simplify experiences and guiding thro each and every interaction. I&apos;m not adding motion just to spruce things up, but doing it in ways that.
                    </p>

                    <div className={styles.socialsAndSkills}>
                        <div className={styles.socials}>
                            <h3 className={styles.label}>FIND WITH ME</h3>
                            <div className={styles.iconGroup}>
                                <a href="https://www.facebook.com/praveen.phulwar.2025" className={styles.iconBox}><FaFacebookF /></a>
                                <a href="https://www.instagram.com/praveensahu8415/" className={styles.iconBox}><FaInstagram /></a>
                                <a href="https://www.linkedin.com/in/praveen-phulwar-630333241/" className={styles.iconBox}><FaLinkedinIn /></a>
                            </div>
                        </div>

                        <div className={styles.skills}>
                            <h3 className={styles.label}>BEST SKILL ON</h3>
                            <div className={styles.iconGroup}>
                                <div className={styles.iconBox}><SiFigma /></div>
                                <div className={styles.iconBox}><SiReact /></div>
                                <div className={styles.iconBox}><SiNextdotjs /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contentRight}>
                    <div className={styles.imageContainer}>
                        {/* Use the placeholder logic or real image if available later */}
                        <div className={styles.imagePlaceholder}>
                            <Image src="/profile.jpg" alt="Praveen" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
