import React, { useState } from "react";
const PhoneBook = () => {
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");
  const [showData, setShowData] = useState([]);
  const handleClick = () => {
    setShowData([...showData, { userName, number }]);
    setUserName("");
    setNumber("");
  };
  return (
    <div>
      <h1>Phone BOOK</h1>
      <label htmlFor="name">Enter Name:</label> <br /> <br />
      <input
        type="text"
        placeholder="Add Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      
      />
      <br /> <br />
      <label htmlFor="number">Enter Phone number:</label> <br /> <br />
      <input
        type="number"
        placeholder="Add Phone Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button className="Add-btn" type="submit" onClick={handleClick}>
        Add contact{" "}
      </button>
      <br />
      <h2>My Contacts</h2>
      {showData.map((data, i) => {
        return (
          <div key={i}>
            <li>
              {data.userName} &nbsp; {data.number}
            </li>
          </div>
        );
      })}
    </div>
  );
};
export default PhoneBook;
