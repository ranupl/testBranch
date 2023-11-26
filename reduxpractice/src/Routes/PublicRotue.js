import { useContext } from "react";
import { Store1 } from "../App";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isAuth } = useContext(Store1);
  console.log(isAuth);

  if (isAuth) {
    return <Navigate to="/page2" />;
  }
  return children;
};

export default PublicRoute;
