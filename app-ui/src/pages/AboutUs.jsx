import React from 'react';

import founderImage from '../components/img/founder.png';

export const AboutUs = () => {
    const sectionStyle = {
        padding: '50px 0',
        textAlign: 'center',
    };

    const introSectionStyle = {
        ...sectionStyle,
        backgroundColor: '#f9f9f9',
    };

    const storySectionStyle = {
        ...sectionStyle,
        backgroundColor: '#fff',
    };

    const visualsSectionStyle = {
        ...sectionStyle,
        backgroundColor: '#f9f9f9',
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    };

    const rowStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    };

    const colStyle = {
        flex: '1',
        padding: '20px',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        marginLeft:'-130px',
        borderRadius: '10%',
    };

    const headingStyle = {
        fontSize: '2rem',
        marginBottom: '20px',
    };

    const subHeadingStyle = {
        fontSize: '1.5rem',
        marginBottom: '10px',
    };

    const textStyle = {
        fontSize: '1rem',
        lineHeight: '1.6',
        marginBottom: '20px',
        margin: '20px',
        textAlign: 'left', 
    };

    return (
        <div className="about-us">
            <section style={introSectionStyle}>
                <div style={containerStyle}>
                    <div style={rowStyle}>
                        <div style={colStyle}>
                            <h1 style={headingStyle}>TiC Foundation: Empowering Through Technology</h1>
                            <hr />
                            <p style={textStyle}>
                                The TiC Foundation was born out of the belief that every child, regardless of their background, deserves access to quality computer education. Our journey is a testament to the transformative power of education, and we are committed to breaking down barriers and bridging the digital gap for children in underserved communities. Through our programs, we aim to provide hands-on, practical learning experiences that go beyond traditional classroom settings. Our vision is not just to introduce computers but to ignite curiosity, foster creativity, and equip the next generation with the skills they need to thrive in the digital age.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section style={storySectionStyle}>
                <div style={containerStyle}>
                    <div style={rowStyle}>
                        <div style={{ ...colStyle, flex: '0 0 40%' }}>
                            <img src={founderImage} style={imageStyle} alt="founder" />
                        </div>
                        <div style={{ ...colStyle, flex: '0 0 60%' }}>
                            <h2 style={subHeadingStyle}>Our Founder's Story</h2>
                            <h4 style={subHeadingStyle}>Early Experiences as Catalyst for Empowerment</h4>
                            <hr />
                            <p style={textStyle}>
                                Growing up in the heart of Ghana, Isaac Narteh, embarked on a journey shaped by a profound lack of access to computer education in the schools he attended. The absence of computers in the classrooms meant that countless children, including himself, missed out on acquiring crucial digital skills that have become indispensable in today's rapidly evolving world.
                            </p>
                            <p style={textStyle}>
                                The realization of this digital divide became even more poignant when, after completing high school, he returned to his community to teach children in Grades 4, 5, and 6. Witnessing the same lack of resources in the classrooms mirrored his own childhood experiences. It was a stark reminder that the opportunities he wished for during his school days were still elusive for the younger generation.
                            </p>
                            <p style={textStyle}>
                                Determined to make a difference, he pursued a journey across continents, landing in Berea College in the United States to study computer science. Armed with knowledge and a burning passion for change, he founded the TiC Foundation — a non-profit organization with a singular mission: to empower young minds with practical computer skills.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section style={visualsSectionStyle}>
                <div style={containerStyle}>
                    <div style={rowStyle}>
                        <div style={colStyle}>
                            <h2 style={subHeadingStyle}>Our Mission</h2>
                            <p style={textStyle}>
                                Our mission is to collaborate and provide essential computer skills to young people from low-income families with resources and programs that will assist them to gain confidence in computing and support them to break into tech fields in institutions of higher learning.
                            </p>
                            <img src="https://seattlemedium.com/wp-content/uploads/2020/12/distance-learning-748X486.jpg" style={imageStyle} alt="mission" />
                        </div>
                        <div style={colStyle}>
                            <h2 style={subHeadingStyle}>Our Vision</h2>
                            <p style={textStyle}>
                                Our vision is to equip, motivate and empower underprivileged young people with computer competencies by collaborating with established educational institutions and organizations in Ghana and worldwide.
                            </p>
                            <img src="https://img.freepik.com/free-photo/portrait-black-child-while-doing-homework_641386-254.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=ais" style={imageStyle} alt="vision" />
                        </div>
                    </div>
                </div>
            </section>
         
        </div>
    );
};

export const OurAim = () => {
    return (
        <div className="home">
            <h1>TiC Foundation  - Aim</h1>
        </div>
    );
};

export const OurVision = () => {
    return (
        <div className="home">
            <h1>TiC Foundation  -Our Vision</h1>
        </div>
    );
};