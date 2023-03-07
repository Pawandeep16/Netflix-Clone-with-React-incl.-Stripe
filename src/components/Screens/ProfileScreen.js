import React, { useEffect, useState } from "react";
import "./profileScreen.css";
import NavBar from "../Nav";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import db, { auth } from "../../firebase";
import Plans from "./Plans";
import ProfileAvatar from "../ProfileAvatar";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const [show, setShow] = useState(false);
  const [getdata, setGetdata] = useState([]);
  const defaultImageUrl =
    "https://i.pinimg.com/originals/db/70/dc/db70dc468af8c93749d1f587d74dcb08.png";
  const [pimage, setPimage] = useState(defaultImageUrl);

  const fetchdata = () => {
    return db
      .collection("usersprofile")
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
    fetchdata();
  }, [fetchdata]);

  return (
    <div className="ProfileScreen">
      <NavBar />
      <div className="profileScreenBody">
        <h1>Edit Profile</h1>
        <div className="profileScreenInfo">
          <div className="imagecontainer">
            {Object.entries(getdata).map(([id, data]) => {
              return !data ? (
                <img className="imageUpdate" src={defaultImageUrl} alt="" />
              ) : (
                <img
                  className="imageUpdate"
                  src={data}
                  alt=""
                  onClick={() =>
                    show === false ? setShow(true) : setShow(false)
                  }
                />
              );
            })}

            <span>Change Your Avatar</span>

            {show === true ? (
              <ProfileAvatar
                ChangeImage={(image) => {
                  setPimage(image);
                }}
              />
            ) : null}
          </div>

          <div className="profileDetails">
            <h2>{user.email}</h2>
            <div className="profileScreenPlans">
              <h3>Plans</h3>
              <Plans />
              <button
                onClick={() => auth.signOut()}
                className="profileScreenButton"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
