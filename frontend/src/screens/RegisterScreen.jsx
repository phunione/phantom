import SignUpForm from '../components/Forms/SignUpForm.jsx'

function RegisterScreen({ className }) {
  return (
    <div
      className={`${className} flex min-h-screen items-center justify-center bg-base-100 bg-opacity-25`}
    >
      <div className="h-fit w-2/5 rounded-3xl border border-white bg-amber-300 px-10 py-5">
        <div className="mt-4 flex items-center justify-center">
          <span className={`text-4xl font-normal text-slate-900`}>Sign Up</span>
        </div>
        <div className="flex items-center justify-center">{<SignUpForm />}</div>
      </div>
    </div>
  )
}

export default RegisterScreen
