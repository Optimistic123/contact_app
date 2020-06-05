import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createSeveralcard(contactNo) {
  return (
    <Card
      key={contactNo.id}
      name={contactNo.name}
      img={contactNo.imgURL}
      tel={contactNo.phone}
      email={contactNo.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">NITUK 17-21 BATCH</h1>
      <div>{contacts.map(createSeveralcard)}</div>
    </div>
  );
}

export default App;
