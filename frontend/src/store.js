import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  addDataToTheFormReducer,
  getAllDataReducer,
} from './redux/reducers/dataReducers'

const reducer = combineReducers({
  addData: addDataToTheFormReducer,
  allData: getAllDataReducer,
})

const middleware = [thunk]

const initialState = {
  allData: { loading: true, data: [] },
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
