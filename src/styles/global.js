import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.veryDarkCyan};
  }

  *{
    font: 500 ${props => props.theme.size.text} ${props => props.theme.fonts.primary};
  }

  #root{
    position: relative;
  }

  button,
  textarea,
  input{
    font: 500 ${props => props.theme.size.text} ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.veryDarkCyan}; 
  }

  button{
    border: none;
    background-color: transparent;
    transition: .3s ease-in-out;
    opacity: .95;
    cursor: pointer;

    &:hover{
      opacity: 1;
    }
  }

  img{
    width: 100%;
  }

  p{
    font: 500 ${props => props.theme.size.text} ${props => props.theme.fonts.primary}; 
  }

  h3{
    font: 700 1.2em ${props => props.theme.fonts.primary}; 
  }

  ul{
    list-style: none;
  }
`