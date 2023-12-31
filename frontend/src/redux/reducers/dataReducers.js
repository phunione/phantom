import {
  ADD_DATA_ERROR,
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  DELETE_DATA_ERROR,
  DELETE_DATA_REQUEST,
  DELETE_DATA_SUCCESS,
  EDIT_DATA_ERROR,
  EDIT_DATA_REQUEST,
  EDIT_DATA_SUCCESS,
  GET_ALL_DATA_ERROR,
  GET_ALL_DATA_REQUEST,
  GET_ALL_DATA_SUCCESS,
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_EXCEL_COMPANY_DATA_ERROR,
  GET_EXCEL_COMPANY_DATA_REQUEST,
  GET_EXCEL_COMPANY_DATA_SUCCESS,
} from '../constants/data'

export const addDataToTheFormReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_DATA_REQUEST:
      return { loading: true }
    case ADD_DATA_SUCCESS:
      return { loading: false, formData: action.payload }
    case ADD_DATA_ERROR:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const editDataToTheFormReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_DATA_REQUEST:
      return { loading: true }
    case EDIT_DATA_SUCCESS:
      return { loading: false, formData: action.payload }
    case EDIT_DATA_ERROR:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getAllDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_DATA_REQUEST:
      return { loading: true }
    case GET_ALL_DATA_SUCCESS:
      return { loading: false, data: action.payload }
    case GET_ALL_DATA_ERROR:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return { loading: true }
    case GET_DATA_SUCCESS:
      return { loading: false, data: action.payload }
    case GET_DATA_ERROR:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const deleteDataReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_DATA_REQUEST:
      return { loading: true }
    case DELETE_DATA_SUCCESS:
      return { loading: false, data: action.payload, success: true }
    case DELETE_DATA_ERROR:
      return { loading: false, error: action.payload, success: false }
    default:
      return state
  }
}

export const excelCompanyDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EXCEL_COMPANY_DATA_REQUEST:
      return { loading: true }
    case GET_EXCEL_COMPANY_DATA_SUCCESS:
      return { loading: false, data: action.payload, success: true }
    case GET_EXCEL_COMPANY_DATA_ERROR:
      return { loading: false, error: action.payload, success: false }
    default:
      return state
  }
}
