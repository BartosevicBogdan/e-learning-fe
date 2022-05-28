import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './atomic-design/organisms/Navigation/Navigation';
import { AuthContext } from './providers/auth.contex';

import Login from './atomic-design/pages/Login/Login';
import Register from './atomic-design/pages/Register/Register';
import Home from './atomic-design/pages/Home/Home';
import PrivateRoute from './atomic-design/organisms/PrivateRoute/PrivateRoute';
import CreateLectures from './atomic-design/pages/CreateLectures/CreateLectures';
import Profile from './atomic-design/pages/Profile/Profile';
import Lectures from './atomic-design/pages/Lectures/Lectures';
import Footer from './atomic-design/organisms/Footer/Footer';
import SpaceBetweenColumn from './atomic-design/atoms/SpaceBetweenColumn/SpaceBetweenColumn';

const links = [
  { title: 'Login', link: '/login' },
  { title: 'Register', link: '/register' },
  { title: 'Home', link: '/', private: true },
  { title: 'Profile', link: '/profile/', private: true },
  { title: 'Create lectures', link: '/add-lectures', private: true },
];

const Router = () => {
  const authContext = useContext(AuthContext);
  return (
    <BrowserRouter>
      <SpaceBetweenColumn>
        <Navigation
          links={
            !!authContext.token
              ? links.filter((link) => link.private)
              : links.filter((link) => !link.private)
          }
        />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute redirectPage="/login">
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="profile"
            element={
              <PrivateRoute redirectPage="/login">
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="profile/:userID"
            element={
              <PrivateRoute redirectPage="/login">
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="lectures/:lecturesID"
            element={
              <PrivateRoute redirectPage="/login">
                <Lectures />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-lectures"
            element={
              <PrivateRoute redirectPage="/login">
                <CreateLectures />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer>© CodeAcademy 2022</Footer>
      </SpaceBetweenColumn>
    </BrowserRouter>
  );
};

export default Router;
