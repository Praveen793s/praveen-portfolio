import styles from './Blog.module.css';

const Blog = () => {
    // Placeholder data for blog posts
    const blogPosts = [
        { id: 1, title: 'Development Best Practices', category: 'Development', date: 'Jan 20, 2024' },
        { id: 2, title: 'The Future of AI in Tech', category: 'Technology', date: 'Jan 18, 2024' },
        { id: 3, title: 'UI/UX Design Fundamentals', category: 'Design', date: 'Jan 15, 2024' }
    ];

    return (
        <section className={styles.blog} id="blog">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>VISIT MY BLOG AND KEEP YOUR FEEDBACK</span>
                    <h2 className={styles.title}>My Blog</h2>
                </div>

                <div className={styles.grid}>
                    {blogPosts.map(post => (
                        <div key={post.id} className={styles.card}>
                            <div className={styles.imagePlaceholder}></div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.category}>{post.category}</span>
                                    <span className={styles.date}>{post.date}</span>
                                </div>
                                <h3 className={styles.postTitle}>{post.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
