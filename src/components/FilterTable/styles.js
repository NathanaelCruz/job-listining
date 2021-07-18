import styled from "styled-components";

export const FilterTable = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .2rem;
  box-shadow: 0 10px 33px -9px ${props =>  props.theme.colors.darkCyan};
  background-color: ${props => props.theme.colors.filterTablets};
  border-radius: ${props => props.theme.size.borderCard};
`

export const FilterTableErased = styled.button`

  font-weight: 700;
  min-height: 4rem;
  padding: 1.2rem 1.6rem;

  &:hover{
    text-decoration: underline;
    color: ${props => props.theme.colors.primary};
  }
`

export const FilterTableList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`