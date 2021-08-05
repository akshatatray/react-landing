import React from 'react';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcn,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink
} from './Navbar.elements';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggleNav }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo>
                        Biffled!
                    </NavLogo>
                    <MobileIcn onClick={toggleNav}>
                        <FaBars/>
                    </MobileIcn>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="discover">Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contact">Download</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="register">Register</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login">Log In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
