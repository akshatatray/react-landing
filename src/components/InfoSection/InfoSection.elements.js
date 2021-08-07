import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import HeroImg from '../../assets/img/hero.svg';

export const InfoSectionContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    height: calc(100vh - 72px);
    padding: 0 1.5rem;
    margin: auto;
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 1.25rem;
    }
`;

export const InfoSectionTextWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
        margin: auto;
    }
`;

export const InfoSectionImageWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

export const ISHeading = styled.h1`
    font-size: 3.25rem;
    font-family: 'Montserrat', sans-serif;
    color: #343434;
    margin: 0 0 1.5rem 0;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
        margin: 0 0 1rem 0;
        width: 100%;
    }
`;

export const ISDetails = styled.p`
    font-size: 1.25rem;
    font-family: 'Poppins', sans-serif;
    color: #696969;
    margin: 0 0 1.5rem 0;

    @media screen and (max-width: 768px) {
        font-size: 0.925rem;
        margin: 0 0 1rem 0;
        width: 100%;
    }
`;

export const ISBtn = styled.nav`
    display: flex;
    align-items: center;
    margin: 0 0 1.5rem 0;
`;

export const ISBtnLink = styled(LinkR)`
    border-radius: 0.25rem;
    white-space: nowrap;
    padding: 0.45rem 2rem;
    color: #4B38D3;
    font-size: .9rem;
    font-weight: bold;
    outline: none;
    border: 0.125rem solid #4B38D3;
    cursor: pointer;
    transition: all .3s ease-in-out;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;

    &:hover {
        color: #FFFFFF;
        background-color: #4B38D3;
    }
`;

export const ISImg = styled.img`
    width: 100%;
`;

export const Blue = styled.span`
    color: #4B38D3;
`;