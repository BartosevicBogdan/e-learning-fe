import { useParams } from 'react-router-dom';
import Button from './../../atoms/Button/Button';
import Container from '../../atoms/Container/Container';
import JustifyContent from '../../atoms/JustifyContent/JustifyContent';
import PropTypes from 'prop-types';
import React from 'react';
import User from './../../organisms/User/User';
import UserEdit from './../../organisms/UserEdit/UserEdit';
import * as S from './Profile.style';
import { useEffect, useState } from 'react';
import { myLectures } from '../../../controllers/fetch';
import LectureHeader from '../../organisms/LectureHeader/LectureHeader';

const Profile = (props) => {
  let { userID: ID } = useParams();
  const [EditMode, setEditMode] = useState(false);
  // console.log('userID', ID);
  const [Lectures, setLectures] = useState([]);
  useEffect(() => {
    myLectures(setLectures, ID);
    // console.log('Lectures', Lectures);
  }, []);
  return (
    <div>
      <JustifyContent>
        <Container>
          <S.Row>
            <h1>Profile</h1>
            <S.Fix>
              <Button onClick={() => setEditMode((prev) => !prev)}>Edit</Button>
            </S.Fix>
          </S.Row>
          {!EditMode && <User ID={ID} />}
          {EditMode && <UserEdit ID={ID} />}

          <h1>Lectures:</h1>

          {Lectures ? (
            <S.Box>
              {Lectures.map((el) => (
                <LectureHeader key={el.ID} {...el} />
              ))}
            </S.Box>
          ) : (
            <S.Box>
              <p>You dont have lectures yet</p>
            </S.Box>
          )}
        </Container>
      </JustifyContent>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
