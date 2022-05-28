import React from 'react';
import PropTypes from 'prop-types';
import JustifyContent from '../../atoms/JustifyContent/JustifyContent';
import Container from '../../atoms/Container/Container';
import LecturesCluster from './../../organisms/LecturesCluster/LecturesCluster';

const Home = (props) => {
  return (
    <div>
      <JustifyContent>
        <Container>
          <h1>Lectures</h1>
          <LecturesCluster />
        </Container>
      </JustifyContent>
    </div>
  );
};

Home.propTypes = {};

export default Home;
