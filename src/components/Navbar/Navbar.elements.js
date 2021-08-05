import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background-color: #4B38D3;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    box-shadow: 0 5px 20px -5px rgb(0 0 0 / 10%);
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition:  0.75s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 4.5rem;
    z-index: 1;
    width: 100%;
    padding: 0 1.5rem;
    max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    color: #FFFFFF;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
`;

export const MobileIcn = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        color: #FFFFFF;
        padding: 1.5rem;
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -1.4rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 4.5rem;
`;

export const NavLink = styled(LinkS)`
    color: #FFFFFF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;

    &.active {
        border-bottom: 0.125rem solid #FFFFFF;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 0.25rem;
    background-color: #FFFFFF;
    white-space: nowrap;
    padding: 0.625rem 1.25rem;
    color: #4B38D3;
    font-size: .9rem;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .3s ease-in-out;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
`;