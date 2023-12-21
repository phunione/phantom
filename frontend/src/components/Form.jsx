import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDataToTheForm, editDataForm } from '../redux/actions/dataActions'
import { MultiSelect } from 'primereact/multiselect'
import moment from 'moment'
import Boolean from './Input/Boolean.jsx'
import Select from './Input/Select.jsx'
import File from './Input/File.jsx'
import Input from './Input/Input.jsx'
import Loader from './Loader.jsx'
import Message from './Message.jsx'
import { getOptions } from '../App.jsx'

function Form({ fields: fieldsInProps, name, data }) {
  if (data && data['pdfs']) delete data['pdfs']

  const [vals, setVals] = useState(data === undefined ? {} : data)
  const [fields, setFields] = useState(fieldsInProps)

  const dispatch = useDispatch()

  const addData = useSelector((state) => state.addData)

  let { error: addError, loading } = addData

  const handleSubmition = (e) => {
    e.preventDefault()

    if (data) {
      dispatch(editDataForm(data.id, vals, name))
    } else {
      dispatch(addDataToTheForm(vals, name))
    }

    if (addError === undefined) setVals({})
  }

  const convertDate = (date) => {
    return moment(date).format('YYYY-MM-DD')
  }

  useEffect(() => {
    const fetchData = async () => {
      if (name === 'actor') {
        const bankOptions = await getOptions('bank')
        const bankerOptions = await getOptions('banker')
        const ownerOptions = await getOptions('owner')

        setFields(
          fieldsInProps.map((field) => {
            if (field.name === 'bank') {
              field.options = bankOptions
            }
            if (field.name === 'banker') {
              field.options = bankerOptions
            }
            if (field.name === 'owner') {
              field.options = ownerOptions
            }

            return field
          }),
        )
      } else if (name === 'bank') {
        const bankOptions = await getOptions('bank')
        setFields(
          fieldsInProps.map((field) => {
            if (field.name === 'bank') {
              field.options = bankOptions
            }

            return field
          }),
        )
      } else if (name === 'banker') {
        const actorOptions = await getOptions('actor')
        const bankOptions = await getOptions('bank')

        setFields(
          fieldsInProps.map((field) => {
            if (field.name === 'actor') {
              field.options = actorOptions
            }
            if (field.name === 'bank') {
              field.options = bankOptions
            }

            return field
          }),
        )
      } else if (name === 'company') {
        const actorOptions = await getOptions('actor')
        const bankOptions = await getOptions('bank')
        const bankerOptions = await getOptions('banker')
        const ownerOptions = await getOptions('owner')

        setFields(
          fieldsInProps.map((field) => {
            if (field.name === 'actor') {
              field.options = actorOptions
            }
            if (field.name === 'bank') {
              field.options = ['Select Bank', ...bankOptions]
            }
            if (field.name === 'banker') {
              field.options = ['Select Banker', ...bankerOptions]
            }
            if (field.name === 'owner') {
              field.options = ownerOptions
            }

            return field
          }),
        )
      } else if (name === 'owner') {
        const actorOptions = await getOptions('actor')
        const bankerOptions = await getOptions('banker')
        const companyOptions = await getOptions('company')

        setFields(
          fieldsInProps.map((field) => {
            if (field.name === 'actor') {
              field.options = actorOptions
            }
            if (field.name === 'banker') {
              field.options = bankerOptions
            }
            if (field.name === 'company') {
              field.options = companyOptions
            }

            return field
          }),
        )
      } else if (name === 'unique-relation') {
        const actorOptions = await getOptions('actor')
        const bankOptions = await getOptions('bank')
        const bankerOptions = await getOptions('banker')
        const ownerOptions = await getOptions('owner')

        setFields(
          fieldsInProps.map((field) => {
            if (field.name === 'actor') {
              field.options = ['Select Actor', ...actorOptions]
            }
            if (field.name === 'bank') {
              field.options = ['Select Bank', ...bankOptions]
            }
            if (field.name === 'banker') {
              field.options = ['Select Banker', ...bankerOptions]
            }
            if (field.name === 'owner') {
              field.options = ['Select Owner', ...ownerOptions]
            }

            return field
          }),
        )
      }
    }

    fetchData()
  }, [name])

  return (
    <form
      className="flex flex-col items-center overflow-auto px-20"
      name={name}
      onSubmit={handleSubmition}
    >
      {/*Message for the error*/}
      {addError && <Message message={addError} variant={'error'} />}

      {/*Actual Form starts*/}
      <div className="flex flex-wrap items-center justify-start py-6">
        {fields.map((field, idx) => {
          if (field) {
            const inpName = field.name,
              inpId = field.id,
              inpType = field.type,
              inpRequired = field.required,
              inpTitle = field.title

            return (
              <div className="relative mb-3 w-1/3" key={idx}>
                {inpType === 'boolean' ? (
                  <Boolean
                    id={inpId}
                    name={inpName}
                    vals={vals}
                    onChange={(e) => {
                      if (inpName === 'isMaharashtra') {
                        if (e.target.checked)
                          setVals({
                            ...vals,
                            [inpName]: e.target.checked,
                            state: 'Maharashtra',
                          })
                        else
                          setVals({
                            ...vals,
                            [inpName]: e.target.checked,
                            state: '',
                          })
                      } else {
                        setVals({
                          ...vals,
                          [inpName]: e.target.checked,
                        })
                      }
                    }}
                    inpTitle={inpTitle}
                    inpRequired={inpRequired}
                  />
                ) : inpType === 'select' ? (
                  <Select
                    id={inpId}
                    name={inpName}
                    inpTitle={inpTitle}
                    inpRequired={inpRequired}
                    vals={vals}
                    options={field.options}
                    onChange={(e) => {
                      setVals({ ...vals, [inpName]: e.target.value })
                    }}
                  />
                ) : inpType === 'multiselect' ? (
                  <MultiSelect
                    value={vals[inpName]}
                    onChange={(e) => {
                      setVals({
                        ...vals,
                        [inpName]: e.target.value,
                      })
                    }}
                    options={field.options}
                    optionLabel={'name'}
                    placeholder={`Select ${field.title}`}
                    checked={true}
                    filter
                    maxSelectedLabels={1}
                    panelClassName={'bg-yellow-300'}
                    itemClassName={
                      'bg-base-200 shadow-sm text-amber-200 focus:outline-none focus:ring-0'
                    }
                    className="w-full border border-amber-300 bg-transparent capitalize text-amber-200 focus:border-none focus:outline-none focus:ring-0 md:w-48"
                  />
                ) : inpType === 'file' ? (
                  <File
                    type={inpType}
                    id={inpId}
                    name={inpName}
                    required={inpRequired}
                    accept={
                      inpName === 'pdfs' ? 'application/pdf' : '.xls, .xlsx'
                    }
                    onChange={(e) => {
                      if (inpName === 'pdfs') {
                        setVals((vals) => ({
                          ...vals,
                          [inpName]: e.target.files,
                        }))
                      } else if (inpName === 'excel') {
                        const file = e.target.files[0]
                        let fileName = file.name
                        let fileExtension = fileName
                          .split('.')
                          .pop()
                          .toLowerCase()

                        if (
                          fileExtension === 'xls' ||
                          fileExtension === 'xlsx'
                        ) {
                          setVals({
                            ...vals,
                            [inpName]: e.target.files[0],
                          })
                        }
                      } else {
                        console.error(`${inpName} not supported`)
                      }
                    }}
                    inpTitle={inpTitle}
                  />
                ) : (
                  <Input
                    type={inpType}
                    id={inpId}
                    name={inpName}
                    required={inpRequired}
                    vals={vals}
                    s={convertDate(vals[inpName])}
                    onChange={(e) => {
                      setVals({
                        ...vals,
                        [inpName]: e.target.value,
                      })
                    }}
                    onWheel={(e) => inpType === 'number' && e.target.blur()}
                    inpTitle={inpTitle}
                  />
                )}
              </div>
            )
          }
        })}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-blue-800 sm:w-32 sm:text-lg"
      >
        {loading ? <Loader /> : 'Submit'}
      </button>
    </form>
  )
}

export default Form
