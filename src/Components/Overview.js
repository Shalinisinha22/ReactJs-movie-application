import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Overview.css";
import CircularProgress from '@mui/material/CircularProgress';

function Overview() {
  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const cMovie = JSON.parse(localStorage.getItem("CurrentMovie"));
    // console.log(cMovie[0].show.name);

    if (cMovie) {
      setMovie(cMovie[0]);
    }
  }, []);

  const handleBooking = (movieName, movieImage) => {
    const movieInfo = [movieName, movieImage];
    localStorage.setItem("BuyTicket", JSON.stringify(movieInfo));
    navigate("/buyTicket");
  };

  return movie.length !== 0 ? (
    <div style={{ width: "100vw", marginTop: "2rem" }}>
      <div class="details-card">
        <div className="image-cont">
          <img
            class="card-img-top movieImage"
            src={movie.show.image.medium}
            alt={movie.show.name}
          />
        </div>

        <div class="card-body about">
          <h5
            class="card-title title"
            style={{ fontSize: "5rem", color: "black" }}
          >
            {movie.show.name}
          </h5>
          <p class="card-title " style={{ color: "black" }}>
            {movie.show.genres[0]} | &nbsp;{movie.show.language}
          </p>
          {/* {console.log(movie.show.name)} */}
          <p
            class="card-text summary"
            style={{
              color: "black",
              textAlign: "justify",
              fontSize: "1.5rem",
              marginTop: "2rem",
            }}
          >
            {movie.show.summary}
          </p>

          <div
            className="button"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              alignItems: "center",
            }}
          >
            <Link
              to="/"
              class="btn btn-primary"
              style={{ margin: "1rem", width: "10rem" }}
            >
              Back
            </Link>
            <a
              class="btn btn-primary"
              onClick={() =>
                handleBooking(movie.show.name, movie.show.image.medium)
              }
              style={{ margin: "1rem", width: "10rem" }}
            >
              Book tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1 style={{textAlign:"center"}}><CircularProgress /></h1>
  );
}

export default Overview;
