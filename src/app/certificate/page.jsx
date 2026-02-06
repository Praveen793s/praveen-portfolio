import Image from "next/image";
import styles from "./certificate.module.css";
import { FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Certificates | Praveen Phulwar",
  description: "Professional certificates in AI, Cloud, Cyber Security and Data Science",
};

const certificates = [
  {
    id: 1,
    title: "Artificial Intelligence",
    category: "AI & ML",
    img: "/certificate/certificate AI.jpeg",
  },
  {
    id: 2,
    title: "Microsoft Azure",
    category: "Cloud Computing",
    img: "/certificate/certificate_Azure.jpeg",
  },
  {
    id: 3,
    title: "Journey to Cloud",
    category: "Cloud Computing",
    img: "/certificate/certificate_cloud.jpeg",
  },
  {
    id: 4,
    title: "Foundation of Cyber Security",
    category: "Security",
    img: "/certificate/certificate_cyber.jpeg",
  },
  {
    id: 5,
    title: "Getting to Data Science",
    category: "Data Science",
    img: "/certificate/certificate_ds.jpeg",
  },
];

export default function CertificatesPage() {
  return (
    <main className={styles.certificate}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>MY ACHIEVEMENTS</span>
          <h1 className={styles.title}>Certificates</h1>
        </div>

        {/* Certificates Grid */}
        <div className={styles.grid}>
          {certificates.map((cert) => (
            <div key={cert.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={cert.img}
                  alt={cert.title}
                  width={400}
                  height={280}
                  className={styles.certificateImage}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>{cert.category}</span>
                </div>
                <h3 className={styles.certificateTitle}>{cert.title}</h3>

                <div className={styles.buttonContainer}>
                  <a
                    href={cert.img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewBtn}
                  >
                    View <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
