import { useState } from "react";
import { login } from "../services/api";

export default function Login({ setToken }) {
  const [data, setData] = useState({ email: "", password: "" });

  const submit = async () => {
    const res = await login(data);
    const json = await res.json();
    setToken(json.token);
    localStorage.setItem("token", json.token);
    alert("Login success");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setData({...data,email:e.target.value})} />
      <input placeholder="Password" type="password"
        onChange={e=>setData({...data,password:e.target.value})} />
      <button onClick={submit}>Login</button>
    </div>
  );
}
