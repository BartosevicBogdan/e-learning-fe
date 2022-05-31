import React, { useState, useEffect } from 'react';
import * as S from './Like.style';
import jwt_decode from 'jwt-decode';
import { getToken } from '../../../utils/helper';
import { getLikes, likeInvert } from '../../../controllers/fetch';
import { FaRegThumbsUp } from 'react-icons/fa';

const Like = ({ LectureID }) => {
  const [Likes, setLikes] = useState({});

  //   console.log('like LectureID', LectureID);
  const { ID: UserID } = jwt_decode(getToken());
  const dataToPass = { LectureID: Number(LectureID), UserID };

  useEffect(() => {
    getLikes(setLikes, dataToPass);
    // console.log('Like LikeLike', Likes);
  });

  return (
    <S.Box>
      <S.Like Clicked={Likes.Clicked} onClick={() => likeInvert(setLikes, dataToPass)}>
        <FaRegThumbsUp />
      </S.Like>
      <S.Count>{Likes.Count}</S.Count>
    </S.Box>
  );
};

export default Like;
