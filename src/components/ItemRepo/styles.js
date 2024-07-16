import styled from "styled-components";

export const ItemContainer = styled.div`
  width:80%;

  h3{
    font-size: 32px;
    color: #FAFAFA;
  }

  p{
    font-size: 16px;
    color: #FAFAFA60;
    margin-bottom:20px;
  }
  
  a.verRepositorio{
    background-color: #0074D9;
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 14px;    
    text-decoration: none;
    font-weight: bold;    
    margin-right: 15px;
  }

  a.verRepositorio:hover{
    background-color: #005DA3;
  }

  a.remover{
    background-color: #FF4136;
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 14px;    
    text-decoration: none;
    font-weight: bold;      
    
  }

  a.remover: hover{
    background-color: #D62C1A;
  }

  hr{
    color: #FAFAFA60;
    margin: 20px 0;
  }
`