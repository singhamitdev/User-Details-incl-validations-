import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrroModal from "../UI/ErrroModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addUserHanlder = (event) => {
    event.preventDefault();

    if (user.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please enter a valid name and age (non-epmty value)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please enter a valid age (age>0)",
      });
      return;
    }
    props.onAddUser(user, age);
    setUser("");
    setAge("");
  };
  const errorHandler = () => {
    setError(null);
  };

  const userChangeHandler = (event) => {
    setUser(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      {error && (
        <ErrroModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHanlder}>
          <label htmlFor="UserName">User Name</label>
          <input
            type="text"
            id="UserName"
            value={user}
            onChange={userChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
