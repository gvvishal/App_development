import React, { useState } from 'react';
import './LoginForm.css'; // Ensure to create this file for custom styling

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate a login request
    setTimeout(() => {
      setLoading(false);
      // Handle successful login or errors here
      console.log('Logging in with:', { email, password });
    }, 1000);
  };

  return (
    <div className="login-form-container">
      <h1 className="logo">MyApp</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
      <div className="links">
        <a href="/forgot-password">Forgot password?</a>
        <a href="/register">Create new account</a>
      </div>
    </div>
  );
};

export default LoginForm;
