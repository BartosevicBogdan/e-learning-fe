const BaseURL = process.env.REACT_APP_SERVER_URL;
// const BaseURL = 'http://localhost:8080';
const RegisterLocation = '/v1/auth/register';
const LoginLocation = '/v1/auth/login';
const LecturesLocation = '/v1/lectures/';
const ProfileLocation = '/v1/profile/';
const LikeLocation = '/v1/like/';

const PostRequests = {
  Register: `${BaseURL}${RegisterLocation}`,
  Login: `${BaseURL}${LoginLocation}`,
  Lectures: `${BaseURL}${LecturesLocation}create`,
  LikeInvert: `${BaseURL}${LikeLocation}invert`,
};

const GetRequests = {
  Lectures: `${BaseURL}${LecturesLocation}get`,
  myLectures: `${BaseURL}${LecturesLocation}myLectures`,
  User: `${BaseURL}${ProfileLocation}get/`,
  Like: `${BaseURL}${LikeLocation}get`,
};

const DeleteRequests = {
  Lectures: `${BaseURL}${LecturesLocation}delete`,
};

const UpdateRequests = {
  Profile: `${BaseURL}${ProfileLocation}update`, // dynamic link /update/:id
};

export { PostRequests, GetRequests, UpdateRequests, DeleteRequests };
