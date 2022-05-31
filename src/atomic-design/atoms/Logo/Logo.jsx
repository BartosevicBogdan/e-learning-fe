import React from 'react';
import * as S from './Logo.style';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const history = useNavigate();
  return (
    <S.Container
      onClick={() => {
        history('/');
      }}
    >
      <S.Icon src="./education-10.svg" alt="page logo" />
      <S.Text>Learning-Platform</S.Text>
    </S.Container>
  );
};

export default Logo;
