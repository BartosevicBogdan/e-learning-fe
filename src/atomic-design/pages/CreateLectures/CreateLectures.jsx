import React, { useState, useEffect } from 'react';
import * as S from './CreateLectures.style';
import { FaRegEyeSlash, FaRegEye, FaRegPaperPlane } from 'react-icons/fa';
import { postLectures } from '../../../controllers/fetch';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import Container from '../../atoms/Container/Container';
import Editor from '../../organisms/Editor/Editor';
import JustifyContent from '../../atoms/JustifyContent/JustifyContent';
import TextField from '../../molecules/TextField/TextField';
import useInput from './../../../hooks/useInput';

const CreateLectures = (props) => {
  const history = useNavigate();
  const Title = useInput('');
  const Brief = useInput('');
  const [Content, setContent] = useState('');
  const [isHidden, setIsHidden] = useState(false);
  const [Notification, setNotification] = useState(false);
  const [NotificationText, setNotificationText] = useState('');

  const fields = [
    {
      id: 1,
      label: 'Lecture title:',
      type: 'text',
      placeholder: 'Enter title',
      value: Title.value,
      onChange: Title.onChange,
    },
    {
      id: 2,
      label: 'Brief description of lecture:',
      type: 'text',
      placeholder: 'Brief description...',
      value: Brief.value,
      onChange: Brief.onChange,
    },
  ];

  const lecturePush = async () => {
    setNotificationText('Publishing lecture');
    setNotification(true);
    const dataToPass = { Title: Title.value, Brief: Brief.value, Content };
    const response = await postLectures(dataToPass);
    if (response.success) {
      setNotificationText(response.data.msg);
      setTimeout(() => {
        setNotification(false);
        history('/profile');
      });
    } else {
      setNotificationText(response.error);
    }

    // console.log('lecturePush, response', response);
  };

  useEffect(() => {
    // console.log('Content.value', Content);
    // console.log('isHidden', isHidden);
  }, [Content, isHidden]);

  return (
    <div>
      <JustifyContent>
        <Container>
          <h1>Create lecture</h1>
          <S.ButtonsBar>
            {!isHidden && (
              <Button
                isHidden={isHidden}
                icon={<FaRegEyeSlash />}
                onClick={() => setIsHidden((prev) => !prev)}
              >
                Hide editor
              </Button>
            )}
            {isHidden && (
              <Button
                isHidden={isHidden}
                icon={<FaRegEye />}
                onClick={() => setIsHidden((prev) => !prev)}
              >
                Show editor
              </Button>
            )}

            <Button icon={<FaRegPaperPlane />} onClick={() => lecturePush()}>
              Create Lecture
            </Button>
          </S.ButtonsBar>
          {Notification && <h3>{NotificationText}</h3>}
          <S.Grid isHidden={isHidden}>
            <S.Hide isHidden={isHidden}>
              <S.Box isHidden={isHidden}>
                <h2>Editor</h2>
                {fields.map((input) => (
                  <TextField key={input.id} {...input} />
                ))}
                <p>Content:</p>
                <Editor onChange={setContent} initialValue={Content} />
              </S.Box>
            </S.Hide>
            <S.Box isHidden={isHidden}>
              <h2>Live Preview</h2>
              <div dangerouslySetInnerHTML={{ __html: Content }} />
            </S.Box>
          </S.Grid>
        </Container>
      </JustifyContent>
    </div>
  );
};

export default CreateLectures;
