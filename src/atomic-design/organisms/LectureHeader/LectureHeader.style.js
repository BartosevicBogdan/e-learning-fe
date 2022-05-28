import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 3rem 2rem;
  /* border: 1px solid black; */
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 0 1rem #aaa;
`;
export const Header = styled.div``;
export const Title = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  &:visited {
    color: #000;
  }
  &:active {
    color: blue;
  }
`;
export const Brief = styled.div``;
export const BriefTitle = styled.h3``;
export const BriefBody = styled.p``;

export const ToolBar = styled.div`
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 0.075rem solid #aaa;
`;

export const Content = styled.div``;
export const Button = styled.button`
  padding: 0.5rem 0.75rem;
  background: blue;
  color: white;
  border-radius: 0.5rem;
  border: none;
`;
