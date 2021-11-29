import React from 'react';
import Layout from '../layout/Layout'
import UnderPageTextWraper from '../components/TextBoxes/UnderPageTextWraper';
import H1 from '../components/H-ers/H1';
import WidthText from '../components/TextBoxes/WidthText';
import GridSixContainer from '../components/Grids/GridSixContainer';
import GridImgElm from '../components/Grids/GridImgElm';
import { StaticImage } from 'gatsby-plugin-image';
import ArticleButton from '../components/Button/ArticleButton';
import { Link } from 'gatsby';

const ArticlesPage = () => (
  <Layout>
    <UnderPageTextWraper>
      <H1>Articles</H1>
        <WidthText>
        While you cannot travel, we can take you for a journey in your own kitchen!
        Are you ready?
        </WidthText>
    </UnderPageTextWraper>
    <GridSixContainer>
      <GridImgElm>
        <StaticImage
      src="../images/unsplash-mini1.png"
      alt="Pomegranates"
      placeholder="tracedSVG"
      />
      <ArticleButton as={Link} to="/">Creamy Hummus by Noel</ArticleButton>
      </GridImgElm>
      <GridImgElm>
        <StaticImage
        src="../images/unsplash-mini2.png"
        alt="Pomegranates"
        placeholder="tracedSVG"
        />
        <ArticleButton as={Link} to="/">Middle Eastern Salad by Aron</ArticleButton>
      </GridImgElm>
      <GridImgElm>
        <StaticImage
        src="../images/unsplash-mini3.png"
        alt="Pomegranates"
        placeholder="tracedSVG"
        />
        <ArticleButton as={Link} to="/">Shakshouka by Noemi</ArticleButton>
      </GridImgElm>
      <GridImgElm>
        <StaticImage
        src="../images/unsplash-mini4.png"
        alt="Pomegranates"
        placeholder="tracedSVG"
        />
        <ArticleButton as={Link} to="/">Soft Dream by Gal</ArticleButton>
      </GridImgElm>
      <GridImgElm>
        <StaticImage
        src="../images/unsplash-mini5.png"
        alt="Pomegranates"
        placeholder="tracedSVG"
        />
        <ArticleButton as={Link} to="/">Goulash by Aviv</ArticleButton>
      </GridImgElm>
      <GridImgElm>
        <StaticImage
        src="../images/unsplash-mini6.png"
        alt="Pomegranates"
        placeholder="tracedSVG"
        />
        <ArticleButton as={Link} to="/">How to shop the ingredients?</ArticleButton>
      </GridImgElm>
    </GridSixContainer>
  </Layout>
);

export default ArticlesPage;