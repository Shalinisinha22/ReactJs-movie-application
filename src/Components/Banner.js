import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

function Banner() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      const movies = res.data;
      // console.log(movies[2].show.image.medium);
      setMovie(movies[2].show.image.original);
    };

    loadData();
  }, []);

  return (
    <div>
      <div class="banner-card">
        <img
          class="card-img-top"
          src={movie}
          style={{ width: "100%", height: "100%" }}
          alt={<CircularProgress></CircularProgress>}
        />
      </div>
    </div>
  );
}

export default Banner;
