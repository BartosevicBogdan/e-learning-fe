import styled from 'styled-components';

const WidthCondition = `
  width: 100%;
`;
const WidthCondition2 = `
 width:50%;
`;

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
  /* display: flex;
  justify-content: space-between; */
  /* gap: 3rem; */
`;

export const Hide = styled.div`
  display: ${({ isHidden }) => {
    return isHidden ? 'none' : 'block';
  }};
  width: 100%;
`;

export const Box = styled.div`
  /* ${({ isHidden }) => {
    return isHidden === true ? WidthCondition : WidthCondition2;
  }}; */
  /* ${({ isHidden }) => {
    return isHidden && 'width: 100%;';
  }}; */

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
