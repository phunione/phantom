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
import { login, signup } from './redux/reducers/userReducers.js'

const reducer = combineReducers({
  userLogin: login,
  userRegister: signup,

  addData: addDataToTheFormReducer,
  editData: editDataToTheFormReducer,
  allData: getAllDataReducer,
  data: getDataReducer,
  deleteData: deleteDataReducer,
  excelCompanyData: excelCompanyDataReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
const userInfo = userInfoFromStorage ? JSON.parse(userInfoFromStorage) : null

const middleware = [thunk]

const initialState = {
  userLogin: {
    userInfo: userInfo,
  },
  allData: { loading: true, data: [] },
  data: { loading: true, data: {} },
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
