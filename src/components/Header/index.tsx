import React from 'react';

import { Link } from 'react-router-dom';

import { FiSearch, FiBell } from 'react-icons/fi';


import { Container, Title, HeaderMenu, UserContainer, ButtonsContainer } from './styles'

const Header: React.FC = () => {

  return (
    <>
      <Container>
        <Title>
          <h1>
            Overview
          </h1>
        </Title>
        <HeaderMenu>
          <ButtonsContainer>
            <FiSearch />
            <FiBell />
          </ ButtonsContainer>
          <UserContainer>
            <Link to=''>Charles Lima</Link>
            <img src="https://avatars.githubusercontent.com/u/37147008?v=4" alt="Usuario"/>
          </UserContainer>
        </HeaderMenu>

      </Container>
      
    </>
  )

}

export default Header;
