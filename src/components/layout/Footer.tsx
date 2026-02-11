import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>TechSolutions.</h3>
                        <p className={styles.description}>
                            Building high-performance digital experiences that scale. Fast, reliable, and modern web solutions for ambitious businesses.
                        </p>
                    </div>

                    <div>
                        <h4 className={styles.title}>Services</h4>
                        <ul className={styles.links}>
                            <li className={styles.linkItem}><Link href="/services/web-dev" className={styles.link}>Web Development</Link></li>
                            <li className={styles.linkItem}><Link href="/services/automation" className={styles.link}>Automation</Link></li>
                            <li className={styles.linkItem}><Link href="/services/performance" className={styles.link}>Performance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.title}>Company</h4>
                        <ul className={styles.links}>
                            <li className={styles.linkItem}><Link href="/about" className={styles.link}>About Us</Link></li>
                            <li className={styles.linkItem}><Link href="/careers" className={styles.link}>Careers</Link></li>
                            <li className={styles.linkItem}><Link href="/contact" className={styles.link}>Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={styles.title}>Social</h4>
                        <ul className={styles.links}>
                            <li className={styles.linkItem}><a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li className={styles.linkItem}><a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li className={styles.linkItem}><a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} AntiGravity. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
