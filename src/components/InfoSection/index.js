import React from 'react'
import {
    InfoSectionContainer,
    InfoSectionTextWrapper,
    InfoSectionImageWrapper,
    ISHeading,
    ISDetails,
    ISBtn,
    ISBtnLink,
    ISImg,
    Blue
} from './InfoSection.elements';
import HeroImg from '../../assets/img/hero.svg';

const InfoSection = () => {
    return (
        <InfoSectionContainer>
            <InfoSectionTextWrapper>
                <ISHeading>
                    “Your <Blue>Vibe</Blue> {<br />}
                    attracts Your <Blue>Tribe!</Blue>”
                </ISHeading>
                <ISDetails>
                    Make new friends! Just by Swiping new Faces {<br />}
                    with Common Interests.
                </ISDetails>
                <ISBtn>
                    <ISBtnLink to="/login">GET STARTED</ISBtnLink>
                </ISBtn>
            </InfoSectionTextWrapper>
            <InfoSectionImageWrapper>
                {/* <ISImg /> */}
                <ISImg alt="Hero Image" src={HeroImg} />
            </InfoSectionImageWrapper>
        </InfoSectionContainer>
    )
}

export default InfoSection
