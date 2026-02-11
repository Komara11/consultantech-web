import Image from 'next/image';
import styles from './ProjectsSection.module.css';

const projects = [
    {
        title: 'FinTech Dashboard',
        description: 'A comprehensive financial analytics dashboard built for a SaaS startup. Real-time data visualization and secure user management.',
        imageSrc: '/images/projects/fintech-dashboard.png',
        tags: ['Next.js', 'Typescript', 'D3.js'],
    },
    {
        title: 'E-commerce Platform',
        description: 'High-performance e-commerce solution with headless CMS integration, optimized for maximum conversion and speed.',
        imageSrc: '/images/projects/ecommerce-platform.png',
        tags: ['React', 'Shopify', 'Stripe'],
    },
    {
        title: 'Healthcare Patient Portal',
        description: 'Secure patient management system compliant with healthcare standards. Features appointment scheduling and medical record access.',
        imageSrc: '/images/projects/healthcare-portal.png',
        tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    },
    {
        title: 'Real Estate Listing Site',
        description: 'Modern property listing website with advanced search filters and interactive map integration.',
        imageSrc: '/images/projects/real-estate-app.png',
        tags: ['React', 'Google Maps API', 'Firebase'],
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="section container">
            <h2 className="section-title">Recent Work</h2>
            <p className="section-subtitle">
                Explore some of our latest projects and see how we help businesses transform their digital presence.
            </p>

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={project.imageSrc}
                                alt={project.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.heading}>{project.title}</h3>
                            <p className={styles.excerpt}>{project.description}</p>
                            <div className={styles.tags}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
