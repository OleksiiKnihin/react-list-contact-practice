import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/add">Add</StyledNavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
