class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._getResponse)
  }

  getUserInfo() {
    return this._request(this._baseUrl + '/users/me', {
      headers: this._headers,
    })
  }

  getCards() {
    return this._request(this._baseUrl + '/cards', {
      headers: this._headers,
    })
  }

  getData() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }

  editUserInfo(body) {
    return this._request(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(body)
    })
  }

  addCard(body) {
    return this._request(this._baseUrl + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(body)
    })
  }

  deleteCard(cardID) {
    return this._request(this._baseUrl + `/cards/${cardID}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  addLike(cardID) {
    return this._request(this._baseUrl + `/cards/${cardID}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
  }

  removeLike(cardID) {
    return this._request(this._baseUrl + `/cards/${cardID}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  toggleLike(cardID, isLiked) {
    if (!isLiked) return this.addLike(cardID);
    return this.removeLike(cardID);
  }

  editAvatar(body) {
    return this._request(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(body)
    })
  }
};

const cohort = 'cohort-63';
const token = '14893dca-a279-433c-a27c-967896487d71';
const baseUrl = `https://mesto.nomoreparties.co/v1/${cohort}`;

const headers = {
  authorization: token,
  'Content-Type': 'application/json',
};

export const api = new Api({
  baseUrl: baseUrl,
  headers: headers,
});