import {useState, useEffect} from "react";
import axios from "axios";

const App = () => {
//Our State.
  const [users, setUsers] = useState([])
  
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => setUsers(response.data))
    .catch(err => console.log(err))
  },[]);
return (
    <div className="container">
        {users.map(user => 
        <div className="card" >
          <p key={user.id}>{user.name}{user.username}</p>
          <p> {user.address.city}</p>
          <p> {user.address.street}</p>
          <p> {user.phone}</p>
          </div>
        )}
    </div>
  )
};
export default App;
