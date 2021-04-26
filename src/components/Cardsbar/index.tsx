import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Card } from './styles'

const Cardsbar: React.FC = () => {
  return (
    <>
      <Container className='grid'>
        <Card>
          <Link to='' className='key'>Unresolved</Link>
          <Link to='' className='value'>60</Link>
        </Card>
        <Card>
          <Link to='' className='key'>Overdue</Link>
          <Link to='' className='value'>16</Link>
        </Card>
        <Card>
          <Link to='' className='key'>Open</Link>
          <Link to='' className='value'>43</Link>
        </Card>
        <Card>
          <Link to='' className='key'>On hold</Link>
          <Link to='' className='value'>64</Link>
        </Card>
        
      </Container>
      
    </>
  )
}

export default Cardsbar