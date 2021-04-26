import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&display=swap');
    </style>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
