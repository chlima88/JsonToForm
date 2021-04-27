import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Box } from './style';

import Linegraph from '../Linegraph';

const Graphbox: React.FC = () => {
  return(
    <Container>
      <div className="griditem">
        <Linegraph/>
      </div>
      <Box className="griditem">
        <Link to='' className="key">Resolved</Link>
        <Link to='' className="value">449</Link>
      </Box>
      <Box className="griditem">
        <Link to='' className="key">Received</Link>
        <Link to='' className="value">426</Link>
      </Box>
      <Box className="griditem">
        <Link to='' className="key">Average first response time</Link>
        <Link to='' className="value">33m</Link>
      </Box>
      <Box className="griditem">
        <Link to='' className="key">Average response time</Link>
        <Link to='' className="value">3h 8m</Link>
      </Box>
      <Box className="griditem">
        <Link to='' className="key">Resolution within SLA</Link>
        <Link to='' className="value">94%</Link>
      </Box>
    </ Container>
  )
}

export default Graphbox;