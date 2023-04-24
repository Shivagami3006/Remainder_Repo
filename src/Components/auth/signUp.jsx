import { useState } from "react";
import React from "react";
import { FBauth } from "../../firebase";
import {  createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(FBauth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
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
        <button type="submit">Log Out</button>
      </form>
    </div>
  );
}

export default SignUp;
