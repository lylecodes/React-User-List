import React, { useState } from "react";

import Header from "./components/UI/Header";
import UsersList from "./components/Users/UsersList";
import AddUser from "./components/Users/AddUser";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, key: Math.random() }];
    });
  };

  const deleteUserHandler = (deleteUser) => {
    setUsersList((prevUsersList) => {
      const updatedUserList = prevUsersList.filter(
        (user) => user.id !== deleteUser.id
      );
      return updatedUserList;
    });
  };

  return (
    <React.Fragment>
      <Header />
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && (
        <UsersList users={usersList} onDeleteUser={deleteUserHandler} />
      )}
    </React.Fragment>
  );
}

export default App;
