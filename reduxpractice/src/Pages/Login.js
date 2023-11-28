import React from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { updateDataAction, userActionLogin } from "../Actions/user.action";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.Ranu);

  const addDetailsHandler = () => {
    let details = {
      name: "Ranu",
      state: "Madhya Pradesh",
      city: "Banglore",
      gender: "Female",
      error: false,
    };
    dispatch(userActionLogin(details));
  };

  const updateDetailsHandler = () => {
    let details = {
      name: "Shahid",
      state: "Telangana",
      city: "Hyderabad",
      gender: "male",
      error: false,
    };
    dispatch(updateDataAction(details));
  };

  console.log(loading);
  return (
    <div>
      <Navbar />
      <h1>login page</h1>
      <button onClick={addDetailsHandler}> Add Details</button>
      {loading
        ? "Loading......."
        : user && (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.state}</h1>
              <h1>{user.gender}</h1>
              <button onClick={updateDetailsHandler}>Update data</button>
            </div>
          )}
    </div>
  );
};

export default Login;
