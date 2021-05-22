import classes from "./UsersList.module.css";
import React from "react";

import Card from "../UI/Card";

const UsersList = (props) => {
  const deleteUserToProps = (event) => {
    props.onDeleteUser(event.target.id);
  };

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li onClick={deleteUserToProps} key={user.key}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
