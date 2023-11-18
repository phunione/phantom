import axios from 'axios'
import { BACKEND_URL } from '../../main'
import {
  ADD_DATA_ERROR,
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  GET_ALL_DATA_ERROR,
  GET_ALL_DATA_REQUEST,
  GET_ALL_DATA_SUCCESS,
} from '../constants/data'

export const addDataToTheForm = (details, name) => async (dispatch) => {
  try {
    dispatch({ type: ADD_DATA_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = `${BACKEND_URL}/${name}`

    if (name === 'banker') {
      if (details['rtds'] === undefined) {
        details['rtds'] = false
      }
      if (details['rt'] === undefined) {
        details['rt'] = false
      }
      if (details['forex'] === undefined) {
        details['forex'] = false
      }
    } else if (name === 'company') {
      if (details['isMaharashtra'] === undefined) {
        details['isMaharashtra'] = false
      }
    }

    axios.post(`${url}/add`, details, config)

    dispatch({ type: ADD_DATA_SUCCESS, payload: 'Successfully Added' })
  } catch (e) {
    dispatch({
      type: ADD_DATA_ERROR,
      payload:
        e.response && e.response.data.detail
          ? e.response.data.detail
          : e.message,
    })
  }
}

export const getAllData = (dataFor) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_DATA_REQUEST })

    const url = `${BACKEND_URL}/${dataFor}/all`

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.get(url, config)

    dispatch({ type: GET_ALL_DATA_SUCCESS, payload: data })
  } catch (e) {
    dispatch({
      type: GET_ALL_DATA_ERROR,
      payload:
        e.response && e.response.data.detail
          ? e.response.data.detail
          : e.message,
    })
  }
}
