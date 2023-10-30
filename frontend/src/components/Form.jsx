import { useState } from 'react'
import axios from 'axios'
import { url } from '../main'

function Form({ fields, name }) {
  const [vals, setVals] = useState({})

  const handleSubmition = (e) => {
    e.preventDefault()

    if (vals['rtds'] === undefined) {
      vals['rtds'] = false
    }
    if (vals['rt'] === undefined) {
      vals['rt'] = false
    }
    if (vals['forex'] === undefined) {
      vals['forex'] = false
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (name === 'banker') {
      if (vals['rtds'] === undefined) {
        vals['rtds'] = false
      }
      if (vals['rt'] === undefined) {
        vals['rt'] = false
      }
      if (vals['forex'] === undefined) {
        vals['forex'] = false
      }

      url += '/banker/add'

      axios.post(url, vals, config)
    }

    console.log(e.target.name, vals)
    // axios.post('/api', vals, config)
  }

  return (
    <form
      className="flex flex-col items-center overflow-auto px-20"
      name={name}
      onSubmit={handleSubmition}
    >
      <div className="flex flex-wrap items-center justify-start py-6">
        {fields.map((field, idx) => {
          const inpName = field.name

          return (
            <div className="relative mb-6 w-1/3" key={idx}>
              {field.type === 'boolean' ? (
                <label className="relative mr-5 inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    id={field.id}
                    name={inpName}
                    value={vals[inpName] === undefined ? '' : vals[inpName]}
                    onChange={(e) =>
                      setVals({ ...vals, [inpName]: e.target.checked })
                    }
                    className="peer sr-only"
                  />
                  <div className="peer h-6 w-11 rounded-full bg-red-500 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                  <span className="ml-3 text-sm  capitalize text-gray-900">
                    {field.title}
                    {field.required && (
                      <sup className="font-bold text-red-600">*</sup>
                    )}
                  </span>
                </label>
              ) : (
                <>
                  <input
                    type={field.type}
                    id={field.id}
                    name={inpName}
                    className="border-1 peer block w-2/3 appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                    required={field.required}
                    value={vals[inpName] === undefined ? '' : vals[inpName]}
                    onChange={(e) =>
                      setVals({ ...vals, [inpName]: e.target.value })
                    }
                    onWheel={(e) => field.type === 'number' && e.target.blur()}
                  />
                  <label
                    htmlFor={field.id}
                    className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm capitalize text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                  >
                    {field.title}
                    {field.required && (
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
