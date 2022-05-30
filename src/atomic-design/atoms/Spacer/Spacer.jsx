import React, { Children } from 'react';
import * as S from './Spacer.style';

const Spacer = ({ height, Children }) => {
  return <S.Spacer Height={height}>{Children}</S.Spacer>;
};

export default Spacer;
