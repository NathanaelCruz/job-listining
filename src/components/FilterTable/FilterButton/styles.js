import styled from "styled-components";


export const FilterItem = styled.li`
  margin-right: .4rem;
  margin-bottom: .6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.size.borderCard};
  overflow: hidden;
`

export const FilterText = styled.p`
  text-align: center;
  padding: 1rem 1.2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.background};
`

export const FilterButton = styled.button`
  padding: 1rem 1.4rem;
  color: ${props => props.theme.colors.filterTablets};
  background-color: ${props => props.theme.colors.primary};

  &:hover{
    background-color: ${props => props.theme.colors.veryDarkCyan};
  }
`