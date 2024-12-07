import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        width: '100%',
    };

    const footerContentStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    };

    const footerSectionStyle = {
        flex: '1',
        minWidth: '250px',
        margin: '0 20px', // Adjusted for even spacing
    };

    const footerSectionTitleStyle = {
        marginBottom: '10px',
        fontSize: '18px',
        color: '#f9a825',
        fontWeight: 'bold',
        marginLeft: '40px'
    };

    const footerListStyle = {
        listStyle: 'none',
        padding: '0',
        margin: '0',
        fontSize: '14px',
        lineHeight: '1.8',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', // Divides the list into two columns
        gap: '8px',
    };

    const footerLinkStyle = {
        color: '#ddd',
        textDecoration: 'none',
        transition: 'color 0.3s',
        marginLeft: '40px'
    };

    const footerLinkHoverStyle = {
        color: '#f9a825',
    };

    const socialIconsStyle = {
        display: 'flex',
        gap: '10px',
        marginTop: '10px',
        marginLeft: '30px'
    };

    const socialIconStyle = {
        color: '#fff',
        fontSize: '20px',
        textDecoration: 'none',
        transition: 'color 0.3s',
    };

    const socialIconHoverStyle = {
        color: '#f9a825',
    };

    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                <div style={footerSectionStyle}>
                    <h2 style={footerSectionTitleStyle}>About Us</h2>
                    <p>
                        We are committed to delivering high-quality services and support to our community. 
                        Our focus is on helping you succeed with our comprehensive solutions.
                    </p>
                </div>
                <div style={footerSectionStyle}>
                    <h2 style={footerSectionTitleStyle}>Quick Links</h2>
                    <ul style={footerListStyle}>
                        <li>
                            <a
                                href="/about-us"
                                style={footerLinkStyle}
                                onMouseOver={(e) => (e.target.style.color = footerLinkHoverStyle.color)}
                                onMouseOut={(e) => (e.target.style.color = footerLinkStyle.color)}
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="/services"
                                style={footerLinkStyle}
                                onMouseOver={(e) => (e.target.style.color = footerLinkHoverStyle.color)}
                                onMouseOut={(e) => (e.target.style.color = footerLinkStyle.color)}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                style={footerLinkStyle}
                                onMouseOver={(e) => (e.target.style.color = footerLinkHoverStyle.color)}
                                onMouseOut={(e) => (e.target.style.color = footerLinkStyle.color)}
                            >
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="/faq"
                                style={footerLinkStyle}
                                onMouseOver={(e) => (e.target.style.color = footerLinkHoverStyle.color)}
                                onMouseOut={(e) => (e.target.style.color = footerLinkStyle.color)}
                            >
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a
                                href="/blog"
                                style={footerLinkStyle}
                                onMouseOver={(e) => (e.target.style.color = footerLinkHoverStyle.color)}
                                onMouseOut={(e) => (e.target.style.color = footerLinkStyle.color)}
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="/support"
                                style={footerLinkStyle}
                                onMouseOver={(e) => (e.target.style.color = footerLinkHoverStyle.color)}
                                onMouseOut={(e) => (e.target.style.color = footerLinkStyle.color)}
                            >
                                Support
                            </a>
                        </li>
                    </ul>
                </div>
                <div style={footerSectionStyle}>
                    <h2 style={footerSectionTitleStyle}>Contact Us</h2>
                    <ul style={{ listStyle: 'none', padding: '0', margin: '10px' }}>
                        <li>Email: ticfoundation@gmail.com</li>
                        <li>Phone: +123 456 7890</li>
                        <li>Address: 123 Main Street, Anytown, USA</li>
                    </ul>
                </div>
                <div style={footerSectionStyle}>
                    <h2 style={footerSectionTitleStyle}>Follow Us</h2>
                    <div style={socialIconsStyle}>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            style={socialIconStyle}
                            onMouseOver={(e) => (e.target.style.color = socialIconHoverStyle.color)}
                            onMouseOut={(e) => (e.target.style.color = socialIconStyle.color)}
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            style={socialIconStyle}
                            onMouseOver={(e) => (e.target.style.color = socialIconHoverStyle.color)}
                            onMouseOut={(e) => (e.target.style.color = socialIconStyle.color)}
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            style={socialIconStyle}
                            onMouseOver={(e) => (e.target.style.color = socialIconHoverStyle.color)}
                            onMouseOut={(e) => (e.target.style.color = socialIconStyle.color)}
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            style={socialIconStyle}
                            onMouseOver={(e) => (e.target.style.color = socialIconHoverStyle.color)}
                            onMouseOut={(e) => (e.target.style.color = socialIconStyle.color)}
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '13px', color: '#ddd' }}>
                © {currentYear} Tic Foundation. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
