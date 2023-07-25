
const Login = () => {

    const handleGoogleLogin = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    }

    // const handleFacebookLogin = () => {
    //     window.open("http://localhost:5000/auth/facebook", "_self")
    // }
  return (
    <div>
        <h1>LOGIN method</h1>
        <div>
            <button onClick={handleGoogleLogin}>GOOGLE</button>
            {/* <button onClick={handleFacebookLogin}>FACEBOOK</button> */}
        </div>
    </div>
  )
}

export default Login