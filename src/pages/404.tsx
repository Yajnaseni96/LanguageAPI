  
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { translate } from '../i18n';
import { RootState } from '../store';

const Heading = styled.h1`
font-size: 50px;
`;

const Errormsg = styled.p`
font-size: 30px;
font-family: serif;
font-style: oblique;
color: #a77926;
`;

const Msg = styled.p`
font-size: 30px
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: inherit;
`;

const Height= styled.div`
height: 100%;
`;

const Page404: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  return(
    <>
    <Height>
      <Wrapper>
        <Heading>404</Heading>
        <Errormsg>{translate('pageDoesNotExist', language)}</Errormsg>
        <Msg><Link to="/">{translate('returnToHomepage', language)}</Link></Msg>
      </Wrapper>
    </Height>
    </>
  );
}

export default Page404;