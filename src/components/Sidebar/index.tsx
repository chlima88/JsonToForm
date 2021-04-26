import React from 'react';

import { Link } from 'react-router-dom';

import  { Container, Title, Menu} from './styles';

import logo from '../../assets/logo.svg';

const Sidebar: React.FC = () => {
  return(
    <>
      <Container>
        <Title>
          <img src={logo} alt=""/>
          <Link to=''>Dashboard</Link>
        </Title>
        <Menu>
          <ul>
            <li><Link to=''>Overview</Link></li>
            <li><Link to=''>Tickets</Link></li>
            <li><Link to=''>Ideas</Link></li>
            <li><Link to=''>Contacts</Link></li>
            <li><Link to=''>Agents</Link></li>
            <li><Link to=''>Articles</Link></li>
            <hr/>
            <li><Link to=''>Settings</Link></li>
            <li><Link to=''>Subscription</Link></li>
          </ul>
        </Menu>

      </Container>
    </>
  )
}

export default Sidebar;