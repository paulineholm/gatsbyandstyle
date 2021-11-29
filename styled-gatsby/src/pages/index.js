import React from 'react'
import { Link } from 'gatsby';
import Layout from '../layout/Layout';
import H1 from '../components/H-ers/H1';
import Button from '../components/Button/Button';
import { StaticImage } from 'gatsby-plugin-image';
import WidthText from '../components/TextBoxes/WidthText';
import styled from 'styled-components'
import Flex from '../layout/Flex';

const FrontPageLeft = styled.div`
    width: 60%;
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 2em;
`

const FrontPageRight = styled.div`
    width: 40%;
`


const IndexPage = () => (
  <Layout>
    <Flex>
    <FrontPageLeft>
      <H1 front>Middle Eastern Food Heaven</H1>
      <WidthText front>While you cannot travel, we can take you for a journey in your own kitchen!
        Are you ready?
      </WidthText>
      <Button as={Link} to="/about">Start Cooking 🤌🏻</Button>
    </FrontPageLeft>
    <FrontPageRight>
      <StaticImage
      src="../images/unsplash3-4608x3072.jpg"
      alt="Pomegranates"
      placeholder="tracedSVG"
      />
    </FrontPageRight>
    </Flex>
  </Layout>
)

export default IndexPage;