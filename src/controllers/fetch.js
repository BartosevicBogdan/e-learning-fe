import { getToken } from '../utils/helper';
import { GetRequests, PostRequests, UpdateRequests } from './config';

const registerFetch = async (dataToPass) => {
  const data = await fetch(PostRequests.Register, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToPass),
  });
  const dataInJs = await data.json();
  console.log(dataInJs);
  return dataInJs;
};
const loginFetch = async (dataToPass) => {
  const data = await fetch(PostRequests.Login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToPass),
  });
  const dataInJs = await data.json();
  console.log(dataInJs);
  return dataInJs;
};

const fetchLectures = async (setState) => {
  console.log('GetRequests.Lectures', GetRequests.Lectures);
  const data = await fetch(GetRequests.Lectures, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const dataInJs = await data.json();
  console.log(dataInJs);
  setState(dataInJs.data);
};
const fetchLectureById = async (setState, ID) => {
  console.log('GetRequests.Lectures', GetRequests.Lectures);
  const data = await fetch(`${GetRequests.Lectures}/${ID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const dataInJs = await data.json();
  // console.log('dataInJs.data[0]', dataInJs.data[0]);
  // console.log('dataInJs.data', dataInJs.data);
  setState(dataInJs.data[0]);
};
const fetchUser = async (setState, dynamicID) => {
  console.log('GetRequests.Lectures', GetRequests.User);
  const data = await fetch(`${GetRequests.User}${dynamicID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const dataInJs = await data.json();
  console.log(dataInJs);
  setState(dataInJs.data);
};
const myLectures = async (setState, ID) => {
  console.log('GetRequests.Lectures', GetRequests.myLectures);
  const data = await fetch(`${GetRequests.myLectures}/${ID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const dataInJs = await data.json();
  console.log(dataInJs);
  setState(dataInJs.data);
};

const postLectures = async (dataToPass) => {
  console.log('GetRequests.Lectures', PostRequests.Lectures);
  const data = await fetch(PostRequests.Lectures, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(dataToPass),
  });
  const dataInJs = await data.json();
  console.log(dataInJs);
  return dataInJs.data;
};
const updateProfile = async (ID, dataToPass) => {
  console.log('GetRequests.Lectures', UpdateRequests.Profile);
  const data = await fetch(`${UpdateRequests.Profile}/${ID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(dataToPass),
  });
  const dataInJs = await data.json();
  console.log(dataInJs);
  return dataInJs.data;
};

export {
  fetchLectureById,
  fetchLectures,
  fetchUser,
  loginFetch,
  myLectures,
  postLectures,
  registerFetch,
  updateProfile,
};
