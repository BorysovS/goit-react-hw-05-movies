import { Outlet } from "react-router-dom";
import { StyledLink, Container, Header, NavList} from './SharedLayout.styled';

const SharedLayout = () => { 
    return (
    <Container>
    <Header>
        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </NavList>
    </Header>
    <main>
        <Outlet />
    </main>
    </Container>
)
}

export default SharedLayout