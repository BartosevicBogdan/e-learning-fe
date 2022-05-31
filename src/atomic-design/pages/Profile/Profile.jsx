import React, { useEffect, useState } from 'react';
import * as S from './Profile.style';
import { getToken } from '../../../utils/helper';
import { myLectures } from '../../../controllers/fetch';
import { useParams } from 'react-router-dom';
import Button from './../../atoms/Button/Button';
import Container from '../../atoms/Container/Container';
import JustifyContent from '../../atoms/JustifyContent/JustifyContent';
import jwt_decode from 'jwt-decode';
import LectureHeader from '../../organisms/LectureHeader/LectureHeader';
import User from './../../organisms/User/User';
import UserEdit from './../../organisms/UserEdit/UserEdit';

const Profile = (props) => {
  let { userID: ID } = useParams();
  const { ID: jwtID } = jwt_decode(getToken());

  console.log('Profile jwtID', jwtID);

  const [EditMode, setEditMode] = useState(false);
  // console.log('userID', ID);
  const [Lectures, setLectures] = useState([]);

  const [NotificationState, setNotificationState] = useState(false);
  const [NotificationText, setNotificationText] = useState('');

  useEffect(() => {
    myLectures(setLectures, ID);
    // console.log('Lectures', Lectures);
  }, []);

  const editButton = () => <Button onClick={() => setEditMode((prev) => !prev)}>Edit</Button>;
  return (
    <div>
      <JustifyContent>
        <Container>
          <S.Row>
            <h1>Profile</h1>
            <S.Fix>{(ID === undefined || jwtID === Number(ID)) && editButton()}</S.Fix>
          </S.Row>
          {NotificationState && <h3>{NotificationText}</h3>}
          {!EditMode && <User ID={ID} />}
          {EditMode && (
            <UserEdit
              ID={ID}
              setNotificationState={setNotificationState}
              setNotificationText={setNotificationText}
            />
          )}
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

export default Profile;
