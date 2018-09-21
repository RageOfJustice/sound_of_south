// @flow
import API from '../api'

export const sendMessage = (topic: string, message: string): Promise<any> =>
  fetch(API.MESSAGE, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      topic,
      message,
    }),
  })
    .then(res => Promise.all([res.status, res.json()]))
    .then(([status, json]) => {
      if (status !== 200) {
        json.error = true
      }
      return json
    })
