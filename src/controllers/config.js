// const BaseURL = process.env.REACT_APP_SERVER_URL;
const BaseURL = 'http://localhost:8080';
const RegisterLocation = '/v1/auth/register';
const LoginLocation = '/v1/auth/login';
const LecturesLocation = '/v1/lectures/';
const ProfileLocation = '/v1/profile/';

const PostRequests = {
  Register: `${BaseURL}${RegisterLocation}`,
  Login: `${BaseURL}${LoginLocation}`,
  Lectures: `${BaseURL}${LecturesLocation}create`,
};
const GetRequests = {
  Lectures: `${BaseURL}${LecturesLocation}get`,
  User: `${BaseURL}${ProfileLocation}get/`,
};

export { PostRequests, GetRequests };
