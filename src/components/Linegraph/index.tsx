import React from 'react';
import { Line } from 'react-chartjs-2';

import {Container} from './styles'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 145, 71, 0.685)' , 
      borderColor: 'rgba(255, 99, 71, 0.829)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(255, 99, 71, 0.829)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 3,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: 'rgba(255, 99, 71, 0.829)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 2,
      pointHitRadius: 50,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const Linegraph: React.FC = () => {
    return (
      <Container>
        <Line type="line" data={data} />
      </Container>
    );

}

export default Linegraph;