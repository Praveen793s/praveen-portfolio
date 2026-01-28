import styles from './Clients.module.css';

const Clients = () => {
    const clientsList = [
        { id: 1, name: 'JavaScript', category: 'Language' },
        { id: 2, name: 'React', category: 'Library' },
        { id: 3, name: 'Next.js', category: 'Framework' },
        { id: 4, name: 'Redux', category: 'State Management' },
        { id: 5, name: 'Node.js', category: 'Runtime' },
        { id: 6, name: 'MongoDB', category: 'Database' },
    ];

    return (
        <section className={styles.clients} id="clients">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>POPULAR CLIENTS</span>
                    <h2 className={styles.title}>Awesome Clients</h2>
                </div>

                <div className={styles.grid}>
                    {/* Using placeholders for client logos since we don't have actual images */}
                    {clientsList.map((client) => (
                        <div key={client.id} className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3 className={styles.clientName}>{client.name}</h3>
                                <span className={styles.clientCategory}>{client.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
