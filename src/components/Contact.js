import Image from 'next/image';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>CONTACT</span>
                    <h2 className={styles.title}>Contact With Me</h2>
                </div>

                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.card}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src="/contact-handshake.png"
                                    alt="Contact"
                                    width={400}
                                    height={280}
                                    className={styles.contactImage}
                                />
                            </div>
                            <h3 className={styles.name}>Praveen</h3>
                            <p className={styles.role}>Chief Operating Officer</p>
                            <p className={styles.desc}>I am available for freelance work. Connect with me via and call in to my account.</p>
                            <div className={styles.contactInfo}>
                                <p>Phone: <span>+91 7697155654</span></p>
                                <p>Email: <span>praveenphulwar@gmail.com</span></p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.card}>
                            <form className={styles.form}>
                                <div className={styles.formGroupRow}>
                                    <div className={styles.formGroup}>
                                        <label>YOUR NAME</label>
                                        <input type="text" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>PHONE NUMBER</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>EMAIL</label>
                                    <input type="email" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>SUBJECT</label>
                                    <input type="text" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>YOUR MESSAGE</label>
                                    <textarea rows="6"></textarea>
                                </div>
                                <button className={styles.submitBtn}>SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
