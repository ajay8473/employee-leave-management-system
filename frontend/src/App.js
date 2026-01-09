import { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ApplyLeave from "./pages/ApplyLeave";
import Dashboard from "./pages/Dashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div>
      <Signup />
      <Login setToken={setToken} />
      {token && <>
        <ApplyLeave token={token} />
        <Dashboard token={token} />
      </>}
    </div>
  );
}

export default App;
