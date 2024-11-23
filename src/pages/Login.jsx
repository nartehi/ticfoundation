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
const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
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

const Form = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    width: 300px;
    text-align: center;
`;

const Login = ({ onClose }) => {
    return (
        <Container onClick={onClose}>
            <Form onClick={(e) => e.stopPropagation()}>
                <h2>Login</h2>
                <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        
                    />
                <Button type="submit">Login</Button>
            </Form>
        </Container>
    );
};

export default Login;
