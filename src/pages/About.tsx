  
import React, { Fragment, FC } from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import aboutImg from '../assets/about.jpg';
import { translate } from '../i18n';
import { RootState } from '../store';
import styled from 'styled-components';


const Wrapper = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 40px;
`;

const Wrapper2 = styled.div`
  padding: 50px 0;
  text-align: center;
  margin-bottom: 40px;
  
`;

const Heading = styled.h1`
font-size: 40px;
`;

const Bio = styled.p`
font-size: 20px;
`;


const About: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  return(
    <Fragment>
      <Header />
        <Wrapper>
          <Wrapper2>
            <Heading>{translate('about', language)}</Heading>
            <img src={aboutImg} alt="" />
            <Bio>{translate('aboutUsText', language)}</Bio>
          </Wrapper2>
        </Wrapper>
    </Fragment>
  );
}

export default About;