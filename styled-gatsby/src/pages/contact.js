import React from 'react';
import Layout from '../layout/Layout'
import UnderPageTextWraper from '../components/TextBoxes/UnderPageTextWraper';
import H1 from '../components/H-ers/H1';
import WidthText from '../components/TextBoxes/WidthText';

const ContactPage = () => (
  <Layout>
    <UnderPageTextWraper>
      <H1>Contact</H1>
        <WidthText>
        While you cannot travel, we can take you for a journey in your own kitchen!
        Are you ready?
        </WidthText>
    </UnderPageTextWraper>
  </Layout>
);

export default ContactPage;