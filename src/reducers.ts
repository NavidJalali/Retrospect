import { Cmd, combineReducers, loop, LoopReducer } from 'redux-loop'
import { getType } from 'typesafe-actions'
import { RootAction } from './types/action'
import * as actions from './actions'

const usernameReducer: LoopReducer<string | undefined, RootAction> = (
  state: string | undefined,
  action: RootAction
) => {
  switch (action.type) {
    case getType(actions.setUsername):
      return action.payload.username
    default:
      return state
  }
}

const retroIdReducer: LoopReducer<string | undefined, RootAction> = (
  state: string | undefined,
  action: RootAction
) => {
  switch (action.type) {
    case getType(actions.setRetroId):
      return action.payload.retroId
    default:
      return state
  }
}

const rootReducer = combineReducers({
  username: usernameReducer,
  retroId: retroIdReducer
})

export default rootReducer
