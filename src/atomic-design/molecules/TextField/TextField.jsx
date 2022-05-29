import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './TextField.style';
import { useState, useEffect } from 'react';
import Validation from './../../../validation/validation';

const TextField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  bindTo,
  relatedValue,
  notCheck,
}) => {
  const [error, setError] = useState('');

  useEffect(() => {}, []);
  useEffect(() => {
    !notCheck && check();
  }, [value]);

  const check = () => {
    if (value === '') return setError('');
    if (bindTo === 'password') {
      return value !== relatedValue ? setError('passwords not match') : setError('');
    }
  };

  return (
    <S.Container onMouseMove={() => check()}>
      {label && <S.Label>{label}</S.Label>}
      <S.Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
  placeholder: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  type: 'text',
  placeholder: PropTypes.string.isRequired,
};

export default TextField;
