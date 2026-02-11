import { FaCode, FaRocket, FaCog, FaMobile, FaDatabase, FaLock } from 'react-icons/fa';
import styles from './ServicesSection.module.css';

const services = [
    {
        icon: <FaCode />,
        title: 'Web Development',
        description: 'Custom, high-performance websites built with modern technologies like Next.js and React.',
    },
    {
        icon: <FaCog />,
        title: 'Automation',
        description: 'Streamline your business processes with custom automation scripts and workflow integrations.',
    },
    {
        icon: <FaRocket />,
        title: 'Performance Optimization',
        description: 'Speed up your existing website to improve user experience and SEO rankings.',
    },
    {
        icon: <FaMobile />,
        title: 'Responsive Design',
        description: 'Ensure your website looks perfect on every device, from mobile phones to large desktop screens.',
    },
    {
        icon: <FaDatabase />,
        title: 'Backend Solutions',
        description: 'Robust API development and database management for scalable applications.',
    },
    {
        icon: <FaLock />,
        title: 'Security',
        description: 'Implement best practices to secure your web applications and protect user data.',
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="section bg-light">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <p className="section-subtitle">
                    We offer a comprehensive range of digital solutions to help your business grow and succeed in the digital age.
                </p>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
