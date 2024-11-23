import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FaChevronDown } from 'react-icons/fa'; 


const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownButton = styled.div`
    color: #fff;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
        color: #f9a825;
    }
`;

const DropdownContent = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    background-color: #9fede8;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

const DropdownItem = styled(Link)`
    color: #fff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
        background-color: #f07c7a;
    }
`;

const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <DropdownContainer onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <DropdownButton>
                {title}
                <FaChevronDown style={{ marginLeft: '5px' }} /> 
            </DropdownButton>
            <DropdownContent isOpen={isOpen}>
                {items.map((item, index) => (
                    <DropdownItem to={item.path} key={index}>
                        {item.title}
                    </DropdownItem>
                ))}
            </DropdownContent>
        </DropdownContainer>
    );
};

export default Dropdown;
