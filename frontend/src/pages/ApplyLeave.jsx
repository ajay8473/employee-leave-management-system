import { useState } from "react";
import { applyLeave } from "../services/api";

export default function ApplyLeave({ token }) {
  const [leave, setLeave] = useState({
    startDate: "",
    endDate: "",
    reason: ""
  });

  const submit = async () => {
    await applyLeave(leave, token);
    alert("Leave applied");
  };

  return (
    <div>
      <h2>Apply Leave</h2>
      <input type="date" onChange={e=>setLeave({...leave,startDate:e.target.value})}/>
      <input type="date" onChange={e=>setLeave({...leave,endDate:e.target.value})}/>
      <input placeholder="Reason"
        onChange={e=>setLeave({...leave,reason:e.target.value})}/>
      <button onClick={submit}>Apply</button>
    </div>
  );
}
