import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addDataToTheForm, editDataForm } from '../redux/actions/dataActions'
import { MultiSelect } from 'primereact/multiselect'
import moment from 'moment'

function Form({ fields, name, data }) {
  const [vals, setVals] = useState(data === undefined ? {} : data)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addData = useSelector((state) => state.addData)

  const { error: addError } = addData

  const getValue = (str) => {
    if (str === undefined || str === null || typeof str !== 'string') {
      return
    }

    if (str.substr(0, 6).toLowerCase() === 'select') {
      return ''
    }

    return str
  }

  const handleSubmition = (e) => {
    e.preventDefault()

    if (data) {
      dispatch(editDataForm(data._id, vals, name))
      navigate(`/${name}`)
    } else {
      console.log('submiting', vals)
      dispatch(addDataToTheForm(vals, name))
    }

    if (!addError) setVals({})
  }

  const convertDate = (date) => {
    return moment(date).format('YYYY-MM-DD')
  }
  return (
    <form
      className="flex flex-col items-center overflow-auto px-20"
      name={name}
      onSubmit={handleSubmition}
    >
      {addError && <div>{addError}</div>}
      <div className="flex flex-wrap items-center justify-start py-6">
        {fields.map((field, idx) => {
          const inpName = field.name,
            inpId = field.id,
            inpType = field.type,
            inpRequired = field.required,
            inpTitle = field.title

          return (
            <div className="relative mb-3 w-1/3" key={idx}>
              {inpType === 'boolean' ? (
                <label className="relative mr-5 inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    id={inpId}
                    name={inpName}
                    value={vals[inpName] === undefined ? false : vals[inpName]}
                    onChange={(e) => {
                      if (inpName === 'isMaharashtra') {
                        if (e.target.checked)
                          setVals({
                            ...vals,
                            [inpName]: e.target.checked,
                            location: 'Maharashtra',
                          })
                        else
                          setVals({
                            ...vals,
                            [inpName]: e.target.checked,
                            location: '',
                          })
                      }
                    }}
                    className="peer sr-only"
                  />
                  <div className="peer h-6 w-11 rounded-full bg-red-500 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                  <span className="ml-3 text-sm  capitalize text-gray-900">
                    {inpTitle}
                    {inpRequired && (
                      <sup className="font-bold text-red-600">*</sup>
                    )}
                  </span>
                </label>
              ) : inpType === 'select' ? (
                <div className="w-full flex-col flex-wrap items-center justify-start pr-10 ">
                  <label
                    htmlFor={inpId}
                    className="mb-1 block text-xs capitalize"
                  >
                    {inpTitle}
                    {inpRequired && (
                      <sup className="font-bold text-red-600">*</sup>
                    )}
                  </label>
                  <select
                    value={vals[inpName] === undefined ? '' : vals[inpName]}
                    name={inpName}
                    id={inpId}
                    onChange={(e) => {
                      setVals({ ...vals, [inpName]: e.target.value })
                    }}
                    required={inpRequired}
                    className="block w-48 rounded-lg border border-gray-300 bg-gray-50 pt-2 text-center text-sm capitalize text-gray-900 focus:border-gray-300 focus:ring-0"
                  >
                    {field.options.map((option, idx) => (
                      <option
                        value={getValue(option.name ? option.name : option)}
                        className="capitalize"
                        key={idx}
                      >
                        {option.name ? option.name : option}
                      </option>
                    ))}
                  </select>
                </div>
              ) : inpType === 'multiselect' ? (
                <MultiSelect
                  value={vals[inpName]}
                  onChange={(e) => {
                    setVals({
                      ...vals,
                      [inpName]: e.value,
                    })
                  }}
                  options={field.options}
                  optionLabel={'name'}
                  placeholder={`Select ${field.title}`}
                  aria-label="Option"
                  filter
                  maxSelectedLabels={1}
                  className="w-full border capitalize md:w-48"
                />
              ) : (
                <>
                  <input
                    type={inpType}
                    id={inpId}
                    name={inpName}
                    className="border-1 peer block w-2/3 appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                    required={inpRequired}
                    value={
                      vals[inpName] === undefined
                        ? ''
                        : inpType === 'file'
                        ? null
                        : inpType === 'date'
                        ? convertDate(vals[inpName])
                        : vals[inpName]
                    }
                    onChange={(e) => {
                      setVals({
                        ...vals,
                        [inpName]:
                          inpType === 'file'
                            ? e.target.files[0]
                            : e.target.value,
                      })
                    }}
                    onWheel={(e) => inpType === 'number' && e.target.blur()}
                  />
                  <label
                    htmlFor={inpId}
                    className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm capitalize text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                  >
                    {inpTitle}
                    {inpRequired && (
                      <sup className="font-bold text-red-600">*</sup>
                    )}
                  </label>
                </>
              )}
            </div>
          )
        })}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-blue-800 sm:w-32 sm:text-lg"
      >
        Submit
      </button>
    </form>
  )
}

export default Form
