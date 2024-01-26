import React, { useState } from "react";
// import "./styles.css";

const APIURL = "https://jsonplaceholder.typicode.com/users";
function SortUser() {
  // const APIURL = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState(0); // 0: default, 1: ascending, 2: descending
  const [clickCount, setClickCount] = useState(0);
  const getUsers = () => {
    return fetch(APIURL)
      .then((response) => response.json())
      .then((data) => setUsers(data));
    //write code here
    //render the list of users
  };
  const sortList = () => {
    if (clickCount % 3 === 0) {
      // Third click, reset to default state
      getUsers();
      setSortOrder(0);
    } else {
      // First and second click, sort the list
      const sortedUsers = [...users].sort((a, b) =>
        sortOrder === 1
          ? b.name.length - a.name.length
          : a.name.length - b.name.length
      );

      setUsers(sortedUsers);
      setSortOrder(sortOrder === 1 ? 2 : 1);
    }

    // Increment the click count
    setClickCount((prevCount) => prevCount + 1);
    // write code here
    // sort the user list by name's length
    // on first click list will sorted in assending order
    // on second click list will be sorted in descending order
    // on third click default list will be rendered
    // on fourth click again start form step 1
  };

  return (
    <main>
      <h1>User List</h1>
      <div>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={sortList}>Sort list </button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}

        {/*render the list of the users */}
      </ul>
    </main>
  );
}

export default SortUser;
