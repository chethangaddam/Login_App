// Write your code here

const Message = props => {
  const {IsLoggedIn} = props
  const message = IsLoggedIn ? 'Welcome User' : 'Please Login'
  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default Message
