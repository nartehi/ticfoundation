import React from 'react';
import styled from 'styled-components';

const JoinUsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f9f9f9;
    text-align: center;
    padding: 20px;
`;

const Heading = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
`;

const SubHeading = styled.p`
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 40px;
`;

const SignUpButton = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #86b09c;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #75a08b;
    }
`;

const JoinUs = ({ onSignUpClick }) => {
    return (
        <JoinUsContainer>
            <Heading>Join Us Today</Heading>
            <SubHeading>Make an impact in changing lives</SubHeading>
            <SignUpButton onClick={onSignUpClick}>Sign Up</SignUpButton>
        </JoinUsContainer>
    );
};

export default JoinUs;
