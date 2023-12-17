import * as PropTypes from 'prop-types'

export default function File(props) {
  return (
    <>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        className="border-1 peer block w-2/3 appearance-none rounded-lg border-gray-200 bg-transparent pb-2.5 pt-5 text-xs text-amber-200 focus:border-amber-600 focus:outline-none focus:ring-0"
        required={props.required}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.id}
        className=" absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform px-2 text-sm capitalize text-amber-300 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
      >
        {props.inpTitle}
        {props.required && <sup className="font-bold text-red-600">*</sup>}
      </label>
    </>
  )
}

File.propTypes = {
  type: PropTypes.any,
  id: PropTypes.any,
  name: PropTypes.any,
  required: PropTypes.any,
  onChange: PropTypes.func,
  inpTitle: PropTypes.any,
}
