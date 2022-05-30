import styled from 'styled-components';

const basis = `
    border-radius: 1rem;
    border: 1px solid blue;
`;

const liked = `
    background: blue;
    color: white;
    &:hover{
        background:white;
        color:blue;
    }
    &:active{
       background:white;
        color:blue;
        border:1px solid white; 
    }
`;
const notLiked = `
    background: white;
    color:blue;
        &:hover{
        background:blue;
        color:white;
    }
    &:active{
       background:blue;
        color:white;
        border:1px solid blue; 
    }
`;

export const Like = styled.button`
  display: block;
  padding: 0.3rem 1rem;
  ${basis};
  ${({ Clicked }) => {
    if (Clicked === undefined || Clicked === false) {
      return notLiked;
    } else {
      return liked;
    }
  }}
  cursor: pointer;
`;
export const Count = styled.p`
  padding-left: 1rem;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;
