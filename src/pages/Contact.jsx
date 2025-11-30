import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Message sent! (Demo only)');
    };

    return (
        <section className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="contact-header"
            >
                <h2 className="text-gradient">Get In Touch</h2>
                <p className="contact-subtitle">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>
            </motion.div>

            <div className="contact-content">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="contact-info glass"
                >
                    <h3 className="info-title">Contact Information</h3>
                    <div className="info-item">
                        <div className="info-icon"><Mail size={20} /></div>
                        <div>
                            <h4>Email</h4>
                            <p>bala11sarathi@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon"><Phone size={20} /></div>
                        <div>
                            <h4>Phone</h4>
                            <p>+91 8110025747</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon"><MapPin size={20} /></div>
                        <div>
                            <h4>Location</h4>
                            <p>Chennai, TamilNadu</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/Balasarathi29" className="social-btn"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/bala-sarathi-827428257" className="social-btn"><Linkedin size={20} /></a>
                        <a href="https://x.com/Bala_Sarathi" className="social-btn"><Twitter size={20} /></a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="contact-form-container glass"
                >
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
