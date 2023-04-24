import React, { useState } from "react";

import { userCollectionRef } from "./App";
import { addDoc } from "firebase/firestore";

function Createuser({ refetchUsers }) {
  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
    const [date, setDate] = useState();

  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if(e.target.name === "event") {
      setEvent(e.target.value);
    }
    else{
        console.log('fordate', e.target.value)
        setDate(e.target.value);
    }
  };
  const handleSubmit = async () => {
    await addDoc(userCollectionRef, { name, event, date, createdAt: Date.now() });
    refetchUsers();
  };
  return (
    <div className="heading">
      <h2>Remaindrer</h2>
      <p>Add a Events</p>

      <section className="form">
        <div className="form-group">
          <div>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="enter name"
              id="event"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              name="event"
              type="text"
              className="form-control"
              id="event"
              placeholder="enter event"
              onChange={handleChange}
            />
          </div>
          <div className="form-control" placeholder="enter date">
            <input type="date" onChange={handleChange} />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-block"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Createuser;
