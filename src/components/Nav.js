import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import "./nav.css";
function Nav() {
  const defaultImageUrl =
    "https://i.pinimg.com/originals/db/70/dc/db70dc468af8c93749d1f587d74dcb08.png";
  const [show, handelshow] = useState(false);
  const [getdata, setGetdata] = useState([]);
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handelshow(true);
    } else {
      handelshow(false);
    }
  };

  const fetchData = () => {
    db.collection("usersprofile")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (item) => {
          return db
            .collection("usersprofile")
            .doc(user.email)
            .get()
            .then((res) => {
              setGetdata(res.data());
            });
        });
      });
  };

  useEffect(() => {
    return fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_background"}`}>
      <div className="nav_content">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        {Object.entries(getdata).map(([id, data]) => {
          return (
            <img
              key={id}
              onClick={() => navigate("/profile")}
              className="nav_avatar"
              src={data}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
