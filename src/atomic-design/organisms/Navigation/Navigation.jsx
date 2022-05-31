import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.style';
// import Logo from "../../assets/images/logo.svg";
import { Link } from 'react-router-dom';
import Logo from '../../atoms/Logo/Logo';
import Container from '../../atoms/Container/Container';
import { AuthContext } from '../../../providers/auth.contex';
import { setToken, removeToken } from './../../../utils/helper';
import JustifyContent from '../../atoms/JustifyContent/JustifyContent';
import Button from '../../atoms/Button/Button';

const Navigation = ({ links }) => {
  const authContext = useContext(AuthContext);
  return (
    <JustifyContent>
      <Container>
        <S.Header>
          <S.Container>
            <Logo />
            <S.Nav>
              {links &&
                links.map((link) => (
                  <S.StyledLink key={link.title} to={link.link}>
                    {link.title}
                  </S.StyledLink>
                ))}
            </S.Nav>
            {!!authContext.token && (
              <Button
                onClick={() => {
                  removeToken();
                  authContext.setToken('');
                }}
              >
                Log out
              </Button>
            )}
          </S.Container>
        </S.Header>
      </Container>
    </JustifyContent>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navigation;
