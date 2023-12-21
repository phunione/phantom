import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/actions/userActions'
import Message from '../Message'
import Loader from '../Loader'

function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('normal')

  const dispatch = useDispatch()
  const user = useSelector((state) => state.userRegister)

  const { error, userInfo, loading } = user
  const message = userInfo?.message

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(register(type, email, password))
  }

  return (
    <form className="w-full px-8 py-5" onSubmit={handleSubmit}>
      {error && <Message className="mb-5" message={error} variant={'error'} />}
      {message && (
        <Message className="mb-5" message={message} variant={'success'} />
      )}

      <div className="relative w-full">
        <input
          type={'email'}
          id={'email'}
          name={'email'}
          className="peer block w-full appearance-none rounded-lg border border-amber-300 bg-white bg-opacity-50 px-2.5 pb-2.5 pt-4 text-sm text-slate-700 focus:border-yellow-200 focus:outline-none focus:ring-0"
          placeholder=" "
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          htmlFor={'email'}
          className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm capitalize text-slate-700 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-slate-900"
        >
          Email <sup className="font-bold text-red-600">*</sup>
        </label>
      </div>

      <div className="relative mt-5">
        <input
          type={'password'}
          id={'password'}
          name={'password'}
          className="peer block w-full appearance-none rounded-lg border border-amber-300 bg-white bg-opacity-50 px-2.5 pb-2.5 pt-4 text-sm text-slate-700 focus:border-yellow-200 focus:outline-none focus:ring-0"
          placeholder=" "
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          htmlFor={'email'}
          className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-transparent px-2 text-sm capitalize text-slate-700 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-slate-900"
        >
          Password <sup className="font-bold text-red-600">*</sup>
        </label>
      </div>

      <div className="relative mt-5 flex items-center justify-evenly">
        <div>
          <input
            type="radio"
            id="normal-user"
            name="userType"
            value={'normal'}
            className="radio-success radio mr-2"
            onChange={(e) => setType(e.target.value)}
            defaultChecked
          />
          <label
            htmlFor="normal-user"
            className={'cursor-pointer text-slate-800'}
          >
            Normal User
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="excel-user"
            name="userType"
            value={'excel'}
            className="radio-success radio mr-2"
            onChange={(e) => setType(e.target.value)}
          />
          <label
            htmlFor="excel-user"
            className={'cursor-pointer text-slate-800'}
          >
            Excel User
          </label>
        </div>
      </div>

      <div className={'flex items-center justify-center'}>
        <button
          type="submit"
          className="btn mt-4 flex items-center justify-center rounded-full border-blue-400 bg-blue-400 px-5 py-2 text-sm text-slate-900 hover:border-blue-500 hover:bg-blue-500 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          {loading ? (
            <Loader className={'mx-5 h-7 w-7 text-white'} />
          ) : (
            'Register'
          )}
        </button>
      </div>
    </form>
  )
}

export default SignupForm
