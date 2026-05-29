import { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  return(
    <section className="login-container">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={user.email} onChange={handleChange}/>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" value={user.password} onChange={handleChange}/>
      <button onClick={() => onLogin(user.email, user.password)}>OK</button>
    </section>
  );
}

export default Login;
