import { createAction } from 'typesafe-actions'

export const setUsername = createAction('SET_USER_NAME', action => {
  return (username: string) => action({ username })
})

export const setRetroId = createAction('SET_RETRO_ID', action => {
  return (retroId: string) => action({ retroId })
})
