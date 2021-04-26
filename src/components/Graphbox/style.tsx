import styled from 'styled-components';

export const Container = styled.div`

  display: grid;
  /* justify-content: space-evenly; */
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  grid-template-columns: auto 100px;
  grid-auto-rows: minmax(max-content,1fr);
  grid-gap: 1px;

  background-color: #ffffff;
  border: 1px solid #DFE0EB;
  border-radius: 8px;

  height: 550px;
  margin: 30px;


`;