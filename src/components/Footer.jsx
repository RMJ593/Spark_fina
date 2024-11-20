// src/components/Footer.js
import React from 'react';


function Footer() {
    
    return (
        <footer className="footer">
            <p>&copy; 2024 Your Organization. All rights reserved.</p>
            <nav className="footer-nav">
                <a href="/terms">Terms of Service</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/contact">Contact Us</a>
            </nav>
        </footer>
        
    );
}

export default Footer;
