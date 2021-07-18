import styled from "styled-components";

export const ListWrapper = styled.main`
  width: 90%;
  position: absolute;
  top: 14rem;
  max-width: 1200px;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 90;


  @media(min-width: 767px){
    top: 8rem;
  }
`

export const ListJobs = styled.ul`
  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
`