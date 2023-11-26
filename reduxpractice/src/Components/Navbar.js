import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Store1 } from "../App";

const Navbar = () => {
  const { isAuth } = useContext(Store1);
  return (
    <div style={{ background: "yellow", display: "flex", padding: "10px" }}>
      <li>
        <Link to="/page1">Page-1</Link>
      </li>
      <li>
        <Link to="/page2">Page-2</Link>
      </li>
      {!isAuth && (
        <li>
          <Link to="/">Login page</Link>
        </li>
      )}
      {/* <li>
        <Link to="/goats">Goats</Link>
      </li> */}
    </div>
  );
};
export default Navbar;
