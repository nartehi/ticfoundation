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

const Form = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    width: 300px;
    text-align: center;
`;
const Button = styled.button`
    width: 100%;
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

const Profile = ({ onClose }) => {
    return (
        <Container onClick={onClose}>
            <Form onClick={(e) => e.stopPropagation()}>
                <h2>Profile</h2>
                <p>Username: user</p>
                <p>Role: User</p>
                <p>Email: user@example.com</p>
                <p>Phone: 1234567890</p>
                <p>Address: 1234 Main St, City, State</p>
                <p>Joined: 01/01/2021</p>
                <p>Last Login: 01/01/2021</p>
                <Button type="submit">Edit Profile</Button>
            </Form>
        </Container>
    );
};

export default Profile;
