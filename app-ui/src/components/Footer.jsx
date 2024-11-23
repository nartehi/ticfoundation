import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 0',
        textAlign: 'center',
        width: '100%',
    };

    const footerContentStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const footerSectionStyle = {
        flex: 1,
        margin: '20px',
    };

    const footerSectionTitleStyle = {
        marginBottom: '10px',
        fontSize: '18px',
        color: '#f9a825',
    };

    const footerTextStyle = {
        color: '#ddd',
        fontSize: '14px',
        lineHeight: '1.6',
    };

    const footerLinkStyle = {
        textDecoration: 'none',
        color: '#ddd',
        transition: 'color 0.5s',
    };

    const footerLinkHoverStyle = {
        color: '#f9a825',
    };

    const footerBottomStyle = {
        marginTop: '20px',
        fontSize: '14px',
        color: '#ddd',
    };

    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                <div style={footerSectionStyle}>
                    <h2 style={footerSectionTitleStyle}>About Us</h2>
                    <p style={footerTextStyle}>We are a team dedicated to providing the best services and support. Our aim is to help you achieve your goals with our comprehensive solutions.</p>
                </div>
                <div style={footerSectionStyle}>
                    <h2 style={footerSectionTitleStyle}>Quick Links</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><a href="/about-us" style={footerLinkStyle} onMouseOver={(e) => e.target.style.color = footerLinkHoverStyle.color} onMouseOut={(e) => e.target.style.color = footerLinkStyle.color}>About Us</a></li>
                        <li><a href="/services" style={footerLinkStyle} onMouseOver={(e) => e.target.style.color = footerLinkHoverStyle.color} onMouseOut={(e) => e.target.style.color = footerLinkStyle.color}>Services</a></li>
                        <li><a href="/events" style={footerLinkStyle} onMouseOver={(e) => e.target.style.color = footerLinkHoverStyle.color} onMouseOut={(e) => e.target.style.color = footerLinkStyle.color}>Events</a></li>
                        <li><a href="/contact" style={footerLinkStyle} onMouseOver={(e) => e.target.style.color = footerLinkHoverStyle.color} onMouseOut={(e) => e.target.style.color = footerLinkStyle.color}>Contact Us</a></li>
                        <li><a href="/support" style={footerLinkStyle} onMouseOver={(e) => e.target.style.color = footerLinkHoverStyle.color} onMouseOut={(e) => e.target.style.color = footerLinkStyle.color}>Support</a></li>
                    </ul>
                </div>
                <div style={footerSectionStyle}>
                    <h2 style={footerSectionTitleStyle}>Contact Us</h2>
                    <p style={footerTextStyle}>Email: info@example.com</p>
                    <p style={footerTextStyle}>Phone: +123 456 7890</p>
                </div>
            </div>
            <div style={footerBottomStyle}>
                © {currentYear} Tic Foundation. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
