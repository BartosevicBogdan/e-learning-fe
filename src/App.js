import React from 'react';
import './App.css';
import AuthProvider from './providers/auth.contex';
import Router from './Router';
const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
