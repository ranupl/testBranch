import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Store1 } from "../App";

const Page2 = () => {
  const { isAuth, setisAuth, details } = useContext(Store1);
  return (
    <>
      <Navbar />
      <h1>{details.friend}</h1>

      <h1>{isAuth && details.name}</h1>
      <h1>{isAuth && details.dev}</h1>
    </>
  );
};

export default Page2;
