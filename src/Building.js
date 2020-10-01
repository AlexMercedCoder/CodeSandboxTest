import React from "react";

//BUILDING
export const Building = (props) => {
  return <Floor10 />;
};

///////////////////////////
// BUILDING FLOORS
//////////////////////////

//FLOOR 10
const Floor10 = (props) => {
  const outbox = 10;
  const inbox = "Not Received";

  return (
    <>
      <h1>Today's mail: {inbox}</h1>
      <h2>Floor 10</h2>
      <Floor9 />
    </>
  );
};

//FLOOR 9
const Floor9 = (props) => {
  const outbox = 9;
  const inbox = "Not Received";

  return (
    <>
      <h1>Today's mail: {inbox}</h1>
      <h2>Floor 9</h2>
      <Floor8 />
    </>
  );
};

//FLOOR 8
const Floor8 = (props) => {
  const outbox = 8;
  const inbox = "Not Received";

  return (
    <>
      <h1>Today's mail: {inbox}</h1>
      <h2>Floor 8</h2>
      <Floor7 />
    </>
  );
};

//FLOOR 7
const Floor7 = (props) => {
  const outbox = 7;
  const inbox = "Not Received";

  return (
    <>
      <h1>Today's mail: {inbox}</h1>
      <h2>Floor 7</h2>
      <Floor6 />
    </>
  );
};

//FLOOR 6
const floor6Context = React.createContext(null);
const Floor6 = (props) => {
  const [mail, setMail] = React.useState("Not Received");
  const outbox = 6;
  const inbox = mail;

  return (
    <floor6Context.Provider value={{ outbox, setMail }}>
      <h1>Today's mail: {inbox}</h1>
      <h2>Floor 6</h2>
      <Floor5 />
    </floor6Context.Provider>
  );
};

//FLOOR 5
const Floor5 = (props) => {
  const fl6ctx = React.useContext(floor6Context);

  const outbox = 5;
  const inbox = fl6ctx.outbox;

  React.useEffect(() => fl6ctx.setMail(outbox), []);

  return (
    <>
      <h1>Today's mail: {inbox}</h1>
      <h2>Floor 5</h2>
      <Floor4 />
    </>
  );
};

//FLOOR 4
const Floor4 = (props) => {
  const outbox = 4;
  const inbox = "Not Received";

  return (
    <>
      <h1>Today's mail: {inbox}</h1>
      <h2>Floor 4</h2>
      <Floor3 />
    </>
  );
};

//FLOOR 3
const Floor3 = (props) => {
  const outbox = 3;
  const inbox = "Not Received";

  return (
    <>
      <h1>Today's mail: {inbox}</h1>
      <h2>Floor 3</h2>
      <Floor2 />
    </>
  );
};

//FLOOR 2
const Floor2 = (props) => {
  const outbox = 2;
  const inbox = "Not Received";

  return (
    <>
      <h1>Today's mail: {inbox}</h1>
      <h2>Floor 2</h2>
      <Floor1 />
    </>
  );
};

//FLOOR 1
const Floor1 = (props) => {
  const outbox = 1;
  const inbox = "Not Received";

  return (
    <>
      <h1>Today's mail: {inbox}</h1>
      <h2>GroundFloor</h2>
    </>
  );
};
