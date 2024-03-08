// Write your code here

const Login = props => {
  const {login} = props
  return (
    <div>
      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  )
}

export default Login
