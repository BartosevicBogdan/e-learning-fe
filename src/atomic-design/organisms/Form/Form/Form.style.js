import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 40%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const Submit = styled.button`
  background: transparent;
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 1rem;
  padding-block: 0.5rem;
  width: 10rem;
  &:hover {
    background: #ccc;
  }
  &:active {
    background: #000;
    color: #fff;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
