import * as PropTypes from 'prop-types'

export default function Boolean(props) {
  return (
    <label className="relative mr-5 inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        value={
          props.vals[props.name] === undefined ? false : props.vals[props.name]
        }
        checked={props.vals[props.name] === true}
        onChange={props.onChange}
        className="peer sr-only"
      />
      <div className="after:bg-base-100 peer-checked:after:border-base-100 after:border-base-100 peer h-6 w-11 rounded-full bg-red-500 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:transition-all after:content-[''] peer-checked:bg-yellow-300 peer-checked:after:translate-x-full"></div>
      <span className="ml-3 text-sm  capitalize text-amber-300">
        {props.inpTitle}
        {props.inpRequired && <sup className="font-bold text-red-600">*</sup>}
      </span>
    </label>
  )
}

Boolean.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any,
  vals: PropTypes.any,
  onChange: PropTypes.func,
  inpTitle: PropTypes.any,
  inpRequired: PropTypes.any,
}
