import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  width: 255px;
  height: 100vh;
  background: #363740;

`

export const Title = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-arround;
  align-items: center;

  margin: 30px;

  a {
    margin-left: 12px;
    color: #A4A6B3;
    font-size: 19px;

  }

  img{
    height:34px;
    width: 34px;
  }

` 

export const Menu = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    list-style: none;
    margin: 0;

    hr {
      opacity: 0.06;
    }
  
  }

  a {
    color: #DDE2FF;
    display: block;
    padding: 1em 3em;
    transition: all .2s ease-in;

    &:hover{
        background-color: #646672;
        color: tomato;
      }
  }
  
`