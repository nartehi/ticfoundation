import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;
const Button = styled.button`
    width: 70%;
    height: 50px;
    font-size: 20px;
    padding: 10px;
    margin: 10px 0;
    background-color: #86b09c;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #75a08b;
    }
`;

const Form = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    width: 300px;
    text-align: center;
`;

const Logout = ({ onClose }) => {
    return (
        <Container onClick={onClose}>
            <Form onClick={(e) => e.stopPropagation()}>
                <h2>Log Out</h2>
                <p>Are you sure you want to log out?</p>
                <Button type="submit">Confirm Log Out</Button>
                <Button onClick={onClose}>Cancel</Button>
            </Form>
        </Container>
    );
};

export default Logout;
