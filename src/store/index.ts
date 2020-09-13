import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux'
import {
  install as installLoopStoreEnhancer,
  LoopReducerWithDefinedState,
  StoreCreator
} from 'redux-loop'
import logger from 'redux-logger'

export default function configureStore<S>(
  rootReducer: LoopReducerWithDefinedState<S>,
  preloadedState: S
) {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const enhancers: StoreEnhancer<S> = composeEnhancers(
    installLoopStoreEnhancer(),
    applyMiddleware(logger)
  )

  const createLoopStore: StoreCreator = createStore
  return createLoopStore(
    (state, action: any) => rootReducer(state || preloadedState, action),
    preloadedState,
    enhancers
  )
}
