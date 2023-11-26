import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Form from '../components/Form'
import fields from '../utility/fields'
import { getData } from '../redux/actions/dataActions'

function EditDataScreen({ formType }) {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')

  const dispatch = useDispatch()
  const { loading, data, error } = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(getData(formType, id))
  }, [])
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="mt-6 flex flex-wrap items-center justify-center">
            {formType === 'actor' ? (
              <Form fields={fields.actor} name="actor" data={data} />
            ) : formType === 'bank' ? (
              <Form fields={fields.bank} name="bank" />
            ) : formType === 'banker' ? (
              <Form fields={fields.banker} name="banker" />
            ) : formType === 'id' ? (
              <Form fields={fields.id} name="id" />
            ) : formType === 'company' ? (
              <Form fields={fields.company} name="company" />
            ) : (
              <h1 className="mt-48 text-center text-5xl">
                Please select a type of Form you want to Fill
              </h1>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default EditDataScreen
