import * as PropTypes from 'prop-types'

export default function Select(props) {
  const getValue = (str) => {
    if (typeof str === 'number') {
      return str.toString()
    }

    if (str === undefined || str === null || typeof str !== 'string') {
      return
    }

    if (str.substr(0, 6).toLowerCase() === 'select') {
      return ''
    }

    return str
  }

  return (
    <div className="w-full flex-col flex-wrap items-center justify-start pr-10 ">
      <label
        htmlFor={props.id}
        className="mb-1 block text-xs capitalize text-amber-300"
      >
        {props.inpTitle}
        {props.inpRequired && <sup className="font-bold text-red-600">*</sup>}
      </label>
      <select
        value={
          props.vals[props.name]
            ? Array.isArray(props.vals[props.name])
              ? props.vals[props.name][0].id
              : props.vals[props.name]
            : props.vals[props.id]
            ? props.vals[props.id]
            : ''
        }
        name={props.name}
        id={props.htmlFor}
        onChange={props.onChange}
        required={props.inpRequired}
        className="bg-base-100 block w-48 rounded-lg border border-amber-300 pt-2 text-center text-sm capitalize text-amber-200 focus:border-amber-300 focus:ring-0"
      >
        {props.options?.map((option, idx) => (
          <option
            value={getValue(option?.id === undefined ? option : option?.id)}
            className="capitalize"
            key={idx}
          >
            {option.name ? option.name : option}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any,
  inpTitle: PropTypes.any,
  inpRequired: PropTypes.any,
  vals: PropTypes.any,
  options: PropTypes.any,
  onChange: PropTypes.func,
}
