import styled from 'styled-components';
import { darken  }  from 'polished';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(max-content, 1fr); 
  justify-content: space-evenly; 
  overflow: auto;
  
  height: 135px;
  margin: 0 30px 0;
  grid-gap: 30px;

  

`

export const Card = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1;

  min-width: 250px;
  height: 135px;
  background-color: #ffffff;
  border: 1px solid #DFE0EB;
  border-radius: 8px;
  
  transition: box-shadow ease-in-out 0.2s;

  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  */

  /* & + div {
    margin-left: 30px;
  } */

  a {
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
      /* background-color: ${darken(0.09, '#fff')}; */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-color: tomato;

      a {
        color: tomato;
        
      }
    }



`;