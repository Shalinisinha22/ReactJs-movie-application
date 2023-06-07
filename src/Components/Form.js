import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form() {
  const [mName, setName] = useState([]);
  const [mImage, setImage] = useState([]);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState(0);
  const [totalTicket, setTicket] = useState(0);
  const [error, setError] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const movieDetail = JSON.parse(localStorage.getItem("BuyTicket"));
    if (movieDetail) {
      setName(movieDetail[0]);
      setImage(movieDetail[1]);
    }
    // console.log(mName, mImage);
  }, []);

  const handleName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleTicketNumber = (e) => {
    setTicket(e.target.value);
    const totalPrice = Number(e.target.value) * 150;

    setPrice(totalPrice);
  };

  const handleClick = () => {
    if (userName && mobileNumber && email && totalTicket) {
      const userArr = [
        {
          uName: userName,
          uMobile: mobileNumber,
          uEmail: email,
          uTickets: totalTicket,
          price: price,
          movieName: mName,
        },
      ];
      // console.log(userName,email,mobileNumber,totalTicket)
      let oldData = JSON.parse(localStorage.getItem("userInfo"));
      if (oldData != null) {
        let newData = [
          ...oldData,
          {
            uName: userName,
            uMobile: mobileNumber,
            uEmail: email,
            uTickets: totalTicket,
            price: price,
            movieName: mName,
          },
        ];
        localStorage.setItem("userInfo", JSON.stringify(newData));

        setError("");
        navigate("/ticket");
      } else {
        localStorage.setItem("userInfo", JSON.stringify(userArr));
        setError("");
        navigate("/ticket");
      }
    } else {
      setError("Please enter all the required information");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5rem",
        color: "black",
        height: "100%",
      }}
    >
      <div className="form-cont">
        <div
          className="movie-info"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
          }}
        >
          <img
            style={{ width: "20%", height: "15%", marginRight: "1rem" }}
            src={mImage}
            alt={mName}
          ></img>
          <h3>{mName}</h3>
        </div>

        <div class="form-group" style={{ color: "black", marginTop: "2rem" }}>
          <input
            type="name"
            class="form-control"
            id="InputName"
            placeholder="Fullname"
            onChange={handleName}
            spellCheck="false"
          />
        </div>

        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="InputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleEmail}
            spellCheck="false"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div class="form-group">
          <input
            type="number"
            class="form-control"
            id="phNumber"
            aria-describedby="emailHelp"
            placeholder="Enter mobile number"
            onChange={handleMobileNumber}
            spellCheck="false"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your mobile number with anyone else.
          </small>
        </div>

        <div class="form-group">
          <input
            type="number"
            class="form-control"
            id="seatNumber"
            aria-describedby="emailHelp"
            placeholder="No. of tickets"
            onChange={handleTicketNumber}
          />
        </div>

        {error ? (
          <h5 style={{ color: "black", textAlign: "center" }}>{error}</h5>
        ) : (
          <button type="submit" onClick={handleClick} class="btn btn-primary">
            Buy ticket
          </button>
        )}
      </div>
    </div>
  );
}

export default Form;
