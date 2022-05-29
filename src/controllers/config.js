const BaseURL = process.env.REACT_APP_SERVER_URL;
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
  myLectures: `${BaseURL}${LecturesLocation}myLectures`,
  User: `${BaseURL}${ProfileLocation}get/`,
};
const UpdateRequests = {
  Profile: `${BaseURL}${ProfileLocation}update`, // dynamic link /update/:id
};

export { PostRequests, GetRequests, UpdateRequests };
