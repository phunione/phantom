import axios from 'axios'
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

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000'

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
    } else if (name === 'owner') {
      config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const body = new FormData()

      body.append('name', details['name'])
      body.append('adhar_number', details['adhar_number'])
      body.append('pan_number', details['pan_number'])
      body.append('din_number', details['din_number'])
      body.append('sim_number', details['sim_number'])
      body.append('type', details['type'])
      body.append(
        'otp_phoneNr',
        details['otp_phoneNr'] === undefined ? '' : details['otp_phoneNr'],
      )
      body.append(
        'per_phone',
        details['per_phone'] === undefined ? '' : details['per_phone'],
      )
      body.append(
        'email',
        details['email'] === undefined ? '' : details['email'],
      )
      body.append(
        'mother_name',
        details['mother_name'] === undefined ? '' : details['mother_name'],
      )
      body.append(
        'address',
        details['address'] === undefined ? '' : details['address'],
      )

      body.append(
        'actor',
        details['actor'] === undefined ? '' : JSON.stringify(details['actor']),
      )
      body.append(
        'company',
        details['company'] === undefined
          ? ''
          : JSON.stringify(details['company']),
      )
      body.append(
        'banker',
        details['banker'] === undefined
          ? ''
          : JSON.stringify(details['banker']),
      )
      body.append(
        'pdfs',
        details['pdfs'] === undefined ? '' : JSON.stringify(details['pdfs']),
      )

      details = body
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
      body.append('pan_number', details['pan_number'])
      body.append('pan_dob', details['pan_dob'])
      body.append('company_status', details['company_status'])
      body.append('querry_filled', details['querry_filled'])
      body.append('isMaharashtra', details['isMaharashtra'])
      body.append('state', details['state'])
      body.append('type', details['type'])
      body.append(
        'address',
        details['address'] === undefined ? '' : details['address'],
      )
      body.append(
        'actor',
        details['actor'] === undefined ? '' : JSON.stringify(details['actor']),
      )
      body.append(
        'bank',
        details['bank'] === undefined ? '' : JSON.stringify(details['bank']),
      )
      body.append(
        'banker',
        details['banker'] === undefined
          ? ''
          : JSON.stringify(details['banker']),
      )
      body.append(
        'owner',
        details['owner'] === undefined ? '' : JSON.stringify(details['owner']),
      )
      body.append(
        'pdfs',
        details['pdfs'] === undefined ? '' : JSON.stringify(details['pdfs']),
      )
      details = body
    } else if (name === 'excel-company') {
      config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const body = new FormData()

      body.append('start', details['start'])
      body.append('end', details['end'])
      body.append('excel', details['excel'])

      details = body
    }

    await axios.post(`${url}/add/`, details, config)

    dispatch({ type: ADD_DATA_SUCCESS, payload: 'Successfully Added' })
  } catch (e) {
    dispatch({
      type: ADD_DATA_ERROR,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.message,
    })
  }
}

export const editDataForm = (id, details, name) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_DATA_REQUEST })

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
    } else if (name === 'owner') {
      config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const body = new FormData()

      if (details['name']) {
        body.append('name', details['name'])
      }
      if (details['adhar_number']) {
        body.append('adhar_number', details['adhar_number'])
      }
      if (details['pan_number']) {
        body.append('pan_number', details['pan_number'])
      }
      if (details['din_number']) {
        body.append('din_number', details['din_number'])
      }
      if (details['sim_number']) {
        body.append('sim_number', details['sim_number'])
      }
      if (details['type']) {
        body.append('type', details['type'])
      }
      if (details['otp_phoneNr']) {
        body.append('otp_phoneNr', details['otp_phoneNr'])
      }
      if (details['per_phone']) {
        body.append('per_phone', details['per_phone'])
      }
      if (details['email']) {
        body.append('email', details['email'])
      }
      if (details['mother_name']) {
        body.append('mother_name', details['mother_name'])
      }
      if (details['address']) {
        body.append('address', details['address'])
      }
      if (details['actor']) {
        body.append('actor', JSON.stringify(details['actor']))
      }
      if (details['company']) {
        body.append('company', JSON.stringify(details['company']))
      }
      if (details['banker']) {
        body.append('banker', JSON.stringify(details['banker']))
      }
      if (details['pdfs']) {
        for (const pdf in details['pdfs']) {
          body.append('pdfs', pdf)
        }
      }

      details = body
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

      if (details['name']) body.append('name', details['name'])
      if (details['pan_number']) {
        body.append('pan_number', details['pan_number'])
      }
      if (details['pan_dob']) {
        body.append('pan_dob', details['pan_dob'])
      }
      if (details['company_status']) {
        body.append('company_status', details['company_status'])
      }
      if (details['querry_filled']) {
        body.append('querry_filled', details['querry_filled'])
      }
      if (details['isMaharashtra']) {
        body.append('isMaharashtra', details['isMaharashtra'])
      }
      if (details['state']) {
        body.append('state', details['state'])
      }
      if (details['type']) {
        body.append('type', details['type'])
      }
      if (details['address']) {
        body.append('address', details['address'])
      }
      if (details['actor']) {
        body.append('actor', JSON.stringify(details['actor']))
      }
      if (details['bank']) {
        body.append('bank', JSON.stringify(details['bank']))
      }
      if (details['banker']) {
        body.append('banker', JSON.stringify(details['banker']))
      }
      if (details['owner']) {
        body.append('owner', JSON.stringify(details['owner']))
      }
      if (details['pdfs']) {
        for (const pdf in details['pdfs']) {
          body.append('pdfs', pdf)
        }
      }
    }

    details = body
  }

  console.log(details)

  await axios.put(`${url}/edit/${id}/`, details, config)

  dispatch({ type: EDIT_DATA_SUCCESS, payload: 'Successfully Edited' })
}
catch
(e)
{
  dispatch({
    type: EDIT_DATA_ERROR,
    payload:
      e.response && e.response.data.error ? e.response.data.error : e.message,
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
        e.response && e.response.data.error ? e.response.data.error : e.message,
    })
  }
}

export const getData = (dataFor, id) => async (dispatch) => {
  try {
    dispatch({ type: GET_DATA_REQUEST })

    const url = `${BACKEND_URL}/${dataFor}/${id}/`

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
        e.response && e.response.data.error ? e.response.data.error : e.message,
    })
  }
}

export const deleteData = (path, id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_DATA_REQUEST })

    const url = `${BACKEND_URL}${path}/delete/${id}/`

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
        err.response && err.response.data.error
          ? err.response.data.error
          : err.message,
    })
  }
}

export const getExcelCompanyData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_EXCEL_COMPANY_DATA_REQUEST })

    const url = `${BACKEND_URL}/excel-company/all/`
    const config = {
      headers: {
        accept: 'application/json',
      },
    }

    const { data } = await axios.get(url, config)

    dispatch({ type: GET_EXCEL_COMPANY_DATA_SUCCESS, payload: data })
  } catch (e) {
    dispatch({
      type: GET_EXCEL_COMPANY_DATA_ERROR,
      payload:
        e.response && e.response.data.error ? e.response.data.error : e.message,
    })
  }
}
