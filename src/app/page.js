import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Skills from "@/components/Skill";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Clients />
      <Pricing />
      <Blog />
      <Skills />
      <Contact />
    </main>
  );
}
