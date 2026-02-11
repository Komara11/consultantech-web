import styles from './WhyChooseUsSection.module.css';

const reasons = [
    {
        number: '01',
        title: 'Speed-First Approach',
        text: 'We optimize every line of code to ensure lightning-fast load times, which boosts SEO and keeps users engaged.',
    },
    {
        number: '02',
        title: 'Modern Tech Stack',
        text: 'We use the latest technologies like Next.js, React, and serverless architecture to build scalable and future-proof applications.',
    },
    {
        number: '03',
        title: 'Reliable & Secure',
        text: 'Our solutions are built with security best practices and rigorous testing to ensure your business data is always safe.',
    },
];

export default function WhyChooseUsSection() {
    return (
        <section id="why-us" className="section container">
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-subtitle">
                We don&apos;t just build websites; we build digital assets that drive growth and efficiency for your business.
            </p>

            <div className={styles.featureGrid}>
                {reasons.map((reason, index) => (
                    <div key={index} className={styles.feature}>
                        <div className={styles.number}>{reason.number}</div>
                        <h3 className={styles.title}>{reason.title}</h3>
                        <p className={styles.text}>{reason.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
