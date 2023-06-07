import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <img
        style={{ height: "4rem", marginLeft: "5rem", marginTop: "0.2rem" }}
        src="https://img.icons8.com/3d-fluency/94/null/cinema-.png"
      ></img>
      <Link to="/" style={{ textDecoration: "none" }}>
       
        <h1 style={{ marginTop: "3%", color: "#00a8ff", marginLeft: "1rem" }}>
          Movies App
        </h1>
      </Link>
    </div>
  );
}

export default Navbar;
