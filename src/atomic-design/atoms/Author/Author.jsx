import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchUser } from '../../../controllers/fetch';
import * as S from './Author.style';
import { FaUserSecret } from 'react-icons/fa';

const Author = ({ ID }) => {
  const [AuthorName, setAuthorName] = useState('');
  useEffect(() => {
    fetchUser(setAuthorName, ID);
  }, []);

  const Pseudonym = [
    'rat',
    'cat',
    'dog',
    'fish',
    'human',
    'lion',
    'tiger',
    'snake',
    'horse',
    'shark',
    'wolf',
    'bear',
    ' koala',
    'red panda',
    'giraffe',
    'turtle',
    'deer',
    'sloth',
    'cheetah',
    'goat',
    'frog',
  ];
  const pseudonym = () => Pseudonym[Math.floor(Math.random() * Pseudonym.length)];
  const icon = () => <FaUserSecret />;
  const userConfirm = () =>
    AuthorName.FirstName === null && AuthorName.LastName === null ? true : false;
  const isUser = userConfirm() ? (
    <>
      <FaUserSecret /> {pseudonym()}
    </>
  ) : (
    <>{`Author: ${AuthorName.FirstName} ${AuthorName.LastName}`}</>
  );

  return <S.StyledLink to={`/profile/${ID}`}>{isUser}</S.StyledLink>;
};

export default Author;
