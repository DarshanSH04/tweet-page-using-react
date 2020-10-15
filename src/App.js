import React, { useState } from "react";
import Tweet from "./tweet";
import "./App.css";

function App() {
  const [user, setUsers] = useState([
    { name: "Sage", message: "WALL RAISED" },
    { name: "Omen", message: "I'M THE BEGINING, I'M THE END" },
    { name: "Pheonix", message: "COME ON, LETS GO!" },
  ]);

  return (
    <div className="App">
      {user.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;