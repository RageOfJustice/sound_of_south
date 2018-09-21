// @flow
import { AsyncStorage } from 'react-native'
import { APP_NAME } from '../constants'

export const setToken = (token: string): Promise<any> =>
  AsyncStorage.setItem(`@${APP_NAME}/token`, token)

export const getToken = (): Promise<string> =>
  AsyncStorage.getItem(`@${APP_NAME}/token`)

export const removeToken = (): Promise<any> =>
  AsyncStorage.removeItem(`@${APP_NAME}/token`)
