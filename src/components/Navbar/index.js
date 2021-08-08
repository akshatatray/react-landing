import React, {useState, useEffect} from 'react';
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
    const [navScroll, setNavScroll] = useState(false);

    const handleNavScroll = () => {
        (window.scrollY >= 72) ? setNavScroll(true) : setNavScroll(false);
    }

    useEffect (() => {
        window.addEventListener('scroll', handleNavScroll);
    }, []);

    return (
        <>
            <Nav navScroll={navScroll}>
                <NavbarContainer>
                    <NavLogo navScroll={navScroll}>
                        Biffled!
                    </NavLogo>
                    <MobileIcn onClick={toggleNav}>
                        <FaBars style={navScroll ? {color: "#FFFFFF"} : {color: "#4B38D3"}}/>
                    </MobileIcn>
                    <NavMenu>
                        <NavItem>
                            <NavLink navScroll={navScroll} to="product">Product</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink navScroll={navScroll} to="learn">Learn</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink navScroll={navScroll} to="download">Download</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink navScroll={navScroll} to="register">Register</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink navScroll={navScroll} to="/login">LOG IN</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
