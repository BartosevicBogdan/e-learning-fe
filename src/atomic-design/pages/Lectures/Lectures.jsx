import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../atoms/Container/Container';
import JustifyContent from '../../atoms/JustifyContent/JustifyContent';
import Lecture from './../../organisms/Lecture/Lecture';

const Lectures = (props) => {
  let { lecturesID } = useParams();
  // console.log('lecturesID', lecturesID);
  return (
    <div>
      <JustifyContent>
        <Container>
          <Lecture ID={lecturesID} />
        </Container>
      </JustifyContent>
    </div>
  );
};

export default Lectures;
