import { useEffect, useState } from 'react'
import { getAllData } from '../../redux/actions/dataActions.js'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader.jsx'

const Form = () => {
  const [company, setCompany] = useState('')
  const [banker, setBanker] = useState('')
  const [owner, setOwner] = useState('')
  const [actor, setActor] = useState('')
  const [type, setType] = useState('')

  const dispatch = useDispatch()

  const allCompanyData = useSelector((state) => state.allData)
  const { loading, data: companyOptions, error } = allCompanyData

  const [bankerOptions, setBankerOptions] = useState(undefined)
  const [ownerOptions, setOwnerOptions] = useState([])
  const [actorOptions, setActorOptions] = useState([])

  console.log('bankerOptions', bankerOptions)
  console.log('ownerOptions', ownerOptions)

  const fetchData = async () => {
    // await axios.get(`${BACKEND_URL}/company/owner`)
  }

  useEffect(() => {
    dispatch(getAllData('company'))
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : (
    <form
      className="flex w-full flex-col items-center overflow-auto px-20"
      name={name}
      // onSubmit={handleSubmition}
    >
      {/*Message for the error*/}
      {error && <div className={'text-red-600'}>{error}</div>}

      {/*Actual Form starts*/}
      <div className="flex w-full flex-wrap items-center justify-start py-6">
        <label className="form-control mr-4 w-1/4 max-w-xs">
          <div className="label">
            <span className="label-text">Select Company</span>
          </div>
          <select
            className="select select-bordered"
            onChange={(e) => {
              setCompany(e.target.value)
              const options = companyOptions?.filter(
                (option) => option.id.toString() === e.target.value,
              )[0]
              setOwnerOptions(options ? options.owner : [])
              setBankerOptions(options ? options.banker[0] : undefined)
              setBanker(options ? options.banker[0].id : '')
            }}
          >
            <option value={''}>Select Company</option>
            {companyOptions?.map((option, idx) => (
              <option key={idx} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </label>

        {bankerOptions && (
          <label className="form-control mr-4 w-1/4 max-w-xs">
            <div className="label">
              <span className="label-text">Select Banker</span>
            </div>
            <select
              className="select select-bordered"
              value={banker.id}
              onChange={(e) => {
                setOwner(e.target.value)
              }}
              disabled
            >
              <option value={bankerOptions.id}>{bankerOptions.name}</option>
            </select>
          </label>
        )}

        {ownerOptions.length > 0 && (
          <label className="form-control w-1/4 max-w-xs">
            <div className="label">
              <span className="label-text">Select Owner</span>
            </div>
            <select
              className="select select-bordered"
              onChange={(e) => {
                setOwner(e.target.value)
              }}
            >
              <option value={''}>Select Owner</option>
              {ownerOptions?.map((option, idx) => (
                <option key={idx} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-blue-800 sm:w-32 sm:text-lg"
      >
        Submit
        {/*{loading ? <Loader /> : 'Submit'}*/}
      </button>
    </form>
  )
}

export default Form
