import { useState, useEffect } from "react";
// import { signOut } from "../firebase";
import "firebase/auth";
import { FBauth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(FBauth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () =>{
      listen();
    }
  }, []);
  const userSignOut = () =>{
    signOut(FBauth).then(()=>{
      console.log ('sign out successful')
    }).catch(error => console.log(error))
  }
    return(<div>
      {authUser ? <> <p>{`Singned In as ${authUser.email}`}</p><button onClick={ userSignOut}>Sign Out </button></> :<p>Signed out</p> }
      </div>)
};

export default AuthDetails;
