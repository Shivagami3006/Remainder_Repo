import React, { useState } from "react";

import { userCollectionRef } from './App';
import { addDoc } from "firebase/firestore";

function Createuser({refetchUsers}) 
{
  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
//   const [date, setDate] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === 'name'){
        setName(e.target.value)
    }else{
        setEvent(e.target.value)}
    // else{
    //     setDate(Number(e.target.value));
    // }
    };
    const handleSubmit = async () => {
         await addDoc(userCollectionRef,{name,event});
        refetchUsers();
    }
  return(
    <div className="box">
  <div>
    <label>Name</label>
    <input
      name="name"
      type="text"
      className="box1"
      id="event"
      onChange={handleChange}
    />
  </div>
  <div>
    <label>Event</label>
    <input
      name="event"
      type="text"
      className="box1"
      id="event"
      onChange={handleChange}
    />
  </div>
  <div className="box1">
    <input type="date"/>
  </div>


  
  <div>
        <button className="" onClick={handleSubmit}>Submit</button>
    </div>
    </div>


  )
 



 };



export default Createuser;
