function Form({ fields }) {
  return (
    <form className="flex flex-col items-center overflow-auto px-20">
      <div className="flex flex-wrap items-center justify-start py-6">
        {fields.map((field) => (
          <div class="relative mb-6 w-1/3">
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              class="border-1 peer block w-2/3 appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required={field.required}
            />
            <label
              for={field.id}
              class="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm capitalize text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              {field.title}
              {field.required && (
                <sup className="font-bold text-red-600">*</sup>
              )}
            </label>
          </div>
        ))}
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
