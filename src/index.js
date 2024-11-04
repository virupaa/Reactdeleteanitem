import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const userData = [
  { id: "100", name: "Chanda Mittal" },
  { id: "101", name: "Sumati Pau" },
  { id: "103", name: "Lal Sahota" },
  { id: "104", name: "Vasundhara Bala" },
  { id: "105", name: "Rakesh Andra" },
];

function ListComponent() {
  const [users, setUsers] = useState(userData);

  const handleDelete = (index) => {
    setUsers(userData.filter((_, i) => i !== index));
  };

  return (
    <div>
      <ul>
        {users.map((item, index) => (
          <li>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<ListComponent />, document.getElementById("root"));
