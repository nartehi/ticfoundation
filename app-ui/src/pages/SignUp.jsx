import React, { useState } from 'react';
import styled from 'styled-components';
import { post } from '../components/ApiCalls/api';
import { USER_API } from '../components/ApiCalls/apiConstants';

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

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Select = styled.select`
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

const SignUp = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        authorities: 'ROLE_STUDENT',
    });
    const [profilePicture, setProfilePicture] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setProfilePicture(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const formDataPayload = new FormData();
        formDataPayload.append('user', new Blob([JSON.stringify({
            name: formData.name,
            email: formData.email,
            username: formData.username,
            password: formData.password,
            authorities: formData.authorities,
        })], { type: 'application/json' }));
        
        if (profilePicture) {
            formDataPayload.append('profilePicture', profilePicture);
        }

        try {
            const response = await post(USER_API.CREATE_NEW_USER, formDataPayload, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201 || response.status === 200) {
                alert('User registered successfully!');
                setFormData({
                    name: '',
                    email: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
                    authorities: 'ROLE_STUDENT',
                });
                setProfilePicture(null);
                onClose();
            } else {
                alert(`Error: ${response.data?.message || 'Unexpected error occurred'}`);
            }
        } catch (error) {
            console.error(error);
            alert(`An error occurred: ${error.message || 'Please try again later.'}`);
        }
    };

    return (
        <Container onClick={onClose}>
            <Form onClick={(e) => e.stopPropagation()}>
                <h2>Sign Up To Join Us!</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <Select
                        name="authorities"
                        value={formData.authorities}
                        onChange={handleChange}
                        required
                    >
                        <option value="ROLE_STUDENT">Student</option>
                        <option value="ROLE_ADMIN">Administrator</option>
                        <option value="ROLE_TEACHER">Teacher</option>
                        <option value="ROLE_TUTOR">Tutor</option>
                    </Select>
                    <Input
                        type="file"
                        name="profilePicture"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <Button type="submit">Sign Up</Button>
                </form>
            </Form>
        </Container>
    );
};

export default SignUp;
