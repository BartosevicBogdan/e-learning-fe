import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-block: 0.5rem;
`;
export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
`;

export const Error = styled.label`
  color: red;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background: transparent;
`;
