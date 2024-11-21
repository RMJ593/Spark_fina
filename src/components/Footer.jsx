// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Styled Components
const FooterContainer = styled.footer`
  background-color: #134C8D;
  color: #fff;
  padding: 40px 20px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 200px;
`;

const LogoLarge = styled.img`
  width: 150px; /* Larger logo for Millennium */
`;

const LogoSmall = styled.img`
  width: 70px; /* Smaller logo */
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  display: block;
  margin-bottom: 8px;

  &:hover {
    color: #ff9c00;
    transition: 0.3s ease;
  }
`;

const IconRow = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.i`
  font-size: 24px;
  color: #fff;
  margin-right: 15px;

  &:hover {
    color: #ff9c00;
    transition: 0.3s ease;
  }
`;

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        
        <Column>
          <LogoLarge
            src={require('../components/image/ExampleCarouselImage/Millennium_logo.webp')}
            alt="Millennium Logo"
          />
        </Column>

    
        <Column>
          <Title>About</Title>
          <Link href="#">Story</Link>
          <Link href="#">Testimonials</Link>
        </Column>

       
        <Column>
          <Title>Contact</Title>
          <IconRow>
            <Link
              href="https://www.youtube.com/@MCNpartners"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="fab fa-youtube" />
            </Link>
            <Link
              href="https://www.instagram.com/millenniumfellowshipmec/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="fab fa-instagram" />
            </Link>
            <Link
              href="https://github.com/MillenniumMec-24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="fab fa-github" />
            </Link>
          </IconRow>
        </Column>

        <Column>
          <LogoSmall
            src={require('../components/image/ExampleCarouselImage/logo (1).png')}
            alt="Another Logo"
          />
        </Column>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

