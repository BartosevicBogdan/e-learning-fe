import React from 'react';
import * as S from './Like.style';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';
import { getToken } from '../../../utils/helper';
import { getLikes, likeInvert } from '../../../controllers/fetch';
import { useEffect } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';

const Like = ({ LectureID }) => {
  const [Likes, setLikes] = useState({});

  //   console.log('like LectureID', LectureID);
  const { ID: UserID } = jwt_decode(getToken());
  const dataToPass = { LectureID: Number(LectureID), UserID };

  const [isLiked, setIsLiked] = useState(false);
  const [Count, setCount] = useState(0);

  useEffect(() => {
    getLikes(setLikes, dataToPass);
    console.log('Like LikeLike', Likes);
  }, []);

  //   useEffect(() => {
  //     console.log('useEffect Likes', Likes);
  //     console.log('useEffect Likes.data', Likes.data);
  //     let { Clicked, Count } = Likes;
  //     setIsLiked(Clicked);
  //     setCount(Count);
  //   }, [Likes]);

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
