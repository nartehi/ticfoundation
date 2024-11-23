import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserIcon = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
`;

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`;

const UserName = styled.span`
    color: #fff;
    font-size: 1rem;
`;

const DropdownMenu = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 55px; /* Adjusted to appear below the username */
    right: -20px;
    background-color: #15171c;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 150px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1000;
`;

const DropdownItem = styled(Link)`
    display: block;
    padding: 10px;
    color: #fff;
    text-decoration: none;
    &:hover {
        background-color: #575757;
    }
`;

const UserAccount = ({ onModalOpen }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <UserIcon onClick={toggleDropdown}>
            <UserImage src="https://via.placeholder.com/40" alt="User" />
            <UserName>Isaac Narteh</UserName>
            <DropdownMenu isOpen={isOpen}>
                <DropdownItem to="#" onClick={() => onModalOpen('profile')}>Profile</DropdownItem>
                <DropdownItem to="#" onClick={() => onModalOpen('login')}>Login</DropdownItem>
                <DropdownItem to="#" onClick={() => onModalOpen('logout')}>Sign Out</DropdownItem>
                <DropdownItem to="#" onClick={() => onModalOpen('signup')}>Sign Up</DropdownItem>
            </DropdownMenu>
        </UserIcon>
    );
};

export default UserAccount;
