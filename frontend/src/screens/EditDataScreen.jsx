import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Form from '../components/Form'
import fields from '../utility/fields'
import { getData } from '../redux/actions/dataActions'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'

function EditDataScreen({ formType }) {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')

  const dispatch = useDispatch()
  const { loading, data, error } = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(getData(formType, id))
  }, [dispatch, formType, id])
  return (
    <>
      {loading ? (
        <Loader className={'loading-lg'} />
      ) : error ? (
        <Message message={error} variant={'error'} />
      ) : (
        <>
          <div className="mt-6 flex flex-wrap items-center justify-center">
            {formType === 'actor' ? (
              <Form fields={fields.actor} name={formType} data={data} />
            ) : formType === 'bank' ? (
              <Form fields={fields.bank} name={formType} data={data} />
            ) : formType === 'banker' ? (
              <Form fields={fields.banker} name={formType} data={data} />
            ) : formType === 'owner' ? (
              <Form fields={fields.owner} name={formType} data={data} />
            ) : formType === 'company' ? (
              <Form fields={fields.company} name={formType} data={data} />
            ) : formType === 'excel-company' ? (
              <Form fields={fields.company} name={formType} data={data} />
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
