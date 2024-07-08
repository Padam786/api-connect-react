import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);


  //to fetch user from backend
  const fetchUser = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:3000/user");

      // console.log(res.data.data);

      setUser(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  //to send data to backend


  
  //use sendata func where you want to send data to backend ,
  const sendData = async (data) => {
    try {
      const res = await axios.post("http://127.0.0.1:3000/user", data);
      console.log(res.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    
      <ul>
        {user.map((data) => (
          <div>
            <li>{data.name}</li>
            <li>{data.email}</li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;
