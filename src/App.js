import React from 'react'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  watchRequestStackPlan,
  watchUpdateSpaceRequest
} from './redux/modules/stack-plan'

import { MainPage } from './components/main-page'

const store = configureStore()

store.runSaga(watchRequestStackPlan)
store.runSaga(watchUpdateSpaceRequest)

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
    background-color: #e5e5e5;
  }
`

export const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ToastContainer />
    <MainPage />
  </Provider>
)
