import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import UserAccount from "./UserAccount";
import Dropdown from "./Dropdown"; 
import logo from '../components/img/logo.png'; 


const Nav = styled.div`
    background: #121c;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

const NavIcon = styled(Link)`
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Logo = styled.img`
    height: 60px;
    margin-right: 20px;
    border-radius: 50%;
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;

const NavItem = styled(Link)`
    margin: 0 10px;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    &:hover {
        color: #f9a825;
    }
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const Title = styled.h1`
    text-align: center;
    color: white;
    margin: 0;
    font-size: 2rem;
    font-family: FreeMono, monospace
    font-weight: 800
    font-variant: small-caps
    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
        margin-left: 20px;
    }
`;

const Sidebar = ({ onModalOpen }) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const servicesDropdownItems = [
        { title: 'Service One', path: '/services/services1' },
        { title: 'Service Two', path: '/services/services2' },
        { title: 'Service Three', path: '/services/services3' },
    ];

    const eventsDropdownItems = [
        { title: 'Event One', path: '/events/events1' },
        { title: 'Event Two', path: '/events/events2' },
    ];
    const aboutusDropdownItems = [
        { title: 'Our Aim', path: '/about-us/aim' },
        { title: 'Our Vision', path: '/about-us/vision' },
    ]

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                    <Logo src={logo} alt="Logo" /> 
                    <Title>TiC Foundation</Title>
                    <NavMenu>
                        <NavItem to="/home">Home</NavItem>
                        <NavItem to="/about-us">About Us</NavItem>
                        <NavItem to="/commitment">Commitments</NavItem>
                        <NavItem to="/executives">Our Team</NavItem>
                        {/* <Dropdown to="/about-us" title="About Us" items={aboutusDropdownItems} /> */}
                        <Dropdown title="Services" items={servicesDropdownItems} />
                        <Dropdown title="Events" items={eventsDropdownItems} />
                        <NavItem to="/contact">Contact</NavItem>
                        <NavItem to="/support">Support</NavItem>
                    </NavMenu>
                    <UserAccount onModalOpen={onModalOpen} />
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;
