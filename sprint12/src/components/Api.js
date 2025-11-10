class Api {
  constructor({ baseUrl, headers }) {
    // corpo do construtor
    this._baseUrl = baseUrl
    this._headers = headers
  }

  _handleServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // se o servidor retornar um erro, rejeite a promessa
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialData() {
    return Promise.all([this.getUser(), this.getInitialCards()])
  }

  // GET https://around-api.pt-br.tripleten-services.com/v1/users/me
  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then((res) => this._handleServerResponse(res));
  }

  // GET https://around-api.pt-br.tripleten-services.com/v1/cards/
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then((res) => this._handleServerResponse(res));
  }

  // PATCH https://around-api.pt-br.tripleten-services.com/v1/users/me
  setUserData({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then((res) => this._handleServerResponse(res));
  }
}

export const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "eb7d2179-f5d8-4a14-9870-224fc1c83b54",
    "Content-Type": "application/json"
  }
});