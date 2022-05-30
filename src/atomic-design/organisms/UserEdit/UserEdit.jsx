import React, { useState, useEffect } from 'react';
import { fetchUser, updateProfile as update } from '../../../controllers/fetch';
import * as S from './UserEdit.style';
import { FiMail } from 'react-icons/fa';
import { FiAtSign, FiUser, FiCalendar } from 'react-icons/fi';
import { FaTags } from 'react-icons/fa';
import TextField from '../../molecules/TextField/TextField';
import Button from '../../atoms/Button/Button';
const UserEdit = ({ ID, setNotificationState, setNotificationText }) => {
  const [UserInfo, setUserInfo] = useState([]);
  console.log('ID', ID);
  useEffect(() => {
    fetchUser(setUserInfo, ID);
  }, []);
  useEffect(() => {
    setFirstName(UserInfo.FirstName || '');
    setLastName(UserInfo.LastName || '');
    setDoB(new Date(UserInfo.DoB).toLocaleDateString('en-CA') || null);
    setAvatar(UserInfo.Avatar || '');
  }, [UserInfo]);

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [DoB, setDoB] = useState('');
  const [Avatar, setAvatar] = useState('');

  const setDate = (e) => {
    console.log(e.target.value);
  };
  const updateProfile = async () => {
    setNotificationText('Sending updates');
    setNotificationState(true);

    const response = await update(ID, { FirstName, LastName, DoB, Avatar });
    // console.log('updateProfile, response.success', response);
    if (response.success) {
      setNotificationText('Account updated');
      setTimeout(() => {
        setNotificationState(false);
      }, 3000);
    }
  };

  return (
    <S.Container>
      <S.ImageBox>
        <S.Image src={Avatar} alt="user's avatar" />
      </S.ImageBox>
      <S.InputBox>
        <S.InputBox>
          <S.Label>First name:</S.Label>
          <S.Input type="text" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
        </S.InputBox>
        <S.InputBox>
          <S.Label>Last name:</S.Label>
          <S.Input type="text" value={LastName} onChange={(e) => setLastName(e.target.value)} />
        </S.InputBox>
        <S.InputBox>
          <S.Label>Date of birth:</S.Label>
          <S.Input type="date" onChange={setDate} />
        </S.InputBox>
        <S.InputBox>
          <S.Label>Profile image:</S.Label>
          <S.Input type="text" value={Avatar} onChange={(e) => setAvatar(e.target.value)} />
        </S.InputBox>
        <Button onClick={updateProfile}>Make changes</Button>
      </S.InputBox>
    </S.Container>
  );
};

export default UserEdit;
