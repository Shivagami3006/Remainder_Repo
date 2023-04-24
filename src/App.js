import "./App.css";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import Createuser from "./createuser";
export const userCollectionRef = collection(db, "users");

function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    console.log(data);
    setUsers(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Createuser refetchUsers={getUsers} />
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              Name is <br></br>
              {user.name}
              <br></br>
              and event is{user.event}
              <button>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
