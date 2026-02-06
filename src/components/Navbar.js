"use client";
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import styles from './Navbar.module.css';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.logoImage}>
                        <span className={styles.logoInitial}>P</span>
                    </div>
                    <span className={styles.logoText}>PRAVEEN</span>
                </div>
                <div className={styles.links}>
                    <Link href="/">HOME</Link>
                    <Link href="/projects">PROJECTS</Link>
                    <Link href="/resume">RESUME</Link>
                    <Link href="/certificate">CERTIFICATES</Link>
                    <Link href="/#blog">BLOG</Link>
                    <Link href="/#contact">CONTACT</Link>
                </div>
                <div className={styles.cta}>
                    <button className={styles.themeToggle} onClick={toggleTheme}>
                        {theme === 'light' ? <FiMoon /> : <FiSun />}
                    </button>
                    <button className={styles.buyNow}>BUY NOW</button>
                </div>
            </div>

            {/* Scroll To Top Button */}
            {scrolled && (
                <button className={styles.scrollTop} onClick={scrollToTop}>
                    ↑
                </button>
            )}
        </nav>
    );
};

export default Navbar;
