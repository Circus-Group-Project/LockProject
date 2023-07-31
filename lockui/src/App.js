import Login from './components/Login/Login';
import Navbar from "./components/Navbar/Navbar";
import React from "react";
function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  console.log(data)
  return (
    <>
    <Navbar></Navbar>
    <Login></Login>
    </>
  );
}

export default App;
