import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const users = {
    het: { name: "Het Soni", email: "het@gmail.com", pass: "1234" },
    admin: { name: "Admin", email: "admin@gmail.com", pass: "admin" }
  };

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      if (users[username] && users[username].pass === password) {
        setUser(users[username]);
      } else {
        alert("Invalid Login");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container">
      {!user ? (
        <div className="card">
          <h2>Login</h2>

          <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

          <button onClick={handleLogin}>Login</button>

          {loading && <p>Loading...</p>}
        </div>
      ) : (
        <div className="card">
          <h2>User Profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;