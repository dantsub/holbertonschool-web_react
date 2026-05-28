function Login({ onLogin }) {
  return(
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email"/>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password"/>
      <button onClick={onLogin}>OK</button>
    </>
  );
}

export default Login;
