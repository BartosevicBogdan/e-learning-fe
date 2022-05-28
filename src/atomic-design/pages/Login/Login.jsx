import React from 'react';
import PropTypes from 'prop-types';
import Form from './../../organisms/Form/Form/Form';
import JustifyContent from '../../atoms/JustifyContent/JustifyContent';
import Container from '../../atoms/Container/Container';

const Login = (props) => {
  return (
    <div>
      <JustifyContent>
        <Container>
          <Form variant="log" />
        </Container>
      </JustifyContent>
    </div>
  );
};

Login.propTypes = {};

export default Login;
