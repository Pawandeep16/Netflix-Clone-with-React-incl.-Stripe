import React from "react";
import requests from "../../api/request";
import Banner from "../Banner";
import "./homeScreen.css";
import NavBar from "../Nav";
import Row from "../Row";
import Skeleton from "../Skeleton";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <NavBar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="ActionMoivies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default HomeScreen;
