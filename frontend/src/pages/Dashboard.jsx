import { useEffect, useState } from "react";
import { myLeaves } from "../services/api";

export default function Dashboard({ token }) {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    myLeaves(token)
      .then(res => res.json())
      .then(data => setLeaves(data));
  }, [token]);

  return (
    <div>
      <h2>My Leaves</h2>
      {leaves.map(l => (
        <div key={l._id}>
          {l.startDate} - {l.endDate} | {l.status}
        </div>
      ))}
    </div>
  );
}
