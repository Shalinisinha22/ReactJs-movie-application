import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function Ticket() {
  const [userInfo, setUserInfo] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      setUserInfo(user);
    }
    console.log(userInfo);
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  return userInfo.length != 0 ? (
    <div
      className="ticket"
      style={{
        display: "flex",
        marginTop: "10rem",
        color: "black",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {userInfo.map((user, idx) => (
        <div
          class="card-body"
          key={idx}
          style={{
            width: "35rem",
            height: "33rem",
            backgroundColor: "#f1f2f6",
            margin: "3rem",
            boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"
          }}
        >
          <h1 class="card-title">Your Ticket</h1>
          <div className="user-info">
            <h3>{user.uName}</h3>
            <p>
              {user.uEmail} |&nbsp; {user.uMobile}
            </p>
            <h3>Movie Name: {user.movieName}</h3>
            <h3>No. of ticket: {user.uTickets} </h3>
            <h3>Total Price: Rs {user.price}</h3>

            <button onClick={handleClick} class="btn btn-primary">
              Back to Home
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <><h1 style={{textAlign:"center"}}><CircularProgress /></h1></>
  );
}

export default Ticket;
