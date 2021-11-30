import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout'
import WidthText from '../components/TextBoxes/WidthText';
import UnderPageTextWraper from '../components/TextBoxes/UnderPageTextWraper';
import AboutTextBox from '../components/TextBoxes/AboutTextBox';
import { StaticImage } from 'gatsby-plugin-image';
import H1 from '../components/H-ers/H1';
import H2 from '../components/H-ers/H2';
import Flex from '../layout/Flex';


const FrontPageLeft = styled.div`
    width: 50%;
`

const FrontPageRight = styled.div`
    width: 50%;
`

const AboutPage = () => (
  <Layout>
    <Flex>
    <FrontPageLeft>
      <UnderPageTextWraper>
      <H1>About</H1>
        <WidthText>
        While you cannot travel, we can take you for a journey in your own kitchen!
        Are you ready?
        </WidthText>
      </UnderPageTextWraper>
      <AboutTextBox>
        We are a small cooperative focusing on a fresh Middle Eastern ingredients grown locally here in Sweden, due to the highest ecological standards.
        <H2>Zara Aviv</H2>
      </AboutTextBox>
    </FrontPageLeft>
    <FrontPageRight>
      <StaticImage
      src="../images/unsplash6-1440x1772.jpg"
      alt="Pomegranates"
      placeholder="tracedSVG"
      />
    </FrontPageRight>
    </Flex>
  </Layout>
);

export default AboutPage;