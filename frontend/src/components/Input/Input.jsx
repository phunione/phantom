import * as PropTypes from 'prop-types'

export default function Input(props) {
  return (
    <>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        className="border-1 peer block w-2/3 appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
        placeholder=" "
        required={props.required}
        value={
          props.vals[props.name] === undefined
            ? ''
            : props.type === 'date'
            ? props.s
            : props.vals[props.name]
        }
        onChange={props.onChange}
        onWheel={props.onWheel}
      />
      <label
        htmlFor={props.id}
        className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm capitalize text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
      >
        {props.inpTitle}
        {props.required && <sup className="font-bold text-red-600">*</sup>}
      </label>
    </>
  )
}

Input.propTypes = {
  type: PropTypes.any,
  id: PropTypes.any,
  name: PropTypes.any,
  required: PropTypes.any,
  vals: PropTypes.any,
  s: PropTypes.string,
  onChange: PropTypes.func,
  onWheel: PropTypes.func,
  inpTitle: PropTypes.any,
}