// @flow

import API from '../api'

export const authorize = (
  username: string,
  password: string,
): Promise<string> =>
  fetch(API.SIGNIN, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then(res => Promise.all([res.status, res.json()]))
    .then(([status, json]) => {
      if (status !== 200) {
        json.error = true
      }
      return json
    })
