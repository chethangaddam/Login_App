// Write your code here
const Logout = props => {
  const {logout} = props
  return (
    <div>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
