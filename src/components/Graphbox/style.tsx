import styled from 'styled-components';

export const Container = styled.div`

  display: grid;
  /* justify-content: space-evenly; */
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  grid-template-columns: 3fr 1fr;
  grid-auto-rows: minmax(max-content,1fr);
  grid-gap: 1px;

  background-color: #ffffff;
  border: 1px solid #DFE0EB;
  border-radius: 8px;

  height: 550px;
  /* min-width: 1200px; */
  margin: 30px;

  .griditem:first-child {
    grid-row-end: span 5;

    /* &  ~ .item{
      outline: 1px solid #DFE0EB
    } */
  }



`;


export const Box = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1;


  /* height: 135px;
  background-color: #ffffff; */
  border-bottom: 1px solid #DFE0EB;
  border-left: 1px solid #DFE0EB;

  &.item:last-child{
    border-bottom:0;
  }

  
  a {
    text-decoration: none;
    color: #000;
    transition: all ease-in-out 0.2s;

    &.key {
      font-size: 16px;
      font-weight: 600;
    } 

    &.value{
      font-size: 24px;
      font-weight: 700;
    }
  }


  &:hover {
      
      /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */

      a {
        color: tomato;
        border-color: tomato;
      }
    }

  
    
  
  /* transition: box-shadow ease-in-out 0.2s;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  */ 

  /* & + div {
    margin-left: 30px;
  } */

  /* a {
    text-decoration: none;
    color: #000;
    transition: all ease-in-out 0.2s;

    &.key {
      font-size: 19px;
      font-weight: bold;
    } 

    &.value{
      font-size: 40px;
      font-weight: bold;
    }
  }


  &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      a {
        color: tomato;
        border-color: tomato;
      }
    } */

`;