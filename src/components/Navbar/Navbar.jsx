import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { Link, useParams } from "react-router-dom";
import logo from "./hackerlog.png";
export default function Navbar(props) {
  const { listId } = useParams();
  const [isSidebar, setIsSidebar] = useState(true);
  const handlerSidebar = () => {
    setIsSidebar(!isSidebar);
  };
  return (
    <div className="navbar-header">
      <div className="navbar-w">
        <div>
          <img className="navbar-w-logo" src={logo} />
        </div>
      </div>
    </div>
  );
}
