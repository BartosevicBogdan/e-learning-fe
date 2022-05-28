import React from 'react';
import PropTypes from 'prop-types';
import JustifyContent from '../../atoms/JustifyContent/JustifyContent';
import Container from '../../atoms/Container/Container';
import LecturesCluster from '../../organisms/LecturesCluster/LecturesCluster';
import { useParams } from 'react-router-dom';
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

Lectures.propTypes = {};

export default Lectures;
