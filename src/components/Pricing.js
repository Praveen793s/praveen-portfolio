import styles from './Pricing.module.css';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
    return (
        <section className={styles.pricing} id="pricing">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>PRICING</span>
                    <h2 className={styles.title}>Pricing</h2>
                </div>

                <div className={styles.grid}>
                    {/* Basic Plan */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h4 className={styles.planName}>Static</h4>
                            <span className={styles.price}>$50</span>
                            <p className={styles.desc}>A simple personal website or landing page.</p>
                        </div>
                        <ul className={styles.features}>
                            <li><FaCheck className={styles.check} /> 5 Pages</li>
                            <li><FaCheck className={styles.check} /> SEO Optimized</li>
                            <li><FaCheck className={styles.check} /> Mobile Responsive</li>
                            <li><FaCheck className={styles.check} /> Contact Form</li>
                        </ul>
                        <button className={styles.btn}>ORDER NOW</button>
                    </div>

                    {/* Standard Plan */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h4 className={styles.planName}>Standard</h4>
                            <span className={styles.price}>$100</span>
                            <p className={styles.desc}>Dynamic website with CMS or Blog integration.</p>
                        </div>
                        <ul className={styles.features}>
                            <li><FaCheck className={styles.check} /> 10 Pages</li>
                            <li><FaCheck className={styles.check} /> CMS Integration</li>
                            <li><FaCheck className={styles.check} /> Mobile Responsive</li>
                            <li><FaCheck className={styles.check} /> Newsletter Setup</li>
                        </ul>
                        <button className={styles.btn}>ORDER NOW</button>
                    </div>

                    {/* Premium Plan */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h4 className={styles.planName}>Premium</h4>
                            <span className={styles.price}>$200</span>
                            <p className={styles.desc}>Full-stack application with authentication.</p>
                        </div>
                        <ul className={styles.features}>
                            <li><FaCheck className={styles.check} /> Unlimited Pages</li>
                            <li><FaCheck className={styles.check} /> User Auth & DB</li>
                            <li><FaCheck className={styles.check} /> Payment Gateway</li>
                            <li><FaCheck className={styles.check} /> 24/7 Support</li>
                        </ul>
                        <button className={styles.btn}>ORDER NOW</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
