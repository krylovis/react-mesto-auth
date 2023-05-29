const BASE_URL = 'https://auth.nomoreparties.co';

const headers = {
  'Content-Type': 'application/json'
};

const defaultOptions = (password, email) => {
  return {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ password, email }),
  }
};

const request = (url, options) => {
  return fetch(`${BASE_URL}/${url}`, options).then(getResponse)
};

const getResponse = (res) => {
  if (res.ok) return res.json();
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = ({ password, email }) => {
  return request('signup', defaultOptions(password, email))
};

export const authorize = ({ password, email }) => {
  return request('signin', defaultOptions(password, email))
};

export const tokenVerification = (token) => {
  return request('users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
};