import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  padding: 1rem;
  margin-block: 2rem;
  box-shadow: 0 0 1rem #aaa;
  border-radius: 1rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 0.5rem;
  text-decoration: none;
  color: #000;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    background: #aaa;
    color: #fff;
  }
`;
