import { useState } from 'react';
import './App.css';

// Fake local users object
const USERS = {
  'user1': { password: 'password123', name: 'Alice Smith', email: 'alice@example.com' },
  'admin': { password: 'admin', name: 'Admin User', email: 'admin@example.com' }
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate network request with setTimeout
    setTimeout(() => {
      const user = USERS[username];
      if (user && user.password === password) {
        setCurrentUser(user);
        setIsLoggedIn(true);
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <div className="card profile-card">
          <h2>Welcome, {currentUser.name}!</h2>
          <div className="profile-info">
            <p><strong>Name:</strong> {currentUser.name}</p>
            <p><strong>Email:</strong> {currentUser.email}</p>
          </div>
          <button onClick={handleLogout} className="btn logout-btn">Logout</button>
        </div>
      ) : (
        <div className="card login-card">
          <h2>Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                disabled={isLoading}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button 
              type="submit" 
              className="btn login-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className="demo-credentials">
            <p>Demo Credentials:</p>
            <p>user1 / password123</p>
            <p>admin / admin</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
