import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Movies.css";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Movies() {
  const [movies, setMovie] = useState([]);
  const [hover, setHover] = useState("");

  const [curr, setCurr] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      const allMovies = res.data;
      // console.log(allMovies);
      setMovie(allMovies);
    };

    loadData();
  }, []);

  const handleMouseEnter = (movieId) => {
    setHover(movieId);
  };
  const handleMouseLeave = () => {
    setHover("");
  };

  const handleClick = (movieId) => {
    const currMovie = movies.filter((movie) => movie.show.id == movieId);

    // console.log(currMovie);
    setCurr(currMovie);

    localStorage.setItem("CurrentMovie", JSON.stringify(currMovie));

    navigate("/overview");
  };

  return (
    <>
      <div className="movies-card">
        {movies.length == 0 ? (
         <h1 style={{textAlign:"center"}}><CircularProgress /></h1>
        ) : (
          movies.map((movie) => (
            <div
              class="movie-card"
              key={movie.show.id}
              onMouseEnter={() => handleMouseEnter(movie.show.id)}
              onMouseLeave={() => handleMouseLeave(movie.show.id)}
            >
              <img
                class="card-img-top movie-image"
                src={movie.show.image.medium}
                alt={movie.show.name}
              />
              <div class="movie-details">
                <div className="movie-name">
                  <h2>{movie.show.name}</h2>
                </div>
                <div className="movie-btn">
                  {movie.show.id == hover && (
                    <a
                      class="btn btn-primary button"
                      onClick={() => handleClick(movie.show.id)}
                    >
                      Show Details
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Movies;
