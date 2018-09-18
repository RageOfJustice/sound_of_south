// @flow
import R from 'ramda'

export const buildActionName = R.curry(
  (appName: string, actionEntity: string, actionName: string): string =>
    [appName, actionEntity, actionName].join('/'),
)
