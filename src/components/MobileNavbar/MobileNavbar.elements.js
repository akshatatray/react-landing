import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const MobileNavbarContainer= styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #0D0D0D;
    display: grid;
    align-items: center;
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const CloseIcon = styled(FaTimes)`
    color: #FFFFFF;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 3rem;
    font-size: 1.5rem;
    cursor: pointer;
`;

export const MobileNavbarWrapper = styled.div`
    color: #FFFFFF;
`;

export const MobileNavbarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 4.5rem);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 4.5rem);
    }
`;

export const MobileNavbarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    list-style: none;
    transition: 0ms.2s ease-in-out;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        color: #01BF71;
        transition: 0ms.2s ease-in-out;
    }
`;

export const MobileBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const MobileNavRouter = styled(LinkR)`
    border-radius: 0.35rem;
    background-color: #01BF71;
    white-space: nowrap;
    padding: 0.75rem 1.5rem;
    color: #010606;
    font-size: .9rem;
    font-family: 'Poppins', sans-serif;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all .2s ease-in-out;
        background-color: #FFFFFF;
        color: #010606;
    }
`;
