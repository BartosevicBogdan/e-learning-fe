import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../organisms/Form/Form/Form';
import JustifyContent from '../../atoms/JustifyContent/JustifyContent';
import Container from '../../atoms/Container/Container';

const Register = (props) => {
  return (
    <div>
      <JustifyContent>
        <Container>
          <Form variant="reg" />
        </Container>
      </JustifyContent>
    </div>
  );
};

Register.propTypes = {};

export default Register;
