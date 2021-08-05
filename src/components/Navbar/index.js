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
                            <NavLink to="product">Product</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="learn">Learn</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="download">Download</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="register">Register</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login">LOG IN</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
