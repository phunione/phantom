import { useState } from 'react'

import Form from '../components/Form'
import URForm from '../components/unique-relation/Form.jsx'
import fields from '../utility/fields'

function AddDataScreen() {
  const [formType, setFormType] = useState(
    localStorage.getItem('formType') ? localStorage.getItem('formType') : '',
  )

  const options = Object.keys(fields)

  const getValue = (val) => {
    return val.replace(/[^a-zA-Z]+/g, ' ')
  }

  const handleFormTypeChange = (e) => {
    setFormType(e.target.value)
    localStorage.setItem('formType', e.target.value)
  }

  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-end pr-10 pt-10">
        <select
          id="form_type"
          value={formType}
          onChange={handleFormTypeChange}
          className="bg-base-100 inline-block w-48 rounded-lg border-2 border-amber-300 pt-2 text-center text-sm capitalize text-amber-400 focus:border-amber-300 focus:ring-0"
        >
          <option value="">Choose Form Type</option>
          {options.map((option, idx) => (
            <option key={idx} value={option} className={'capitalize'}>
              {getValue(option)}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center">
        {formType === 'actor' ? (
          <Form fields={fields[formType]} name={formType} />
        ) : formType === 'bank' ? (
          <Form fields={fields[formType]} name={formType} />
        ) : formType === 'banker' ? (
          <Form fields={fields[formType]} name={formType} />
        ) : formType === 'owner' ? (
          <Form fields={fields[formType]} name={formType} />
        ) : formType === 'company' ? (
          <Form fields={fields[formType]} name={formType} />
        ) : formType === 'unique-relation' ? (
          <URForm fields={fields[formType]} name={formType} />
        ) : formType === 'excel-company' ? (
          <Form fields={fields[formType]} name={formType} />
        ) : (
          <h1 className="mt-48 text-center text-5xl">
            Please select a type of Form you want to Fill
          </h1>
        )}
      </div>
    </>
  )
}

export default AddDataScreen
