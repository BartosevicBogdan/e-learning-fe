import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Lecture.style';
import { useEffect, useState } from 'react';
import Author from './../../atoms/Author/Author';
import { GrArticle } from 'react-icons/gr';
import { MdOutlineDescription } from 'react-icons/md';
import { fetchLectureById } from '../../../controllers/fetch';

const Lecture = ({ ID, AuthorID }) => {
  const [Info, setInfo] = useState([]);
  useEffect(() => {
    fetchLectureById(setInfo, ID);
  }, []);
  useEffect(() => {
    setTitle(Info.Title);
    setContent(Info.Content);
  }, [Info]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <GrArticle /> {title}
        </S.Title>
        <Author ID={AuthorID} />
      </S.Header>
      <S.Content>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </S.Content>
    </S.Container>
  );
};

Lecture.propTypes = {};

export default Lecture;
