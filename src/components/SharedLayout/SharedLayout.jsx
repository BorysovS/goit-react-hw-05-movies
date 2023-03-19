import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { StyledLink, Container, Header, NavList} from './SharedLayout.styled';

export const SharedLayout = () => { 
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
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
    </main>
    </Container>
)
}
