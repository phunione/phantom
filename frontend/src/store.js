import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  addDataToTheFormReducer,
  deleteDataReducer,
  editDataToTheFormReducer,
  excelCompanyDataReducer,
  getAllDataReducer,
  getDataReducer,
} from './redux/reducers/dataReducers'

const reducer = combineReducers({
  addData: addDataToTheFormReducer,
  editData: editDataToTheFormReducer,
  allData: getAllDataReducer,
  data: getDataReducer,
  deleteData: deleteDataReducer,
  excelCompanyData: excelCompanyDataReducer,
})

const middleware = [thunk]

const initialState = {
  allData: { loading: true, data: [] },
  data: { loading: true, data: {} },
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
