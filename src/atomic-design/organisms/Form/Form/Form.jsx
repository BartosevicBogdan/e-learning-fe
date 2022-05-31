import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './Form.style';
import TextField from './../../../molecules/TextField/TextField';
import useInput from './../../../../hooks/useInput';
import { loginFetch, registerFetch } from '../../../../controllers/fetch';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../../../utils/helper';
import { AuthContext } from '../../../../providers/auth.contex';

const Form = ({ variant }) => {
  const authContext = useContext(AuthContext);
  const history = useNavigate();

  const email = useInput('');
  const password = useInput('');
  const password2 = useInput('');

  const [isDisabled, setIsDisabled] = useState(true);
  const [submitHandlerState, setSubmitHandlerState] = useState(false);
  const [submitHandlerText, setSubmitHandlerText] = useState('');

  //#region Fields config

  const regFields = [
    {
      id: 1,
      label: 'Email:',
      type: 'email',
      placeholder: 'Enter email',
      value: email.value,
      onChange: email.onChange,
    },
    {
      id: 2,
      label: 'Password:',
      type: 'password',
      placeholder: 'Enter password',
      value: password.value,
      onChange: password.onChange,
    },
    {
      id: 3,
      // label: 'Password:',
      type: 'password',
      placeholder: 'Re-enter password',
      value: password2.value,
      bindTo: 'password',
      relatedValue: password.value,
      onChange: password2.onChange,
    },
  ];

  const logFields = [
    {
      id: 1,
      label: 'Email:',
      type: 'email',
      placeholder: 'Enter email',
      value: email.value,
      onChange: email.onChange,
    },
    {
      id: 2,
      label: 'Password:',
      type: 'password',
      placeholder: 'Enter password',
      value: password.value,
      onChange: password.onChange,
    },
  ];

  //#endregion

  useEffect(() => {
    setIsDisabled(true);
  }, []);

  useEffect(() => {
    console.log('value updates');
    submitData();
  }, [email.value, password.value, password2.value]);

  const submitHandler = () => {
    const dataToPass = submitData();
    console.log('dataToPass', dataToPass);
    dataToPass && variant === 'reg' && registerHandler(dataToPass);
    dataToPass && variant === 'log' && loginHandler(dataToPass);
  };

  const submitData = () => {
    if (variant === 'reg') {
      console.log('tu tu tu');
      if (password.value !== '' && password2.value !== '' && password.value === password2.value) {
        console.log('as cia');
        setIsDisabled(false);
        return {
          Email: email.value,
          Password: password.value,
        };
      } else {
        console.log('ta ta ta');
        setIsDisabled(true);
        return false;
      }
    }
    if (variant === 'log') {
      console.log('tu tu tu');
      if (password.value !== '') {
        console.log('as cia');
        setIsDisabled(false);
        return {
          Email: email.value,
          Password: password.value,
        };
      } else {
        console.log('ta ta ta');
        setIsDisabled(true);
        return false;
      }
    }
  };

  const registerHandler = async (dataToSend) => {
    setSubmitHandlerState(true);
    setSubmitHandlerText('Trying to sign up');
    const response = await registerFetch(dataToSend);
    if (response.success === true && response.data.affectedRows === 1) {
      setSubmitHandlerText('User created succesfully');
      setTimeout(() => {
        history('/login');
      }, 1500);
    } else {
      setSubmitHandlerText('Something went wrong');
    }
  };
  const loginHandler = async (dataToSend) => {
    setSubmitHandlerState(true);
    setSubmitHandlerText('Trying to sign in');
    const response = await loginFetch(dataToSend);
    if (response.success === true && response.data.token) {
      setSubmitHandlerText('You loged in succesfully');
      setToken(response.data.token);
      authContext.setToken(response.data.token);
      setTimeout(() => {
        history('/');
      }, 1500);
    } else {
      setSubmitHandlerText('Something went wrong');
    }
  };

  //#region Render variants of UI elements

  const renderFields = () => {
    switch (variant) {
      case 'reg':
        return regFields.map((e) => <TextField key={e.id} {...e} />);
      case 'log':
      case 'edit':
      default:
        return logFields.map((e) => <TextField key={e.id} {...e} />);
    }
  };

  const renderTitle = () => {
    switch (variant) {
      case 'reg':
        return <h2>Registration form</h2>;
      case 'log':
        return <h2>Sign in form</h2>;
      case 'edit':
        return <h2>Edit fields</h2>;
      default:
        break;
    }
  };

  const buttonText = () => {
    switch (variant) {
      case 'reg':
        return 'Register';
      case 'log':
        return 'Sign in';
      case 'edit':
        return 'Save';
      default:
        break;
    }
  };

  //#endregion

  return (
    <S.Container>
      {renderTitle()}
      {submitHandlerState && <h3>{submitHandlerText} </h3>}
      {renderFields()}
      <S.Submit disabled={isDisabled} onClick={submitHandler}>
        {buttonText()}
      </S.Submit>
    </S.Container>
  );
};

Form.propTypes = {
  variant: PropTypes.oneOf(['reg', 'log', 'edit']),
};

export default Form;
