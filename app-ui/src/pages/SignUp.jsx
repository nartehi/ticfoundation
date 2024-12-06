import React, { useState } from 'react';
import styled from 'styled-components';
import { post } from '../components/ApiCalls/api';
import { USER_API } from '../components/ApiCalls/apiConstants';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

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
    width: 400px;
    text-align: center;
    position: relative; 
`;

const SnackbarContainer = styled.div`
    position: absolute;
    top: -5px; /* Adjust position to show above the form */
    left: 60%;
    transform: translateX(-50%);
    z-index: 1500; /* Ensure it stays above the form */
    width: 400px; /* Adjust the width here */
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
    const [flashMessage, setFlashMessage] = useState({ open: false, message: '', severity: '' });

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
            setFlashMessage({ open: true, message: 'Passwords do not match!', severity: 'error' });
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
                setFlashMessage({ open: true, message: 'User registered successfully!', severity: 'success' });

                // Clear form data after successful submission
                setFormData({
                    name: '',
                    email: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
                    authorities: 'ROLE_STUDENT',
                });
                setProfilePicture(null);

                // Close the modal after a short delay
                setTimeout(() => {
                    onClose();
                }, 2000);
            } else {
                setFlashMessage({ open: true, message: response.data?.message || 'Unexpected error occurred', severity: 'error' });
            }
        } catch (error) {
            console.error(error);
            setFlashMessage({ open: true, message: error.message || 'An error occurred. Please try again.', severity: 'error' });
        }
    };

    return (
        <Container onClick={onClose}>
            <Form onClick={(e) => e.stopPropagation()}>
                <SnackbarContainer>
                    <Snackbar
                        open={flashMessage.open}
                        autoHideDuration={6000}
                        onClose={() => setFlashMessage({ ...flashMessage, open: false })}
                    >
                        <Alert severity={flashMessage.severity} onClose={() => setFlashMessage({ ...flashMessage, open: false })}>
                            {flashMessage.message}
                        </Alert>
                    </Snackbar>
                </SnackbarContainer>
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
