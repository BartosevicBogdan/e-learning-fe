import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Lecture.style';
import { useEffect, useState } from 'react';
import Author from './../../atoms/Author/Author';
import { GrArticle } from 'react-icons/gr';
import { MdOutlineDescription } from 'react-icons/md';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { deleteLecture, fetchLectureById } from '../../../controllers/fetch';
import jwt_decode from 'jwt-decode';
import { getToken } from '../../../utils/helper';
import Like from '../../molecules/Like/Like';
import { useNavigate } from 'react-router-dom';

const Lecture = ({ ID, AuthorID }) => {
  const [Info, setInfo] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    fetchLectureById(setInfo, ID);
  }, []);
  useEffect(() => {
    setTitle(Info.Title);
    setContent(Info.Content);
  }, [Info]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { ID: jwtID } = jwt_decode(getToken());

  const deleteHandler = async (ID) => {
    const response = await deleteLecture(ID);
    if (response.success === true) {
      history('/profile');
    }
  };
  return (
    <S.Container>
      <S.Header>
        <S.Row>
          <S.Title>
            <GrArticle /> {title}
          </S.Title>
          {Info.AuthorID === jwtID && (
            <S.Icon>
              <RiDeleteBin2Fill onClick={() => deleteHandler(ID)} />
            </S.Icon>
          )}
        </S.Row>
        <Author ID={AuthorID} />
      </S.Header>
      <S.Content>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </S.Content>
      <S.ToolBar>
        <Like LectureID={ID} />
      </S.ToolBar>
    </S.Container>
  );
};

Lecture.propTypes = {};

export default Lecture;
