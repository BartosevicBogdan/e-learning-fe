import React from 'react';
import * as S from './LecturesCluster.style';
import { useEffect, useState } from 'react';
import { fetchLectures } from '../../../controllers/fetch';
import LectureHeader from './../LectureHeader/LectureHeader';

const LecturesCluster = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetchLectures(setArray);
  }, []);
  //   console.log('PostRequests', PostRequests);
  return (
    <S.Container>
      {array.map((el) => (
        <LectureHeader {...el} key={el.ID} />
      ))}
    </S.Container>
  );
};

export default LecturesCluster;
