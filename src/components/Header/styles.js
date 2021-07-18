import styled from "styled-components";


export const Header = styled.header`
  background-image: url('/images/bg-header-mobile.svg');
  background-color: ${props => props.theme.colors.primary};
  background-size: 100% 100%;
  background-position: center;
  position: relative;
  width: 100%;
  height: 18rem;

  @media(min-width: 767px){
    background-image: url('/images/bg-header-desktop.svg');
    height: 12rem;
  }
`