import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './../../../providers/auth.contex';

const PrivateRoute = ({ children, redirectPage }) => {
  const authContext = useContext(AuthContext);

  if (localStorage.getItem('token')) {
    // authContext.setToken(localStorage.getItem('token'));
    return children;
  } else {
    return <Navigate to={redirectPage} />;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectPage: PropTypes.string.isRequired,
};

export default PrivateRoute;
