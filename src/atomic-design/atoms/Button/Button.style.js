import styled from 'styled-components';

export const Button = styled.button`
  font-size: 0.9rem;
  font-weight: 600;
  padding-block: 0.5rem;
  width: 10rem;
  border-radius: 1rem;
  background: transparent;
  &:hover {
    background: #ccc;
  }
  &:active {
    background: #000;
    color: #fff;
  }
`;
