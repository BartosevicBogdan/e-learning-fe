import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, icon, onClick, isHidden }) => {
  return (
    <S.Button isHidden={isHidden} onClick={onClick}>
      {icon} {children}
    </S.Button>
  );
};

Button.propTypes = {};

export default Button;
