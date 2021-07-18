import styled from "styled-components";

export const JobWrapper = styled.li`
  width: 100%;
  margin-top: 3.8rem;
  border-radius: ${props => props.theme.size.borderCard};
  box-shadow: 0 10px 33px -7px ${props =>  props.theme.colors.darkCyan};
  position: relative;
  padding: 1.5rem;
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media(min-width: 767px){
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const JobImageWrapper = styled.figure`
  width: 5.6rem;
  height: 5.6rem;
  overflow: hidden;
  border-radius: 50%;
  position: absolute;
  top: -2.8rem;
  left: 1.4rem;
  z-index: 1;

  @media(min-width: 767px){
    width: 8rem;
    height: 8rem;
    position: static;
    margin-right: 1rem;
  }
`

export const JobInfoImageWrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  
  @media(min-width: 767px){
    align-items: center;
    flex-direction: row;
    gap: 1rem;
  }

`

export const JobInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media(min-width: 767px){
    margin-right: 1rem;
  }
`

export const JobCompany = styled.h4`
  font-weight: 700;
  margin-top: 2.8rem;
  color: ${props => props.theme.colors.primary};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
    display: flex;
    justify-content: flex-end;
    align-items: center;

    span{
      border-radius: ${props => props.theme.size.border25};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .6rem 1rem;
      color: #fff;
      font-weight: 700;
      font-size: 1.2rem;

      &:first-child{
        margin-right: .4rem;
      }

      &.is__new{
        background-color: ${props => props.theme.colors.primary};
      }

      &.is__featured{
        background-color: ${props => props.theme.colors.veryDarkCyan};
      }
    }
  }
`

export const JobOffice = styled.h3`
  font-weight: 700;
  margin: 1.2rem 0 1rem;
  width: 100%;
`

export const JobPublish = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid ${props => props.theme.colors.darkCyan};
  margin: 1.4rem 0;
  width: 100%;

  li{
    font-weight: 700;
    color: ${props => props.theme.colors.darkCyan};
    margin-left: .6rem;

    &.publish__dots{
      background-color: ${props => props.theme.colors.darkCyan};
      border-radius: 50%;
      width: .5rem;
      height: .5rem;
    }
  }
`

export const JobTools = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;

  li{

    margin-right: .4rem;
    button{
      background-color: ${props => props.theme.colors.background};
      padding: .8rem;
      font-weight: 700;
      color: ${props => props.theme.colors.primary};
    }
  }
`
