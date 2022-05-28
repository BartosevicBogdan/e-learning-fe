import React from 'react';
import Container from '../../atoms/Container/Container';
import JustifyContent from '../../atoms/JustifyContent/JustifyContent';
import * as S from './Footer.style';

const Footer = ({ children }) => {
  return (
    <S.Footer>
      <S.Box>{children}</S.Box>
    </S.Footer>
  );
};

export default Footer;
