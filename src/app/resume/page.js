"use client";

import React, { useRef } from 'react';
import styles from './resume.module.css';
import Image from 'next/image';

const Resume = () => {
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            alert(`Selected file: ${file.name}\n(This is a UI demo only)`);
        }
    };

    return (
        <section className={styles.resumeContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <p className={styles.subtitle}>5+ YEARS OF EXPERIENCE</p>
                    <h1 className={styles.title}>My Resume</h1>
                </div>

                <div className={styles.profileSection}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/psbb.jpeg"
                            alt="Profile"
                            width={300}
                            height={400}
                            className={styles.profileImage}
                            priority
                        />
                    </div>

                    <div className={styles.infoSection}>
                        <h2 className={styles.infoTitle}>Professional Profile</h2>
                        <p className={styles.description}>
                            Experienced developer with a passion for building scalable web applications.
                            Skilled in React.js, Next.js, and modern web technologies.
                            Dedicated to creating efficient, user-friendly, and visually appealing digital experiences.
                        </p>

                        <div className={styles.buttonGroup}>
                            {/* Download Button */}
                            <a href="/Praveen-phulwar (1).pdf" download className={styles.actionButton}>
                                Download Resume
                            </a>

                            {/* Upload Button */}
                            <button onClick={handleUploadClick} className={styles.actionButton}>
                                Upload Resume
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className={styles.hiddenInput}
                                accept=".pdf,.doc,.docx"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
