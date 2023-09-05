import { styled } from "styled-components";
import { NavLink } from "react-router-dom"

export const NavBar = styled.nav`
display: flex;
gap: 15px;
font-weight: 600;
font-size: 22px;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
padding: 15px 15px;`

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;