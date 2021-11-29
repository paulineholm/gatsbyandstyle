import React from 'react';
import Layout from '../layout/Layout'
import UnderPageTextWraper from '../components/TextBoxes/UnderPageTextWraper';
import H1 from '../components/H-ers/H1';
// import { StaticImage } from 'gatsby-plugin-image';
import WidthText from '../components/TextBoxes/WidthText';
import GridSixContainer from '../components/Grids/GridSixContainer';
import GridImgElm from '../components/Grids/GridImgElm';

const GalleryPage = () => (
  <Layout>
    <UnderPageTextWraper>
      <H1>Gallery</H1>
        <WidthText>
        While you cannot travel, we can take you for a journey in your own kitchen!
        Are you ready?
        </WidthText>
    </UnderPageTextWraper>
    <GridSixContainer>
      <GridImgElm/>
      <GridImgElm/>
      <GridImgElm/>
      <GridImgElm/>
      <GridImgElm/>
      <GridImgElm/>
    </GridSixContainer>
  </Layout>
);

export default GalleryPage;