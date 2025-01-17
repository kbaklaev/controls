import { createStore } from 'redux'
import rootReducer from './root-reducer'
import { composeWithDevTools  } from 'redux-devtools-extension/developmentOnly'

const store = createStore(
  rootReducer,
  composeWithDevTools()
)

export default store