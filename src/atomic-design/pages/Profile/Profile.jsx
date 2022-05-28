import React from 'react';
import PropTypes from 'prop-types';
import JustifyContent from '../../atoms/JustifyContent/JustifyContent';
import Container from '../../atoms/Container/Container';
import { useParams } from 'react-router-dom';
import User from './../../organisms/User/User';

const Profile = (props) => {
  let { userID: ID } = useParams();
  console.log('userID', ID);
  return (
    <div>
      <JustifyContent>
        <Container>
          <h1>Profile</h1>
          <User ID={ID} />
        </Container>
      </JustifyContent>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
