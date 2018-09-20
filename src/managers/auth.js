// @flow
import { delay } from 'redux-saga'

// export const authorize = (login: string, password: string): string => {
//     // implemetation
// }

export const authorize = (login, password) => delay(1000).then(() => true)
