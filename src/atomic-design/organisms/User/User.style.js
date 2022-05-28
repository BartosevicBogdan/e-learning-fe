import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 2rem;
  border: 0.25rem solid black;
  display: flex;
  gap: 2rem;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ImageBox = styled.div`
  max-width: 10rem;
  aspect-ratio: 1/1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Box = styled.div``;
