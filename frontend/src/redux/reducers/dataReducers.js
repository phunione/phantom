import {
  ADD_DATA_ERROR,
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
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
