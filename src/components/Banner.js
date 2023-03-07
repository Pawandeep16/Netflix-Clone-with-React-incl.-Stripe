import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../api/axios";
import requests from "../api/request";
import Skeleton from "./Skeleton";
function Banner() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        setIsLoading(false);
        return request;
      } catch (error) {}
    }
    fetchData();
  }, []);

  const trunctate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {" "}
      {isLoading ? (
        <Skeleton type="bannerHeading" />
      ) : (
        <div className="banner_content">
          <h1 className="banner_title">
            {movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">Watch</button>
            <button className="banner_button">Add to WatchList</button>
          </div>
          <h1 className="banner_description">
            {trunctate(`${movie?.overview}`, 150)}
          </h1>
        </div>
      )}
      <div className="fade_bottom" />
    </header>
  );
}

export default Banner;
