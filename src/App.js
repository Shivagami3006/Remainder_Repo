import "./App.css";
import SignUp from "./Components/auth/signUp";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs, orderBy } from "firebase/firestore";
import Createuser from "./createuser";
import AuthDetails from "./Components/AuthDetails";
import SignIn from "./Components/auth/SignIn";
export const userCollectionRef = collection(db, "users");

function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const data = await getDocs(userCollectionRef, orderBy("createdAt"));
    console.log(data);
    const event_data = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    console.log('event_data', event_data?.sort((a,b) => b.createdAt - a.createdAt))
    setUsers(event_data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <SignIn />
      <SignUp />
      {/* <AuthDetails/> */}
      <Createuser refetchUsers={getUsers} />
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              Name is <br></br>
              {user.name}
              <br></br>
              and event is{user.event}
              <button className="btn">X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
