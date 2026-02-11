import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        We Build Fast & Scalable Web Solutions
                    </h1>
                    <p className={styles.subheadline}>
                        Transform your business with modern web development and automation services. We focus on speed, performance, and delivering exceptional user experiences.
                    </p>
                    <div className={styles.actions}>
                        <Link href="#contact" className="btn btn-primary">
                            Get Started
                        </Link>
                        <Link href="#projects" className="btn btn-outline">
                            View Work
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
