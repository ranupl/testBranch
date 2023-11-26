import { useContext } from "react";
import { Store1 } from "../App";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(Store1);
  console.log(isAuth);

  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
