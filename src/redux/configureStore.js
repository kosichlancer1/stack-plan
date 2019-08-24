import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducer from './modules/stack-plan'

const loggerMiddleware = createLogger()

const sagaMiddleware = createSagaMiddleware()

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(loggerMiddleware, sagaMiddleware)
)(createStore)

const CombinedReducers = combineReducers({
  reducer
})

const configureStore = initialState => ({
  ...createStoreWithMiddleware(CombinedReducers, initialState),
  runSaga: sagaMiddleware.run
})

export default configureStore
