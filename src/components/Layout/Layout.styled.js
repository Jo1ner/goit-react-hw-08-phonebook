import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
  padding: 30px 20px 30px 20px;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  .auth {
    display: flex;
    gap: 20px;
  }
  .text-name {
    font-size: 28px;
    margin-right: 30px;
    font-style: italic;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #6d7e86;
  background-color: #dddddd;
  font-size: 28px;
  padding: 20px;
  display: inline-flex;
  border: 2px solid #679173;
  border-radius: 10px;
  transition: all 0.3s;

  &.active {
    background-color: #6d7e86;
    color: #dddddd;
  }

  &:hover {
    scale: 1.1;
    transition: all 0.3s;
  }
`;

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
`;
