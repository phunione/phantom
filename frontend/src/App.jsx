import { useState } from 'react'
import Form from './components/Form'
import fields from './utility/fields'

function App() {
  const [formType, setFormType] = useState('')

  return (
    <div className="min-h-screen">
      <div className="flex w-full flex-wrap items-center justify-end pr-10 pt-10">
        <select
          id="form_type"
          value={formType}
          onChange={(e) => setFormType(e.target.value)}
          className="inline-block w-44 rounded-lg border-2 border-gray-300 bg-gray-50 pt-2 text-center text-sm text-gray-900 focus:border-gray-300 focus:ring-0"
        >
          <option value="">Choose Form Type</option>
          <option value="actor">Actor</option>
          <option value="bank">Bank</option>
          <option value="banker">Banker</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center">
        {formType === 'actor' ? (
          <Form fields={fields.actor} name="actor" />
        ) : formType === 'bank' ? (
          <Form fields={fields.bank} name="bank" />
        ) : formType === 'banker' ? (
          <Form fields={fields.banker} name="banker" />
        ) : (
          <h1 className="mt-48 text-center text-5xl">
            Please select a type of Form you want to Fill
          </h1>
        )}
      </div>
    </div>
  )
}

export default App
