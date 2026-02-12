"use client";
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import styles from './Navbar.module.css';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    }

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

                <div className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
                    <Link href="/" onClick={closeMenu}>HOME</Link>
                    <Link href="/projects" onClick={closeMenu}>PROJECTS</Link>
                    <Link href="/resume" onClick={closeMenu}>RESUME</Link>
                    <Link href="/certificate" onClick={closeMenu}>CERTIFICATES</Link>
                    <Link href="/#blog" onClick={closeMenu}>BLOG</Link>
                    <Link href="/#contact" onClick={closeMenu}>CONTACT</Link>

                    {/* Mobile Theme Toggle inside menu for better UX on small screens if needed, 
                        but keeping it in CTA for now as per design preference usually. 
                        Let's keep CTA separate but maybe hide it or adjust in CSS. 
                     */}
                </div>

                <div className={styles.cta}>
                    <button className={styles.themeToggle} onClick={toggleTheme}>
                        {theme === 'light' ? <FiMoon /> : <FiSun />}
                    </button>
                    {  /* <button className={styles.buyNow}>BUY NOW</button> */}
                    <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
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
