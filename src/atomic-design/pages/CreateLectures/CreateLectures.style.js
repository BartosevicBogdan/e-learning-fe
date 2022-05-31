import styled from 'styled-components';

export const Grid = styled.div`
  width: 100%;
  display: grid;
  ${({ isHidden }) => {
    return isHidden ? 'grid-template-columns: 1fr;' : 'grid-template-columns: 1fr 1fr;';
  }};
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Hide = styled.div`
  display: ${({ isHidden }) => {
    return isHidden ? 'none' : 'block';
  }};
  width: 100%;
`;

export const Box = styled.div`
  margin-block: 2rem;
  border-left: 0.25rem solid black;
  border-right: 0.25rem solid black;
  padding: 1rem;
`;

export const ButtonsBar = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-block: 1rem;
`;
