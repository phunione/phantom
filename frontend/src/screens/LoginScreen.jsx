import LoginForm from '../components/Forms/LoginForm'

function LoginScreen({ className }) {
  return (
    <div
      className={`${className} flex min-h-screen items-center justify-center bg-base-100 bg-opacity-25`}
    >
      <div className="h-fit w-1/3 rounded-3xl bg-amber-300 px-10 py-5">
        <div className="mt-4 flex items-center justify-center">
          <span className={`text-4xl font-normal text-slate-900`}>Login</span>
        </div>
        <div className="flex items-center justify-center">{<LoginForm />}</div>
      </div>
    </div>
  )
}

export default LoginScreen
