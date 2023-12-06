import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Store1 } from "../App";

const Page1 = () => {
  const { setisAuth } = useContext(Store1);
  return (
    <>
      <Navbar />
      <button onClick={() => setisAuth(true)}>Login</button>
      <button onClick={() => setisAuth(false)}>Logout</button>
    </>
  );
};

export default Page1;
