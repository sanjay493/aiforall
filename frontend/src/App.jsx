import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/hello`)
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return <>
  <h1 className="title">{msg}</h1>
  <h5 className="footer">Deployed with Docker and Oracle Cloud Infrastructure</h5>
  
  </>;
}

export default App;