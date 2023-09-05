import { NavBar, StyledLink} from "./Header.styled"

const Header = () => {

    return (
            <NavBar>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/movies">Movies</StyledLink>
            </NavBar>
)}

export default Header