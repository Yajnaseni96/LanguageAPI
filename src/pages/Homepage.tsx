  
import React, { Fragment, FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/Header';
import { translate } from '../i18n';
import { RootState } from '../store';
import agency_bg from '../assets/agency_bg.jpg';



const Intro = styled.section`
  height: 100%;
  background-image: url(${agency_bg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Introoverlay = styled.div`
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: black;
`;

const Introbody = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: inherit;
    color: white;
    
`;
const Heading = styled.h1`
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
  line-height: 1.5;
`;

const Para = styled.p`
  max-width: 600px;
  text-align: center;
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
`;

const HomePage: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  return(
    <Fragment>
      <Header fixed transparent />
      <Intro>
        <Introoverlay/>
        <Introbody>
          <Heading>React</Heading>
          <Para>{translate('introText', language)}</Para>
        </Introbody>
      </Intro>
    </Fragment>
  );
}

export default HomePage;