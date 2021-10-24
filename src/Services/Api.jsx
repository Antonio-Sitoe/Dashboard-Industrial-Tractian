const URL_BASE = 'https://my-json-server.typicode.com/tractian/fake-api';

export function GET_USERS() {
  return {
    url: `${URL_BASE}/users`,
    options: {
      method: 'GET',
    },
  };
}
export function GET_USER(id) {
  return {
    url: `${URL_BASE}/users/${id}`,
    options: {
      method: 'GET',
    },
  };
}
export function GET_UNIT(id) {
  const dados = {
    url: `${URL_BASE}/units/${id}`,
    options: {
      method: 'GET',
    },
  };

  return fetch(dados.url, dados.options);
}
export function POST_USERS(body) {
  return {
    url: `${URL_BASE}/users`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_COMPANY() {
  return {
    url: `${URL_BASE}/companies/1`,
    options: {
      method: 'GET',
    },
  };
}
export function GET_ASSET() {
  return {
    url: `${URL_BASE}/assets/4`,
    options: {
      method: 'GET',
    },
  };
}

export function GET_UNITS() {
  return {
    url: `${URL_BASE}/units`,
    options: {
      method: 'GET',
    },
  };
}
