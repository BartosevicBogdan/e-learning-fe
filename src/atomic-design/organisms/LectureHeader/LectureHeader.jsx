import React from 'react';
import * as S from './LectureHeader.style';
import { useState } from 'react';
import Author from './../../atoms/Author/Author';
import { GrArticle } from 'react-icons/gr';

const LectureHeader = ({ Title, Brief, AuthorID, ID }) => {
  const [title, setTitle] = useState(Title);
  const [brief, setBrief] = useState(Brief);

  return (
    <S.Container>
      <S.Header>
        <S.Title to={`/lectures/${ID}`}>
          <GrArticle /> {title}
        </S.Title>
        <Author ID={AuthorID} />
        <S.Brief>
          <S.BriefTitle>Brief description:</S.BriefTitle>
          <S.BriefBody>{brief}</S.BriefBody>
        </S.Brief>
      </S.Header>
    </S.Container>
  );
};

export default LectureHeader;
