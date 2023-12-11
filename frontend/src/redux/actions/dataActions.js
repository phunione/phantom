import axios from 'axios'
import { BACKEND_URL } from '../../main'
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
} from '../constants/data'

export const addDataToTheForm = (details, name) => async (dispatch) => {
  try {
    dispatch({ type: ADD_DATA_REQUEST })

    let config = {
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
      config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      if (details['isMaharashtra'] === undefined) {
        details['isMaharashtra'] = false
      }

      const body = new FormData()

      body.append('name', details['name'])
      body.append('pan_no', details['pan_no'])
      body.append('pan_dob', details['pan_dob'])
      body.append('company_status', details['company_status'])
      body.append('querry_filled', details['querry_filled'])
      body.append('address', details['address'])
      body.append('isMaharashtra', details['isMaharashtra'])
      body.append('location', details['location'])
      body.append('actor_ids', JSON.stringify(details['actor_ids']))
      body.append('ids', JSON.stringify(details['ids']))
      body.append('pdfs', details['pdfs'])
      body.append('type', details['type'])

      details = body
    }

    await axios.post(`${url}/add`, details, config)

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

export const editDataForm = (id, details, name) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_DATA_REQUEST })

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

    await axios.put(`${url}/edit/${id}`, details, config)

    dispatch({ type: EDIT_DATA_SUCCESS, payload: 'Successfully Edited' })
  } catch (e) {
    dispatch({
      type: EDIT_DATA_ERROR,
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

    return data
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

export const getData = (dataFor, id) => async (dispatch) => {
  try {
    dispatch({ type: GET_DATA_REQUEST })

    const url = `${BACKEND_URL}/${dataFor}/${id}`

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.get(url, config)

    dispatch({ type: GET_DATA_SUCCESS, payload: data })
  } catch (e) {
    dispatch({
      type: GET_DATA_ERROR,
      payload:
        e.response && e.response.data.detail
          ? e.response.data.detail
          : e.message,
    })
  }
}

export const deleteData = (path, id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_DATA_REQUEST })

    const url = `${BACKEND_URL}${path}/delete/${id}`

    const config = {
      headers: {
        accept: 'application/json',
      },
    }

    const { data } = await axios.delete(url, config)

    dispatch({ type: DELETE_DATA_SUCCESS, payload: data })
  } catch (err) {
    dispatch({
      type: DELETE_DATA_ERROR,
      payload:
        err.response && err.response.data.detail
          ? err.response.data.detail
          : err.message,
    })
  }
}
