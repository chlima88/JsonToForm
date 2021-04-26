import styled from 'styled-components';
//import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;
  height: 45px;

`

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 400px;
  align-items: center;

  a {
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all .4s ease-in-out ;
    &:hover{
      color: tomato;
      border-color: tomato;
    }
    
  }

`

export const Title = styled.div`

  display: flex;
  align-items: center;

  h1 {
    margin-right: 5px;
    margin-left: 5px; 
  }

`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  
  margin-left: 5px;



  img {
    margin-left: 14px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    padding: 1.7px;
    border: 1.5px solid #DFE0EB;
    transition:  box-shadow 0.4s;
        
    &:hover {
      box-shadow:  0 0 10px 0 tomato;
    }
  }

  a {
    font-weight: 600;
    font-size: 14px;
  }


`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 60px;
`

