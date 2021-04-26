//import React, { useState, useEffect } from 'react';
import React from 'react';

import { Container, VerticalContainer } from './styles';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Cardsbar from '../../components/Cardsbar';
import Graphbox from '../../components/Graphbox';


const Dashboard: React.FC = () => {

  return (
    <>
      <Container>
        <Sidebar />
        <VerticalContainer>
          <Header />
          <Cardsbar />
          <Graphbox />
        </VerticalContainer>
      </Container>
    </>
  );
};

export default Dashboard;
