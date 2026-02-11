'use client';

import { useState } from 'react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, handle form submission here (e.g., API route)
        console.log('Form Submitted', formData);
        alert('Thanks for reaching out! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section bg-light">
            <div className="container">
                <h2 className="section-title">Let&apos;s Build Something Great</h2>
                <p className="section-subtitle">
                    Ready to take your business to the next level? Get in touch with us to discuss your project.
                </p>

                <div className={styles.formContainer}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="John Doe"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className={styles.textarea}
                                placeholder="Tell us about your project..."
                            />
                        </div>

                        <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
