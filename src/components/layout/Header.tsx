import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo}>
                        TechSolutions<span>.</span>
                    </Link>

                    <ul className={styles.links}>
                        <li><Link href="#services" className={styles.link}>Services</Link></li>
                        <li><Link href="#why-us" className={styles.link}>Why Us</Link></li>
                        <li><Link href="#projects" className={styles.link}>Projects</Link></li>
                    </ul>

                    <Link href="#contact" className={styles.cta}>
                        Start a Project
                    </Link>
                </nav>
            </div>
        </header>
    );
}
