import React, { useState, useEffect } from 'react';
import { fetchUser } from '../../../controllers/fetch';
import * as S from './User.style';
import { FiMail } from 'react-icons/fa';
import { FiAtSign, FiUser, FiCalendar } from 'react-icons/fi';
import { FaTags } from 'react-icons/fa';
const User = ({ ID }) => {
  const [UserInfo, setUserInfo] = useState([]);
  console.log('ID', ID);
  useEffect(() => {
    fetchUser(setUserInfo, ID);
    console.log('UserInfo', UserInfo);
  }, []);
  useEffect(() => {
    console.log('UserInfo', UserInfo);
    // console.log('UserInfo.data.Email', UserInfo.data.Email);
    setEmail(UserInfo.Email || 'not entered');
    setFirstName(UserInfo.FirstName || 'not entered');
    setLastName(UserInfo.LastName || 'not entered');
    setDoB(new Date(UserInfo.DoB).toLocaleDateString('en-CA') || 'not entered');
    setAvatar(UserInfo.Avatar || '/avatar.jpg');
  }, [UserInfo]);

  const [Email, setEmail] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [DoB, setDoB] = useState('');
  const [Avatar, setAvatar] = useState('');

  return (
    <S.Container>
      <S.ImageBox>
        <S.Image src={Avatar} alt="user's avatar" />
      </S.ImageBox>
      <S.Box>
        <p>
          <FaTags /> {FirstName} {LastName}
        </p>
        <p>
          <FiUser /> {FirstName} {LastName}
        </p>
        <p>
          <FiAtSign /> {Email}
        </p>
        <p>
          <FiCalendar /> {DoB}
        </p>
      </S.Box>
    </S.Container>
  );
};

export default User;
