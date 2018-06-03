import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import history from './utils/historyUtils'
import App from './components/App'
import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
