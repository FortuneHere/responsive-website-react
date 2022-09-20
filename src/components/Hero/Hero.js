import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Containter, MainHeading } from '../../globalStyles';
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4"/>
      <Containter>
        <MainHeading> Your data is secure with us</MainHeading>
        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Containter>
    </HeroSection>
  );
};

export default Hero;
