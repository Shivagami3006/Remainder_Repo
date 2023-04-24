import { useState } from "react";
import "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FBauth } from "../../firebase";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(FBauth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In </h1>
        <input
          type="email"
          placeholder="enter youe email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="enter youe password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default SignIn;
