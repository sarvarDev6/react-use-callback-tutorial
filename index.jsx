import "./App.css";
import React, { useState, useEffect, useCallback } from "react";

function App() {
  let [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  let [data, setData] = useState([]);
  const fetchTrip = useCallback(async () => {
    const req = await fetch(url);
    const data = await req.json();
    setData(data);
  }, [url]);

  useEffect(() => {
    fetchTrip();
  }, [fetchTrip]);

  return (
    <div className="App">
      <h1 className="text-7xl mb-10">Users</h1>
      {data.map((item) => {
        return (
          <h3 className="text-4xl mb-8">
            {item.id} - | - {item.name} - | - {item.email}
          </h3>
        );
      })}
    </div>
  );
}

export default App;