export function setToken(token) {
  localStorage.setItem('token', token);
  return true;
}

export function getToken() {
  const token = localStorage.getItem('token');
  return token ? token : undefined;
}
export function removeToken() {
  return localStorage.removeItem('token');
}
