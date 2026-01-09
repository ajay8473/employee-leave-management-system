import { useState } from "react";
import { signup } from "../services/api";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    await signup(form);
    alert("Signup done");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})} />
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} />
      <input placeholder="Password" type="password"
        onChange={e=>setForm({...form,password:e.target.value})} />
      <button onClick={submit}>Signup</button>
    </div>
  );
}
