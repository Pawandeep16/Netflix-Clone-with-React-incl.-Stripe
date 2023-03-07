import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./row.css";

import Skeleton from "./Skeleton";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        setIsLoading(false);
        return request;
      } catch (error) {}
    }

    fetchData();
  }, [fetchUrl]);

  console.log(isLoading);
  return (
    <div className="row">
      {isLoading ? <Skeleton type="heading" /> : <h2>{title}</h2>}
      <div className="row_posters">
        {isLoading ? (
          isLargeRow ? (
            <Skeleton type="largeRow" />
          ) : (
            <Skeleton type="row" />
          )
        ) : (
          movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={`${movie.name}`}
                />
              )
          )
        )}
      </div>
    </div>
  );
}

export default Row;
