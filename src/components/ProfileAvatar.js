import React, { useState } from "react";
import "./profileAvatar.css";
import Data from "../api/Data";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import db from "../firebase";

function ProfileAvatar(props) {
  const user = useSelector(selectUser);
  const [pimage, setPimage] = useState(
    "https://i.pinimg.com/originals/db/70/dc/db70dc468af8c93749d1f587d74dcb08.png"
  );
  const updateProfileData = () => {
    db.collection("usersprofile")
      .doc(user.email)
      .set({
        imgUrl: pimage,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <div className="ProfileAvatar">
      <div className="imagesContainer">
        {Data.map((images) => {
          return (
            <img
              className="image"
              alt=""
              key={images.id}
              src={images.imageUrl}
              onClick={() => {
                setPimage(images.imageUrl);
                updateProfileData();
                props.ChangeImage(images.imageUrl);
              }}
            />
          );
        })}
        <span>Double Click to Apply</span>
      </div>
    </div>
  );
}

export default ProfileAvatar;
